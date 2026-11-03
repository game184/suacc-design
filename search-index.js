/* ============================================================
   SUACC Search — ดัชนีค้นหาทั้งเว็บ (mockup · ค้นฝั่งหน้าเว็บ)
   ใช้ร่วม: แผงค้นหาในเมนู (site.js) + หน้าผลค้นหา search.html
   แหล่งข้อมูล: What's On · What's Around SU · Collection · Stories · Blog · E-Books · บุคลากร · หน้าเว็บ
   ระบบจริง: เรียก GET /api/v1/search?q=…&type=…&lang=th (หลังบ้าน suacc-admin) — โครงผลลัพธ์เดียวกัน
   ============================================================ */
(function(){
  /* ประเภทผลลัพธ์ — ลำดับ = ลำดับกลุ่มในผลค้นหา */
  var TYPES = [
    {k:'whatson',    label:"What's On"},
    {k:'around',     label:"What's Around SU"},
    {k:'collection', label:'Collection'},
    {k:'story',      label:'Stories'},
    {k:'blog',       label:'Blog'},
    {k:'ebook',      label:'E-Books'},
    {k:'people',     label:'บุคลากร', en:'Team'},
    {k:'page',       label:'หน้าเว็บ', en:'Pages'}
  ];

  /* หน้าเว็บหลัก + คำค้นที่เกี่ยวข้อง (ระบบจริง: เมนู + Pages จาก CMS) */
  var PAGES = [
    {t:'เกี่ยวกับเรา (About SUACC)', u:'about.html', k:'about suacc สำนักศิลปวัฒนธรรมและการสร้างสรรค์ หน่วยงาน หอศิลป์ สถาบันศิลปสถาปัตยกรรมไทย'},
    {t:'วิสัยทัศน์ พันธกิจ', u:'about-who.html', k:'vision mission who we are ประวัติ ความเป็นมา'},
    {t:'บุคลากร (Team)', u:'about-people.html', k:'team ทีมงาน ผู้บริหาร เจ้าหน้าที่'},
    {t:'ผลงานของสำนักฯ (What we do)', u:'about-portfolio.html', k:'what we do portfolio ผลงาน โครงการ'},
    {t:'ข่าวสารและประกาศ', u:'about-news.html', k:'news ข่าว ประกาศ จัดซื้อจัดจ้าง เอกสาร'},
    {t:"What's On — นิทรรศการและกิจกรรม", u:'whatson.html', k:'whats on นิทรรศการ กิจกรรม เสวนา workshop'},
    {t:"What's Around SU — กิจกรรมรอบมหาวิทยาลัย", u:'around.html', k:'around คณะ กิจกรรม'},
    {t:'Collection — คลังสะสมผลงานศิลปกรรม', u:'collection.html', k:'collection คลังสะสม ศิลปกรรม จิตรกรรม ประติมากรรม ภาพพิมพ์'},
    {t:'Reading Corner', u:'reading.html', k:'reading อ่าน หนังสือ บทความ'},
    {t:'E-Books', u:'ebooks.html', k:'ebook หนังสืออิเล็กทรอนิกส์ วารสาร สูจิบัตร'},
    {t:'Blog', u:'blog.html', k:'blog บทความ บทสัมภาษณ์'},
    {t:'Stories', u:'stories.html', k:'stories เรื่องเล่า'},
    {t:'ติดต่อเรา (Contact)', u:'contact.html', k:'contact ติดต่อ แผนที่ โทรศัพท์ อีเมล ที่อยู่'},
    {t:'นโยบายความเป็นส่วนตัว', u:'privacy.html', k:'privacy pdpa ข้อมูลส่วนบุคคล คุกกี้'},
    {t:'ข้อกำหนดการใช้งาน', u:'terms.html', k:'terms เงื่อนไข การใช้งาน'}
  ];

  /* บุคลากร (mockup = ข้อมูลเดียวกับ about-people.html · ระบบจริง: Personnel จาก CMS) */
  var PEOPLE = [
    { name:'ผศ. ดร. ศิลป์ ศิลปากร', role:'ผู้อำนวยการสำนักฯ', img:'img/team/team-01.jpg' },
    { name:'รศ. มาลี วิจิตรศิลป์', role:'รองผู้อำนวยการฝ่ายวิชาการ', img:'img/team/team-02.jpg' },
    { name:'ผศ. ธนา ภาพพิมพ์', role:'รองผู้อำนวยการฝ่ายบริหาร', img:'img/team/team-03.jpg' },
    { name:'อ. กมล สร้างสรรค์', role:'ผู้ช่วยผู้อำนวยการฝ่ายกิจกรรม', img:'img/team/team-04.jpg' },
    { name:'นางสาว ปวีณา จิตรกร', role:'นักวิชาการศิลปวัฒนธรรม', img:'img/team/team-05.jpg' },
    { name:'นาย วรเดช ภาพถ่าย', role:'ภัณฑารักษ์', img:'img/team/team-06.jpg' },
    { name:'นางสาว ชนิดา อนุรักษ์', role:'นักวิจัยศิลปวัฒนธรรม', img:'img/team/team-07.jpg' },
    { name:'นาย ภูริ ประติมา', role:'นักวิชาการคลังสะสมผลงาน', img:'img/team/team-08.jpg' },
    { name:'นางสาว อรุณี เลขานุการ', role:'เจ้าหน้าที่บริหารงานทั่วไป', img:'img/team/team-09.jpg' },
    { name:'นาย สมชาย การเงิน', role:'เจ้าหน้าที่การเงินและพัสดุ', img:'img/team/team-10.jpg' },
    { name:'นางสาว นภา ประชาสัมพันธ์', role:'เจ้าหน้าที่ประชาสัมพันธ์ &amp; สื่อ', img:'img/team/team-11.jpg' },
    { name:'นาย ธีรพงษ์ เทคนิค', role:'เจ้าหน้าที่เทคนิคและจัดแสดง', img:'img/team/team-12.jpg' }
  ];

  /* build(T): T = ฟังก์ชันแปลข้อความ (ไทย = คืนค่าเดิม) */
  function build(T){
    var W=window, out=[];
    function j(a){ return (a||[]).map(T).join(' '); }
    function txt(body){ return (body||[]).map(function(b){ return T(b.text||b.cap||''); }).join(' '); }
    function sub(arr){ return arr.filter(Boolean).map(T).join(' · '); }
    (W.WHATSON||[]).forEach(function(e){ out.push({type:'whatson', title:T(e.title), sub:sub([e.tag,e.date,e.place]),
      img:e.img, href:'whatson-detail.html?id='+e.id, text:[T(e.tag),T(e.place),T(e.date),j(e.desc),txt(e.body)].join(' ')}); });
    (W.AROUND||[]).forEach(function(e){ out.push({type:'around', title:T(e.title), sub:sub([e.tag,e.faculty,e.date]),
      img:e.img, href:'around-detail.html?id='+e.id, text:[T(e.tag),T(e.faculty),T(e.place),T(e.date),j(e.desc),txt(e.body)].join(' ')}); });
    (W.COLLECTION||[]).forEach(function(w){ var set=(W.COLL_SETS||{})[w.set];
      out.push({type:'collection', title:T(w.title), sub:sub([w.artist,w.type,w.year&&String(w.year)]),
      img:(W.collCover?W.collCover(w):w.cover), href:'collection-all.html?work='+w.id,
      text:[T(w.artist),T(w.type),w.year,T(w.technique),T(w.exhibition),j(w.awards),j(w.themes),set&&T(set.label),T(w.concept)].join(' ')}); });
    (W.COLL_STORIES||[]).forEach(function(s){ out.push({type:'story', title:T(s.title), sub:sub([s.author,s.date]),
      img:s.cover, href:'story-detail.html?id='+s.id, text:[T(s.author),T(s.excerpt),j(s.tags),(s.chapters||[]).map(function(c){return [T(c.title),T(c.meta),T(c.body)].join(' ');}).join(' ')].join(' ')}); });
    (W.BLOG||[]).forEach(function(b){ out.push({type:'blog', title:T(b.title), sub:sub([b.tag,b.date]),
      img:b.img, href:'blog-detail.html?id='+b.id, text:[T(b.tag),T(b.excerpt),T(b.author),txt(b.body)].join(' ')}); });
    (W.EBOOKS||[]).forEach(function(e){ out.push({type:'ebook', title:T(e.title), sub:sub([e.by,e.year&&String(e.year)]),
      img:e.img, href:'ebook-reader.html?id='+e.id, text:[T(e.by),e.year,T(e.cat),T(e.desc)].join(' ')}); });
    PEOPLE.forEach(function(p){ out.push({type:'people', title:T(p.name), sub:T(p.role), img:p.img, href:'about-people.html', text:T(p.role)}); });
    PAGES.forEach(function(p){ out.push({type:'page', title:T(p.t), sub:p.u, img:null, href:p.u, text:p.k}); });
    return out;
  }
  function id(s){ return s==null?'':String(s); }
  /* ดัชนีตามภาษาปัจจุบัน — EN: ชื่อ/รายละเอียดเป็นอังกฤษ แต่ยังค้นด้วยคำไทยได้ (ต่อท้ายข้อความไทยไว้ใน text) */
  function index(){
    var I=window.SUACC_I18N;
    if(window.SUACC_LANG!=='en' || !I) return build(id);
    var th=build(id);
    return build(function(s){ return s==null?'':String(I.t(String(s))); }).map(function(it,i){
      it.text += ' ' + th[i].title + ' ' + th[i].sub + ' ' + th[i].text; return it;
    });
  }

  /* normalize: ตัวพิมพ์เล็ก · ยุบช่องว่าง · ตัดเครื่องหมายคำพูด (ไทยไม่มีเว้นวรรค → จับคู่แบบ substring) */
  function norm(s){ return String(s||'').toLowerCase().replace(/[“”"'‘’]/g,'').replace(/\s+/g,' ').trim(); }

  var INDEX=null;
  /* ค้นหา: แยกคำด้วยช่องว่าง ต้องพบ "ทุกคำ" (AND) · คะแนน: ชื่อขึ้นต้นด้วยคำค้น > ชื่อมีคำค้น > รายละเอียด */
  function search(q, type){
    if(!INDEX) INDEX=index();
    var terms=norm(q).split(' ').filter(Boolean);
    if(!terms.length) return [];
    var res=[];
    INDEX.forEach(function(it){
      if(type && it.type!==type) return;
      var t=norm(it.title), all=t+' '+norm(it.sub)+' '+norm(it.text), score=0, ok=true;
      terms.forEach(function(w){
        if(all.indexOf(w)<0){ ok=false; return; }
        score += t.indexOf(w)===0 ? 30 : (t.indexOf(w)>=0 ? 20 : 5);
      });
      if(ok) res.push({item:it, score:score});
    });
    res.sort(function(a,b){ return b.score-a.score || TYPES.findIndex(function(x){return x.k===a.item.type;}) - TYPES.findIndex(function(x){return x.k===b.item.type;}); });
    return res.map(function(r){ return r.item; });
  }

  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  /* ไฮไลต์คำที่ตรง (escape ก่อนเสมอ) */
  function mark(s, q){
    var out=esc(s);
    norm(q).split(' ').filter(Boolean).forEach(function(w){
      var re=new RegExp('('+esc(w).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
      out=out.replace(re,'<mark>$1</mark>');
    });
    return out;
  }
  function typeLabel(k){ var t=TYPES.filter(function(x){return x.k===k;})[0]; if(!t) return k; return (window.SUACC_LANG==='en' && t.en) ? t.en : t.label; }
  /* เปลี่ยนภาษา → สร้างดัชนีใหม่ */
  document.addEventListener('suacc:lang',function(){ INDEX=null; });

  window.SUACCSearch = { reset:function(){ INDEX=null; }, TYPES:TYPES, search:search, mark:mark, esc:esc, typeLabel:typeLabel };
})();
