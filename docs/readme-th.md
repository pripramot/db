---
title: เกี่ยวกับ TanStack DB
id: readme-th
---

# TanStack DB

> ระบบจัดการข้อมูลฝั่ง Client แบบ Reactive สำหรับ API ของคุณ

TanStack DB อยู่ในช่วง **BETA** อยู่ในขณะนี้ — อ่านรายละเอียดเพิ่มเติมได้ที่ [บทความเปิดตัว](https://tanstack.com/blog/tanstack-db-0.1-the-embedded-client-database-for-tanstack-query)

## ทำไมต้อง TanStack DB?

TanStack DB ช่วยแก้ปัญหาที่นักพัฒนาเจอบ่อย ๆ ในการสร้างแอปที่เร็วและทันสมัย:

- **ลดความซับซ้อนของ API** — โหลดข้อมูลเข้า Collection แบบ Normalized ไม่ต้องสร้าง Endpoint ซ้ำซ้อน และไม่เกิด Network Waterfall
- **ประสิทธิภาพสูง** — Live Query ทำงานได้ในระดับต่ำกว่ามิลลิวินาที พร้อม Reactivity แบบเรียลไทม์
- **ตอบสนองทันที** — Optimistic Write ช่วยให้ผู้ใช้ไม่ต้องรอ Network ทำงานเสร็จ

ข้อมูลถูกโหลดอย่างมีประสิทธิภาพ การใช้งานรู้สึกฉับไว Backend ยังคงเรียบง่าย และแอปของคุณยังคงทำงานเร็วสุด ๆ ไม่ว่าจะโหลดข้อมูลมากแค่ไหนก็ตาม

## เริ่มต้นใช้งาน

### ติดตั้ง

```bash
npm install @tanstack/db @tanstack/react-db
```

```bash
pnpm add @tanstack/db @tanstack/react-db
```

```bash
yarn add @tanstack/db @tanstack/react-db
```

> รองรับ Framework หลากหลาย: **React**, **Vue**, **Angular**, **Solid** และ **Svelte** — เลือกใช้ตามที่คุณถนัดได้เลย

### ตัวอย่างการใช้งานเบื้องต้น

```tsx
import { createCollection } from "@tanstack/db"
import { useLiveQuery } from "@tanstack/react-db"

// สร้าง Collection สำหรับเก็บข้อมูลสินค้า
const productsCollection = createCollection<{
  id: string
  name: string
  price: number
}>()

// ใช้ Live Query ดึงข้อมูลแบบ Reactive
function ProductList() {
  const products = useLiveQuery((q) =>
    q.from({ products: productsCollection })
  )

  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.name} — ฿{item.price.toLocaleString("th-TH")}
        </li>
      ))}
    </ul>
  )
}
```

## ฟีเจอร์หลัก

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Normalized Collections** | จัดเก็บข้อมูลแบบ Normalized ลดความซ้ำซ้อน |
| **Live Queries** | Query แบบ Reactive อัปเดตอัตโนมัติเมื่อข้อมูลเปลี่ยน |
| **Optimistic Mutations** | เขียนข้อมูลแบบ Optimistic ตอบสนองผู้ใช้ทันที |
| **รองรับหลาย Framework** | React, Vue, Angular, Solid, Svelte |
| **Collection Adapters** | เชื่อมต่อกับ ElectricSQL, PowerSync, RxDB, TanStack Query และอื่น ๆ |
| **SQLite Persistence** | รองรับการบันทึกข้อมูลลง SQLite บน Browser, Electron, React Native, Tauri และอื่น ๆ |

## เอกสารประกอบ

อ่านเอกสารฉบับเต็มได้ที่ **[tanstack.com/db](https://tanstack.com/db)**:

- [ภาพรวม](overview) — ทำความรู้จัก TanStack DB
- [เริ่มต้นอย่างรวดเร็ว](quick-start) — เขียนโค้ดแรกของคุณ
- [การติดตั้ง](installation) — วิธีเพิ่มลงในโปรเจกต์
- [Live Queries](guides/live-queries) — การ Query ข้อมูลแบบ Reactive
- [Mutations](guides/mutations) — การเขียนข้อมูลแบบ Optimistic
- [Schemas](guides/schemas) — การกำหนดโครงสร้างข้อมูล

## มีส่วนร่วมกับเรา

เรายินดีต้อนรับทุกคนที่อยากมีส่วนร่วม:

- 🐛 แจ้งบั๊กหรือเปิด Pull Request ได้ที่ [GitHub](https://github.com/TanStack/db)
- 💬 พูดคุยแลกเปลี่ยนความเห็นที่ [GitHub Discussions](https://github.com/TanStack/db/discussions)
- 🎮 เข้าร่วมชุมชนนักพัฒนาที่ [Discord](https://discord.com/invite/WrRKjPJ)
- 📖 อ่านแนวทางการมีส่วนร่วมที่ [CONTRIBUTING.md](../CONTRIBUTING.md)

## พาร์ทเนอร์

TanStack DB ได้รับการสนับสนุนจากพาร์ทเนอร์ชั้นนำ:

- [CodeRabbit](https://www.coderabbit.ai/?via=tanstack) — AI Code Review
- [Cloudflare](https://www.cloudflare.com?utm_source=tanstack) — Cloud Platform
- [ElectricSQL](https://electric-sql.com) — Sync Engine
- [Prisma](https://www.prisma.io?utm_source=tanstack) — ORM

> สนใจเป็นพาร์ทเนอร์? ติดต่อได้ที่ [partners@tanstack.com](mailto:partners@tanstack.com?subject=TanStack%20DB%20Partnership)

## สำรวจ TanStack Ecosystem

- [TanStack Query](https://github.com/tanstack/query) — จัดการ Async State และ Caching
- [TanStack Router](https://github.com/tanstack/router) — Routing แบบ Type-safe
- [TanStack Form](https://github.com/tanstack/form) — จัดการ Form State แบบ Type-safe
- [TanStack Table](https://github.com/tanstack/table) — Headless Data Grid
- [TanStack Virtual](https://github.com/tanstack/virtual) — Virtualized Rendering
- [TanStack Store](https://github.com/tanstack/store) — Reactive Data Store
- [TanStack Start](https://github.com/tanstack/router) — Full-stack SSR และ Streaming
- [TanStack DevTools](https://github.com/tanstack/devtools) — เครื่องมือ Debug สำหรับนักพัฒนา

ดูเพิ่มเติมที่ **[TanStack.com](https://tanstack.com)**

---

<div align="center">

สร้างด้วย ❤️ โดยชุมชน TanStack — เอกสารภาษาไทยจัดทำเพื่อนักพัฒนาชาวไทยโดยเฉพาะ

</div>
