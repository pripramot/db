<div align="center">
  <img src="./media/header_db.png" >
</div>

<br />

<div align="center">
	<a href="https://npmjs.com/package/@tanstack/db" target="\_parent">
	  <img alt="" src="https://img.shields.io/npm/dm/@tanstack/db.svg" alt="npm downloads" />
	</a>
	<a href="https://github.com/TanStack/db" target="\_parent">
	  <img alt="" src="https://img.shields.io/github/stars/TanStack/db.svg?style=social&label=Star" alt="GitHub stars" />
	</a>
	<a href="https://bundlejs.com/?q=%40tanstack%2Fdb&config=%7B%22esbuild%22%3A%7B%22external%22%3A%5B%22react%22%2C%22react-dom%22%5D%7D%7D&badge=" target="\_parent">
	  <img alt="" src="https://deno.bundlejs.com/?q=@tanstack/db&config={%22esbuild%22:{%22external%22:[%22react%22,%22react-dom%22]}}&badge=detailed" alt="Bundle size" />
	</a>
</div>

<div align="center">
	<a href="#status">
    <img src="https://img.shields.io/badge/status-beta-yellow" alt="Status - BETA">
  </a>
	<a href="https://bestofjs.org/projects/tanstack-db">
		<img alt="Best of JS" src="https://img.shields.io/endpoint?url=https://bestofjs-serverless.now.sh/api/project-badge?fullName=TanStack%2Fdb%26since=daily" alt="Best of JS"/>
	</a>
	<a href="https://twitter.com/tan_stack">
		<img src="https://img.shields.io/twitter/follow/tan_stack.svg?style=social" alt="Follow @TanStack"/>
	</a>
</div>

<div align="center">
		
###  [Become a Sponsor!](https://github.com/sponsors/tannerlinsley/)
</div>

> 🇹🇭 **ภาษาไทย (Thai):** เอกสารฉบับภาษาไทยเต็มรูปแบบอยู่ที่ [`docs/readme-th.md`](./docs/readme-th.md) — หน้านี้ใช้รูปแบบสองภาษา (ไทย + อังกฤษ)
>
> 🇬🇧 **English:** This README uses a bilingual format (Thai + English). For a full Thai-language reference, see [`docs/readme-th.md`](./docs/readme-th.md).

# TanStack DB

> ระบบจัดการข้อมูลฝั่ง Client แบบ Reactive สำหรับ API ของคุณ
>
> The reactive client store for your API.

TanStack DB อยู่ในช่วง **BETA** ในขณะนี้ — อ่านรายละเอียดเพิ่มเติมได้ที่ [บทความเปิดตัว](https://tanstack.com/blog/tanstack-db-0.1-the-embedded-client-database-for-tanstack-query)

> Tanstack DB is currently in BETA. See [the release post](https://tanstack.com/blog/tanstack-db-0.1-the-embedded-client-database-for-tanstack-query) for more details.

TanStack DB ช่วยแก้ปัญหาที่นักพัฒนาเจอในการสร้างแอปที่เร็วและทันสมัย:

- **ลดความซับซ้อนของ API** — โหลดข้อมูลเข้า Collection แบบ Normalized ไม่เกิด Network Waterfall
- **ประสิทธิภาพสูง** — Live Query ทำงานได้ในระดับต่ำกว่ามิลลิวินาที พร้อม Reactivity แบบเรียลไทม์
- **ตอบสนองทันที** — Optimistic Write ช่วยให้ผู้ใช้ไม่ต้องรอ Network ทำงานเสร็จ

TanStack DB solves the problems of building fast, modern apps, helping you:

- Avoid endpoint sprawl and network waterfalls by loading data into normalized collections
- Optimise client performance with sub-millisecond live queries and real-time reactivity
- Take the network off the interaction path with instant optimistic writes

ข้อมูลถูกโหลดอย่างมีประสิทธิภาพ การใช้งานรู้สึกฉับไว Backend ยังคงเรียบง่าย ไม่ว่าจะโหลดข้อมูลมากแค่ไหนก็ตาม

Data loading is optimized. Interactions feel instantaneous. Your backend stays simple and your app stays blazing fast. No matter how much data you load.

<a href="https://tanstack.com/db" style="font-weight:bold" >อ่านเอกสารเพิ่มเติม / Read the docs →</a>
<br />

## มีส่วนร่วมกับเรา / Get Involved

- 🐛 ยินดีต้อนรับ Issues และ Pull Requests! / We welcome issues and pull requests!
- 💬 พูดคุยที่ [GitHub Discussions](https://github.com/TanStack/db/discussions) / Participate in [GitHub discussions](https://github.com/TanStack/db/discussions)
- 🎮 เข้าร่วมชุมชนที่ [Discord](https://discord.com/invite/WrRKjPJ) / Chat with the community on [Discord](https://discord.com/invite/WrRKjPJ)
- 📖 ดูแนวทางการมีส่วนร่วมที่ [CONTRIBUTING.md](./CONTRIBUTING.md) / See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions

## พาร์ทเนอร์ / Partners

<table align="center">
<tr>
<td>
<a href="https://www.coderabbit.ai/?via=tanstack&dub_id=aCcEEdAOqqutX6OS" >
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://tanstack.com/assets/coderabbit-dark-D643Zkrv.svg" height="40" />
  <source media="(prefers-color-scheme: light)" srcset="https://tanstack.com/assets/coderabbit-light-CIzGLYU_.svg" height="40" />
  <img src="https://tanstack.com/assets/coderabbit-light-CIzGLYU_.svg" height="40" alt="CodeRabbit" />
</picture>
</a>
</td>
<td>
<a href="https://www.cloudflare.com?utm_source=tanstack">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://tanstack.com/assets/cloudflare-white-Co-Tyjbl.svg" height="60" />
  <source media="(prefers-color-scheme: light)" srcset="https://tanstack.com/assets/cloudflare-black-6Ojsn8yh.svg" height="60" />
  <img src="https://tanstack.com/assets/cloudflare-black-6Ojsn8yh.svg" height="60" alt="Cloudflare" />
</picture>
</a>
</td>
</tr>
<tr>
<td>
<a href="https://electric-sql.com">
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="https://tanstack.com/assets/electric-dark-Bfu2Vl2j.svg" height="60">
	<source media="(prefers-color-scheme: light)" srcset="https://tanstack.com/assets/electric-light-C-5MDda4.svg" height="60">
	<img src="https://raw.githubusercontent.com/electric-sql/meta/main/identity/ElectricSQL-logo.with-background.sm.png" height="60" alt="ElectricSQL logo"/>
</picture>
</a>
</td>
<td>
<a href="https://www.prisma.io?utm_source=tanstack&via=tanstack">
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="https://tanstack.com/assets/prisma-dark-DwgDxLwn.svg" height="60">
	<source media="(prefers-color-scheme: light)" srcset="https://tanstack.com/assets/prisma-light-Cloa3Onm.svg" height="60">
	<img src="https://tanstack.com/assets/prisma-dark-DwgDxLwn.svg" height="60" alt="Prisma"/>
</picture>
</a>
</td>
</tr>
</table>

<div align="center">
<img src="./media/partner_logo.svg" alt="DB & you?" height="65">
<p>
สนใจเป็นพาร์ทเนอร์? ติดต่อเราเพื่อร่วมพัฒนา TanStack DB ไปด้วยกัน!<br/>
We're looking for TanStack DB Partners to join our mission! Partner with us to push the boundaries of TanStack DB and build amazing things together.
</p>
<a href="mailto:partners@tanstack.com?subject=TanStack DB Partnership"><b>LET'S CHAT</b></a>
</div>

## สำรวจ TanStack Ecosystem / Explore the TanStack Ecosystem

- <a href="https://github.com/tanstack/config"><b>TanStack Config</b></a> – เครื่องมือสำหรับแพ็กเกจ JS/TS / Tooling for JS/TS packages
- <a href="https://github.com/tanstack/devtools"><b>TanStack DevTools</b></a> – แผง DevTools รวมศูนย์ / Unified devtools panel
- <a href="https://github.com/tanstack/form"><b>TanStack Form</b></a> – จัดการ Form State แบบ Type-safe / Type‑safe form state
- <a href="https://github.com/tanstack/pacer"><b>TanStack Pacer</b></a> – Debouncing, throttling, batching <br/>
- <a href="https://github.com/tanstack/query"><b>TanStack Query</b></a> – จัดการ Async State และ Caching / Async state & caching
- <a href="https://github.com/tanstack/ranger"><b>TanStack Ranger</b></a> – Range & slider primitives
- <a href="https://github.com/tanstack/router"><b>TanStack Router</b></a> – Routing แบบ Type-safe / Type‑safe routing, caching & URL state
- <a href="https://github.com/tanstack/router"><b>TanStack Start</b></a> – Full‑stack SSR & streaming
- <a href="https://github.com/tanstack/store"><b>TanStack Store</b></a> – Reactive data store
- <a href="https://github.com/tanstack/table"><b>TanStack Table</b></a> – Headless datagrids
- <a href="https://github.com/tanstack/virtual"><b>TanStack Virtual</b></a> – Virtualized rendering

… ดูเพิ่มเติมที่ / and more at <a href="https://tanstack.com"><b>TanStack.com »</b></a>

---

<div align="center">

สร้างด้วย ❤️ โดยชุมชน TanStack — เอกสารภาษาไทยอยู่ที่ <a href="./docs/readme-th.md"><code>docs/readme-th.md</code></a>

</div>

<!-- Use the force, Luke -->
