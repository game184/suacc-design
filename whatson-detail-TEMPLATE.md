# What's On — Detail Page Template (สเปกสำหรับเขียนโค้ด/หลังบ้าน)

ไฟล์เดียว `whatson-detail.html` render ทุกอีเวนต์จากข้อมูลใน `whatson-data.js`
เปิดด้วย `whatson-detail.html?id=<N>` — โครงหน้า/CSS/JS เหมือนกันทุกอีเวนต์ ต่างแค่ "ข้อมูลของโพสต์"

---

## 1) โครงหน้า (page blocks) — เรียงจากบนลงล่าง

1. **Top nav** (เมนูหลัก · sticky `top:0`, สูง ~120–135px) — มาจาก `site.js` (ใช้ร่วมทุกหน้า)
2. **Banner** เต็มกว้าง — รูป `img/bw-<id>.png` (ถ้าไม่มี fallback เป็น `ev.img` poster)
3. **แถวบน**: ปุ่ม `← กลับ` (ซ้าย) + `Share :` ไอคอน FB/X/คัดลอกลิงก์ (ขวา)
4. **2 คอลัมน์** (`.d2-grid`, ซ้าย `1fr` / ขวา `360px`):
   - **ซ้าย (`.d2-main`)** — *sticky head*: ชื่องาน + แถบแท็บ → ตามด้วยเนื้อหาที่เลื่อนอ่าน
     - **แท็บ (`.d2-tabs`)**: สร้างอัตโนมัติจาก `SECTIONS` — แสดงเฉพาะแท็บที่ "มีข้อมูล"
     - **แต่ละ section**: หัวข้อ 30px + เส้นคั่น (`.d2-sectitle`) แล้วตามด้วยเนื้อหา
       - `Overview` = เนื้อหา/รายละเอียดของโพสต์
       - `Highlight` = แกลเลอรีผลงาน (แสดงเมื่อมี `artworks`)
   - **ขวา (`.d2-side`)** — **กล่องรายละเอียด (`.d2-box`) แบบ sticky** (ค้างใต้ nav): วันที่/เวลา/ค่าเข้า/สถานที่
     - สีพื้นกล่อง = **สีหมวดของอีเวนต์ opacity 0.22** (คำนวณอัตโนมัติจาก `tag`)
5. **Footer** (ใช้ร่วมทุกหน้า)

**พฤติกรรม:** sticky in-page nav + scrollspy — เลื่อนลง ชื่อ+แท็บ (ซ้าย) และกล่อง (ขวา) ค้าง, เลื่อนอ่านเฉพาะเนื้อหา; แท็บ active อัปเดตตามตำแหน่งที่เลื่อนถึง, คลิกแท็บ = smooth-scroll

---

## 2) Data schema — 1 record = 1 โพสต์ What's On

```js
{
  id: 2,                       // (req) เลขไอดี ใช้ใน ?id= และชื่อ banner bw-<id>.png
  seq: 13,                     // (opt) ลำดับแสดง (มากสุด=ใหม่สุด) ถ้าไม่มีใช้ id
  highlight: true,             // (opt) ให้ไปขึ้น section Highlights หน้าแรก

  img: 'img/won-2.jpg',        // (req) รูป poster/cover (ใช้ในการ์ด + fallback banner)
  tag: 'ประกวด',                // (req) หมวด: Workshop | ประกวด | นิทรรศการ | การแสดง | เทศกาล
  tagCls: 'badge',             // (req) class ป้าย
  tagStyle: 'background:#e9a6a0;color:#5e211c',  // (req) สีป้าย = สีหมวด
  title: 'ประกวดออกแบบ "เวียดนามในความฝันของคุณ"', // (req)

  // กล่องรายละเอียด (ขวา)
  date:  '1 ต.ค. – 2 พ.ย. 2569',// (req)
  time:  'ปิดรับผลงาน 21:00 น.', // (req)
  fee:   'เข้าร่วมฟรี',          // (req)
  free:  true,                 // (opt)
  place: 'ออนไลน์ (Design Anthropology School)', // (req)

  // ----- เนื้อหาแท็บ Overview (เลือกอย่างใดอย่างหนึ่ง) -----
  desc: [ 'ย่อหน้า 1', 'ย่อหน้า 2' ],   // ข้อความล้วน (กรณีทั่วไป)
  body: [                              // หรือ rich-content (h/p/img) — ทับ desc
    { type:'p', text:'ย่อหน้า' },
    { type:'h', text:'หัวข้อย่อย' },
    { type:'img', src:'img/x.jpg' }    // type img ไม่ขึ้นใน Overview (กรองออก)
  ],

  // ----- เนื้อหาแท็บ Highlight (opt) -----
  artworks: [                          // มี = โชว์แท็บ Highlight, ไม่มี = ซ่อนแท็บ
    { img:'img/won2-art1.jpg', title:'ชื่อผลงาน', by:'ผู้สร้าง', desc:'คำบรรยาย' }
  ]
}
```

### กฎการแสดงผล (สำคัญสำหรับหลังบ้าน)
- **Overview** = `body` (ถ้ามี) มิฉะนั้น `desc`
  - *เดโม่ปัจจุบัน*: อีเวนต์ที่ใช้ `desc` จะถูกต่อท้ายด้วย `WON_OVERVIEW_DEMO` (Lorem) อัตโนมัติ
    เพื่อให้เนื้อหายาวพอ กล่องขวา sticky สวย — **หลังบ้านจริงให้ลบการต่อ Lorem นี้ออก** แล้วใช้เนื้อหาจริงของโพสต์
- **Highlight** = แสดงแท็บก็ต่อเมื่อมี `artworks` (≥1)
- **แท็บ**: สร้างจาก `SECTIONS` แล้ว `.filter(มีเนื้อหา)` → เพิ่มแท็บใหม่ในอนาคตได้แค่เพิ่ม entry
- **สีกล่อง**: คำนวณจาก `WON_CAT_COLOR[tag]` ที่ opacity 0.22 (ไม่ต้องส่งสีมาเอง)
- **Banner**: `img/bw-<id>.png` (คนละรูปกับ poster `img`)

---

## 3) สีหมวด (`WON_CAT_COLOR`)
| หมวด | สี |
|---|---|
| Workshop | `#d8b269` ทอง |
| ประกวด | `#e9a6a0` ชมพู |
| นิทรรศการ | `#62d9c3` เขียว |
| การแสดง | `#c5a3dd` ม่วง |
| เทศกาล | `#ec9a5e` ส้ม |

---

## 4) ไฟล์ที่เกี่ยวข้อง
- `whatson-detail.html` — เทมเพลตหน้า detail (โครง + CSS + JS render/scrollspy)
- `whatson-data.js` — ข้อมูล `WHATSON[]` + helper + `WON_CAT_COLOR` + `WON_ICONS` + `WON_OVERVIEW_DEMO`
- `img/bw-<id>.png` — banner รายอีเวนต์
- `whatson-detail-v1.html` — ดีไซน์เก่า (เก็บไว้เป็นตัวเลือก ไม่ใช้แล้ว)
