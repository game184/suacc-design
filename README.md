# SUACC Website — Design Mockup (คู่มือ)

HTML/CSS mockup ของเว็บไซต์ สำนักศิลปวัฒนธรรมและการสร้างสรรค์ฯ (SUACC)
ใช้สำหรับนำเสนอ/ยืนยันดีไซน์กับลูกค้า ก่อนพัฒนาเว็บจริง — **ยังไม่ใช่โค้ด production** (ใช้ภาพ placeholder gradient)

> อ้างอิง: `../SUACC_Website_SCOPE.md` (ขอบเขตงาน) · `design-spec.html` (สเปกขนาด/สี/ฟอนต์) · Action Plan อยู่ใน Google Sheet "SUACC Wedsite"

---

## ▶️ วิธีเปิดดู

**ง่ายสุด:** ดับเบิลคลิก `index.html` เปิดในเบราว์เซอร์ได้เลย

**แนะนำ (รันผ่าน server เพื่อให้ทุกอย่างทำงานครบ):**
```bash
cd design
python3 -m http.server 8000
# เปิด http://localhost:8000/index.html
```

---

## 📁 โครงสร้างไฟล์

| ไฟล์ / โฟลเดอร์ | หน้าที่ |
|---|---|
| `index.html` | หน้าแรก (Homepage) |
| `about*.html`, `whatson*.html`, `around.html`, `collection*.html`, `reading.html`, `ebooks.html`, `blog.html`, `contact.html` | หน้าต่างๆ (รวม 15 หน้า) |
| **`styles.css`** | **Design System** — สี, ฟอนต์, ทุก component (รวมเมนู `.topnav`) |
| **`site.js`** | **เมนู + Footer + interaction** ที่ใช้ร่วมทุกหน้า (carousel, chip filter, skip-link) |
| `design-spec.html` | เอกสารสเปก (ส่งลูกค้า) — มี badge สถานะ ยืนยัน/ร่าง |
| `README.md` | ไฟล์นี้ |
| `fonts/` | ฟอนต์ Silpakorn72 (Bold/Regular/Light) |
| `img/` | `logo.png` (สี, ใช้ใน nav) · `logo-white.png` (ขาว, ใช้ใน footer) |

---

## 🧩 สถาปัตยกรรม (สำคัญก่อนแก้)

ทุกหน้าใช้โครงเดียวกัน — **nav/footer ไม่ได้เขียนซ้ำในแต่ละหน้า** แต่ฉีดเข้าจาก `site.js`:

```html
<link rel="stylesheet" href="styles.css">
...
<div id="site-nav"></div>     <!-- site.js แทนที่ด้วยเมนู 2 ชั้น -->
... เนื้อหาหน้า ...
<div id="site-footer"></div>  <!-- site.js แทนที่ด้วย footer -->
<script src="site.js"></script>
```

- **แก้ที่เดียว มีผลทุกหน้า** — เปลี่ยน `styles.css` หรือ `site.js` แล้วทุกหน้าอัปเดตพร้อมกัน
- เมนู active แต่ละหน้า `site.js` ตรวจให้อัตโนมัติจากชื่อไฟล์

---

## ✏️ แก้ของที่เจอบ่อย

| อยากแก้ | แก้ที่ |
|---|---|
| ข้อความ/รายการเมนู, submenu | `site.js` → ตัวแปร `NAV` |
| สไตล์เมนู (ขนาด/สี/ระยะ) | `styles.css` → ส่วน `.topnav ...` |
| สีแบรนด์ / ฟอนต์ / ปุ่ม / การ์ด | `styles.css` → `:root` และ component นั้นๆ |
| Footer (ที่อยู่, ลิงก์) | `site.js` → ตัวแปร `FOOT` |
| โลโก้ | แทนไฟล์ใน `img/logo.png` และ `img/logo-white.png` |
| วิดีโอ banner หน้าแรก | แก้ค่า `VIDEO_ID` ในสคริปต์ท้าย `index.html` (ระบบจริงจะมาจาก CMS) |
| เพิ่มหน้าใหม่ | ก็อปโครง 1 หน้า → แก้เนื้อหา → เพิ่มลิงก์ในเมนู (`site.js`) |

> หลังแก้ CSS/JS ถ้าเบราว์เซอร์ยังโชว์ของเก่า ให้ **hard reload** (Cmd/Ctrl + Shift + R)

---

## ✅ Workflow: ยืนยันดีไซน์ → sync

เมื่อดีไซน์ส่วนไหน **confirm กับลูกค้าแล้ว**:
1. ล็อกค่าจริงใน **`styles.css`** (+ `site.js` ถ้าเป็นเมนู/footer) — source of truth
2. อัปเดต **`design-spec.html`** — เปลี่ยน badge เป็น `✓ ยืนยันแล้ว` + ค่าให้ตรง
3. ติ๊กสถานะใน **`../SUACC_Sitemap_Checklist.html`**:
   - **component** ยืนยัน → เพิ่ม id ในตัวแปร `CONFIRMED_DESIGN` (จะติ๊ก "ออกแบบ" ให้อัตโนมัติ)
   - **หน้า** ยืนยัน → ติ๊ก "ออกแบบ" ของหน้านั้น (แท็บ Sitemap)

**สถานะปัจจุบัน:**
- ✓ ยืนยันแล้ว: **สีแบรนด์ · ฟอนต์ · เมนู 2 ชั้น (nav)**
- ◐ บางส่วน: เลย์เอาต์/กริด (gutter 120px + nav ยืนยัน)
- ✎ ร่าง: ปุ่ม, section spacing, การ์ด

---

## ♿ Accessibility (WCAG 2.1 AA)
mockup ทำตามแนวทาง AA ไว้แล้ว: contrast คู่สีผ่าน, keyboard + focus, skip-link, ปุ่มหยุด carousel/วิดีโอ, รองรับ `prefers-reduced-motion` (รายละเอียดใน `../SUACC_Website_SCOPE.md` §3.5)

---

## 🚀 ส่งให้ลูกค้าดู (GitHub Pages)

โฟลเดอร์นี้เป็น git repo (root = ไฟล์ดีไซน์) → อัปขึ้น GitHub Pages ได้เลย

**ครั้งแรก (ทำครั้งเดียว):**
1. สร้าง repo ใหม่บน github.com (เช่น `suacc-design`)
2. เชื่อม remote + push:
   ```bash
   git remote add origin https://github.com/<username>/suacc-design.git
   git push -u origin main
   ```
3. repo → **Settings → Pages → Branch: `main` / `/ (root)` → Save**
4. รอ ~1 นาที → ลิงก์ `https://<username>.github.io/suacc-design/`

**อัปเดตทีหลัง (ลิงก์เดิม):** ดับเบิลคลิก **`update.command`** หรือ
```bash
git add -A && git commit -m "อัปเดตดีไซน์" && git push
```
