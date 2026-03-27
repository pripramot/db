# Contributing to TanStack DB

Thanks for your interest in contributing to TanStack DB! This document will help you get started.

## Prerequisites

- [Node.js](https://nodejs.org/) v22+
- [pnpm](https://pnpm.io/) v10.26+

## Getting Started

1. Fork and clone the repo:

   ```bash
   git clone https://github.com/<your-username>/db.git
   cd db
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Build all packages:

   ```bash
   pnpm build
   ```

4. Run tests:

   ```bash
   pnpm test
   ```

## Development Workflow

### Project Structure

This is a monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces). Key directories:

| Directory | Description |
|-----------|-------------|
| `packages/db` | Core library |
| `packages/db-ivm` | Incremental View Maintenance engine |
| `packages/react-db` | React integration |
| `packages/vue-db` | Vue integration |
| `packages/angular-db` | Angular integration |
| `packages/solid-db` | Solid.js integration |
| `packages/svelte-db` | Svelte integration |
| `packages/query-db-collection` | TanStack Query adapter |
| `packages/electric-db-collection` | ElectricSQL adapter |
| `packages/offline-transactions` | Offline transaction support |
| `docs/` | Documentation source |
| `examples/` | Example applications |

### Common Commands

```bash
# Build all packages
pnpm build

# Run all tests
pnpm test

# Lint all packages
pnpm lint

# Format code
pnpm format

# Generate documentation
pnpm generate-docs
```

### Code Style

- **No semicolons** — enforced by Prettier
- **Single quotes** — enforced by Prettier
- **Trailing commas** — enforced by Prettier
- **TypeScript strict mode** — all packages use `strict: true`
- See [AGENTS.md](./AGENTS.md) for detailed coding guidelines

## Submitting a Pull Request

1. Create a feature branch from `main`
2. Make your changes with tests
3. Run `pnpm test` and `pnpm lint` to verify
4. If your change affects published packages, add a [changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md):
   ```bash
   pnpm changeset
   ```
5. Push your branch and open a PR

## Reporting Issues

- Use the [bug report template](https://github.com/TanStack/db/issues/new?template=bug_report.md) for bugs
- Use [GitHub Discussions](https://github.com/TanStack/db/discussions) for questions
- Join the [Discord](https://discord.com/invite/WrRKjPJ) for real-time help

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
