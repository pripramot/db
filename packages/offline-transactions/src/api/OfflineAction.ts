import { OnMutateMustBeSynchronousError } from '@tanstack/db'
import { OfflineTransaction } from './OfflineTransaction'
import type { Transaction } from '@tanstack/db'
import type {
  CreateOfflineActionOptions,
  OfflineMutationFn,
  OfflineTransaction as OfflineTransactionType,
} from '../types'

function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
  return (
    !!value &&
    (typeof value === `object` || typeof value === `function`) &&
    typeof (value as { then?: unknown }).then === `function`
  )
}

export function createOfflineAction<T>(
  options: CreateOfflineActionOptions<T>,
  mutationFn: OfflineMutationFn,
  persistTransaction: (tx: OfflineTransactionType) => Promise<void>,
  executor: any,
): (variables: T) => Transaction {
  const { mutationFnName, onMutate } = options

  return (variables: T): Transaction => {
    const offlineTransaction = new OfflineTransaction(
      {
        mutationFnName,
        autoCommit: false,
      },
      mutationFn,
      persistTransaction,
      executor,
    )

    const transaction = offlineTransaction.mutate(() => {
      const maybePromise = onMutate(variables) as unknown

      if (isPromiseLike(maybePromise)) {
        throw new OnMutateMustBeSynchronousError()
      }
    })

    // Immediately commit
    const commitPromise = (async () => {
      try {
        await transaction.commit()
      } catch {
        // Commit failure is handled by the offline transaction executor
      }
    })()

    // Don't await - this is fire-and-forget for optimistic actions
    // But catch to prevent unhandled rejection
    commitPromise.catch(() => {
      // Already handled in try/catch above
    })

    return transaction
  }
}
