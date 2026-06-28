/* ============================================================
   What's On — ข้อมูลกลางชุดเดียว (ใช้ร่วม: index, whatson, whatson-detail)
   ระบบจริง: ข้อมูลนี้จะมาจาก CMS — แก้/เพิ่มอีเวนต์ที่ array WHATSON ที่เดียว
   ============================================================ */
window.WHATSON = [
  {
    id: 1, seq: 12,
    img: 'img/won-1.jpg',
    tag: 'Workshop', tagCls: 'badge b-gold',
    title: 'เวิร์กช็อปวาดภาพสีน้ำมัน “In Studio Painting”',
    date: '11–12 เม.ย. 2569',
    time: '10:00–16:00 น.',
    fee: 'มีค่าลงทะเบียน · รวมอุปกรณ์', free: false,
    place: 'Wellgate Shopping Centre, Dundee',
    desc: [
      'เวิร์กช็อปวาดภาพเชิงปฏิบัติการโดย Linda McDonald Art เรียนรู้พื้นฐานการวาดภาพเหมือนบุคคล (portrait) การใช้สีน้ำมัน และการผสมสีเบื้องต้น เหมาะสำหรับผู้เริ่มต้นที่อยากลงมือทำจริงในสตูดิโอ',
      'ค่าลงทะเบียนรวมอุปกรณ์และวัสดุที่ใช้ตลอดกิจกรรมแล้ว ผู้เข้าร่วมเพียงเตรียมตัวมาสนุกกับการสร้างสรรค์ผลงานชิ้นแรกของตัวเอง'
    ]
  },
  {
    id: 2, seq: 13, highlight: true,
    img: 'img/won-2.jpg',
    tag: 'ประกวด', tagCls: 'badge b-pink',
    title: 'ประกวดออกแบบ “เวียดนามในความฝันของคุณ”',
    date: '1 ต.ค. – 2 พ.ย. 2569',
    time: 'ปิดรับผลงาน 21:00 น.',
    fee: 'เข้าร่วมฟรี', free: true,
    place: 'ออนไลน์ (Design Anthropology School)',
    desc: [
      'การประกวดออกแบบในหัวข้อ “เวียดนามในความฝันของคุณ” เปิดโอกาสให้นักออกแบบและนักศึกษาส่งผลงานตีความวัฒนธรรมและจินตนาการผ่านงานออกแบบร่วมสมัย',
      'ผู้ชนะเลิศ (Thủ Khoa) และผู้เข้ารอบ Top 9 จะได้รับรางวัลคอร์สเรียน Design Foundation / Portfolio & CV พร้อมการเผยแพร่ผลงานในโครงการ “Thanh âm Việt Nam”'
    ],
    /* body = เนื้อหาเต็ม (ระบบจริง = rich editor เพิ่ม/ลบ/แก้/ใส่รูปได้) */
    body: [
      {type:'p', text:'การประกวดออกแบบในหัวข้อ “เวียดนามในความฝันของคุณ” จัดโดย Design Anthropology School เปิดโอกาสให้นักออกแบบและนักศึกษาทั่วภูมิภาคส่งผลงานตีความวัฒนธรรม ธรรมชาติ และจินตนาการของเวียดนามผ่านภาษาการออกแบบร่วมสมัย เพื่อส่งเสริมการเชื่อมโยงอัตลักษณ์ท้องถิ่นเข้ากับมุมมองสากล'},
      {type:'img', src:'img/won-2.jpg', cap:'โปสเตอร์ประชาสัมพันธ์การประกวด “เวียดนามในความฝันของคุณ”'},
      {type:'h', text:'หัวข้อและแนวคิด'},
      {type:'p', text:'ผู้เข้าประกวดสามารถตีความ “ความฝัน” ของเวียดนามได้อย่างอิสระ ทั้งในมิติของวัฒนธรรม สังคม ธรรมชาติ หรืออนาคต ผ่านสื่อการออกแบบหลากหลายรูปแบบ ไม่ว่าจะเป็นกราฟิก ภาพประกอบ โมชัน หรือสื่อผสม โดยเน้นความคิดสร้างสรรค์และการเล่าเรื่องที่ชัดเจน'},
      {type:'h', text:'รางวัลและสิทธิประโยชน์'},
      {type:'p', text:'ผู้ชนะเลิศ (Thủ Khoa) จะได้รับคอร์สเรียน Design Foundation มูลค่า 6,000,000 ₫ ส่วนผู้เข้ารอบ Top 9 จะได้รับคอร์ส Portfolio & CV มูลค่า 650,000 ₫ พร้อมได้รับการเชิดชูบนช่องทางของ Vietnamme'},
      {type:'p', text:'นอกจากนี้ ผลงานที่ผ่านการคัดเลือกจะถูกเผยแพร่ในโครงการ “Thanh âm Việt Nam” และจัดแสดงในนิทรรศการออนไลน์ เพื่อต่อยอดโอกาสทางวิชาชีพให้แก่ผู้เข้าร่วมทุกคน'},
      {type:'h', text:'กำหนดการและการสมัคร'},
      {type:'p', text:'เปิดรับผลงานตั้งแต่ 1 ตุลาคม 2569 และปิดรับวันที่ 2 พฤศจิกายน 2569 เวลา 21:00 น. ผ่านระบบออนไลน์ของ Design Anthropology School ผู้สนใจสามารถสอบถามรายละเอียดเพิ่มเติมและส่งผลงานได้ทางช่องทางของผู้จัด ไม่มีค่าใช้จ่ายในการเข้าร่วม'}
    ],
    /* artworks = ผลงาน/ไฮไลต์ของงาน (แสดงในแท็บ Highlight) */
    artworks: [
      {img:'img/won2-art1.jpg', title:'Việt Nam trong giấc mơ — Series I', by:'Thủ Khoa · ผู้ชนะเลิศ', desc:'ผลงานชนะเลิศที่ตีความ “ความฝัน” ของเวียดนามผ่านลวดลายและสีสันร่วมสมัย ผสานสัญลักษณ์ทางวัฒนธรรมเข้ากับเทคนิคกราฟิกสมัยใหม่ได้อย่างลงตัว'},
      {img:'img/won2-art2.jpg', title:'Echoes of Tomorrow', by:'Top 9 · ผู้เข้ารอบ', desc:'งานออกแบบที่สำรวจความสัมพันธ์ระหว่างอดีตและอนาคต ด้วยพื้นผิวและการไล่สีที่ชวนครุ่นคิดถึงการเปลี่ยนผ่านของยุคสมัย'},
      {img:'img/won2-art3.jpg', title:'Threads of Identity', by:'Top 9 · ผู้เข้ารอบ', desc:'การเล่าเรื่องอัตลักษณ์ผ่านงานสหวิทยาการ ผสานภาพและตัวอักษรเข้าด้วยกัน สะท้อนความหลากหลายของวัฒนธรรมร่วมสมัย'}
    ]
  },
  {
    id: 3,
    img: 'img/won-3.jpg',
    tag: 'นิทรรศการ', tagCls: 'badge', tagStyle: 'background:#62d9c3;color:#0c2e29',
    title: 'นิทรรศการหมุนเวียน “Royal Urns — คนโทหลวง”',
    date: '7 ก.ค. – 7 ส.ค. 2569',
    time: '09:00–17:00 น.',
    fee: 'เข้าชมฟรี', free: true,
    place: 'พิพิธภัณฑ์เครื่องใช้แห่งชาติ',
    desc: [
      'นิทรรศการหมุนเวียนจัดแสดงคนโทหลวง (Royal Urns) ภาชนะโลหะลวดลายวิจิตรที่สะท้อนงานช่างชั้นสูงและคติความเชื่อในราชสำนัก',
      'ผู้ชมจะได้ศึกษารายละเอียดลวดลาย เทคนิคการตกแต่ง และบริบททางประวัติศาสตร์ของวัตถุชิ้นสำคัญ ผ่านการจัดแสดงและคำบรรยายประกอบ'
    ]
  },
  {
    id: 4,
    img: 'img/won-4.jpg',
    tag: 'เทศกาล', tagCls: 'badge b-orange',
    title: 'เทศกาลรสชาติแห่งฤดูใบไม้ร่วง “The Taste of Autumn”',
    date: '1 ต.ค. – 30 พ.ย. 2569',
    time: '17:00–22:00 น.',
    fee: 'ไวน์ญี่ปุ่นฟรีสำหรับมื้อค่ำ', free: true,
    place: 'HAN · Level 3, Thu Khoa Huan St., District 1, HCMC',
    desc: [
      'เทศกาลอาหารตามฤดูกาลโดย Yuzu Omakase × HAN ชวนสัมผัส “seasonal journey” ผ่านเมนูโอมากาเสะญี่ปุ่นที่ออกแบบเฉพาะช่วงฤดูใบไม้ร่วง',
      'ผู้มาร่วมรับประทานทุกท่านจะได้รับไวน์ญี่ปุ่นคัดสรรเป็นของกำนัล (complimentary) ตลอดเทศกาล'
    ]
  },
  {
    id: 5, seq: 14, highlight: true,
    img: 'img/won-5.jpg',
    tag: 'นิทรรศการ', tagCls: 'badge', tagStyle: 'background:#62d9c3;color:#0c2e29',
    title: 'นิทรรศการภาพถ่าย “Hagiwara Tea Garden”',
    date: '1–31 ส.ค. 2569',
    time: '09:00–17:00 น.',
    fee: 'เข้าชมฟรี', free: true,
    place: 'Japanese Tea Garden, Golden Gate Park, San Francisco',
    desc: [
      'นิทรรศการภาพถ่ายบอกเล่าเรื่องราวของสวนชาญี่ปุ่นเก่าแก่ (Japanese Tea Garden) มรดกของตระกูล Hagiwara ใน Golden Gate Park',
      'ถ่ายทอดบรรยากาศสถาปัตยกรรม ภูมิทัศน์ และปรัชญาความงามแบบญี่ปุ่นที่หล่อหลอมในพื้นที่สาธารณะกลางเมือง'
    ]
  },
  {
    id: 6,
    img: 'img/won-6.jpg',
    tag: 'เทศกาล', tagCls: 'badge b-orange',
    title: 'เทศกาลศิลปะนานาชาติ “EnNoVa Art Biennale vol.01”',
    date: '27 ต.ค. 2569 – 30 เม.ย. 2570',
    time: '10:00–18:00 น.',
    fee: 'มีค่าเข้าชม', free: false,
    place: 'ENNOVA Art Museum',
    desc: [
      'มหกรรมศิลปะร่วมสมัยระดับนานาชาติครั้งแรกในธีม “Multiple Future — อนาคตอันหลากหลาย” อำนวยการภัณฑารักษ์โดย Fumio Nanjo',
      'รวบรวมผลงานของศิลปินจากหลากหลายประเทศ สำรวจความสัมพันธ์ระหว่างมนุษย์ เทคโนโลยี และอนาคตของสังคม'
    ]
  },
  {
    id: 7,
    img: 'img/won-7.jpg',
    tag: 'นิทรรศการ', tagCls: 'badge', tagStyle: 'background:#62d9c3;color:#0c2e29',
    title: 'นิทรรศการพิเศษ “Lacquerware of East Asia · 三國三色”',
    date: '10 ก.ค. – 22 ก.ย. 2569',
    time: '10:00–18:00 น.',
    fee: 'เข้าชมฟรี', free: true,
    place: 'National Museum of Korea (ร่วมกับ Tokyo National Museum)',
    desc: [
      'นิทรรศการพิเศษความร่วมมือระหว่างพิพิธภัณฑสถานแห่งชาติเกาหลี ญี่ปุ่น และจีน จัดแสดงเครื่องเขิน (Lacquerware) ชั้นเลิศของเอเชียตะวันออก',
      'นำเสนอ “สามชาติ สามสีสัน” เปรียบเทียบเอกลักษณ์งานช่างเครื่องเขินของแต่ละวัฒนธรรม ผ่านวัตถุล้ำค่ากว่าร้อยชิ้น'
    ]
  },
  {
    id: 8,
    img: 'img/won-8.jpg',
    tag: 'การแสดง', tagCls: 'badge b-purple',
    title: 'ละครเวที “Théâtre des Bouffes du Nord”',
    date: '15–21 ก.พ. 2569',
    time: '19:30 น.',
    fee: 'มีค่าบัตรเข้าชม', free: false,
    place: 'Théâtre des Bouffes du Nord',
    desc: [
      'ฤดูกาลการแสดงละครเวทีจากคณะ Théâtre des Bouffes du Nord นำเสนอผลงาน “Dans la solitude des champs de coton” และ “Le discours aux animaux”',
      'การแสดงผสานบทละครร่วมสมัยเข้ากับดนตรีสด สร้างประสบการณ์ศิลปะการแสดงที่เข้มข้นและร่วมสมัย'
    ]
  },
  {
    id: 9, highlight: true,
    img: 'img/won-9.jpg',
    tag: 'เทศกาล', tagCls: 'badge b-orange',
    title: 'เทศกาลศิลปะแก้ว “Hsinchu Glass Art & Design Festival”',
    date: '9–25 ก.ย. 2569',
    time: 'จ.–ศ. 09:00–17:00 · ส.–อา. 09:00–20:00',
    fee: 'เข้าชมฟรี', free: true,
    place: 'พิพิธภัณฑ์แก้ว (Glass Museum) เมืองซินจู๋',
    desc: [
      'เทศกาลศิลปะและการออกแบบแก้วในธีม “透明博物館 — พิพิธภัณฑ์แห่งความใส” รวมผลงานศิลปะแก้วร่วมสมัยจากศิลปินและนักออกแบบ',
      'จัดแสดงเทคนิคการขึ้นรูปแก้ว นิทรรศการ และเวิร์กช็อป ส่งเสริมงานหัตถศิลป์แก้วให้เป็นที่รู้จักในวงกว้าง'
    ]
  },
  {
    id: 10,
    img: 'img/won-10.jpg',
    tag: 'นิทรรศการ', tagCls: 'badge', tagStyle: 'background:#62d9c3;color:#0c2e29',
    title: 'นิทรรศการ “SORPRENDENTE — ปลาหมึกยักษ์ 10 เมตร”',
    date: '1 ก.ค. – 30 ก.ย. 2569',
    time: '10:00–18:00 น.',
    fee: 'เข้าชมฟรี', free: true,
    place: 'Museo Argentino de Ciencias Naturales',
    desc: [
      'นิทรรศการธรรมชาติวิทยาจัดแสดงปลาหมึกยักษ์ (Architeuthis) ความยาวกว่า 10 เมตร ตัวอย่างที่ถูกเก็บรักษาไว้ตั้งแต่ปี 1992 และนำกลับมาจัดแสดงอีกครั้ง',
      'ชวนผู้ชมค้นพบโลกอันน่าทึ่งของสัตว์ไม่มีกระดูกสันหลังที่ใหญ่ที่สุดในโลก พร้อมเรื่องราวการอนุรักษ์และการศึกษาทางวิทยาศาสตร์'
    ]
  },
  {
    id: 11,
    img: 'img/won-11.jpg',
    tag: 'นิทรรศการ', tagCls: 'badge', tagStyle: 'background:#62d9c3;color:#0c2e29',
    title: 'นิทรรศการหัตถศิลป์ “Anthology of White · 화이트 앤솔러지”',
    date: '2 พ.ค. – 2 ก.ค. 2569',
    time: '10:00–18:00 น.',
    fee: 'เข้าชมฟรี', free: true,
    place: 'Korean Craft Museum × Seoul Museum of Craft Art',
    desc: [
      'นิทรรศการแลกเปลี่ยนพิเศษว่าด้วยงานหัตถศิลป์ในธีม “สีขาว” คัดสรรผลงานยอดเยี่ยมของศิลปินหลายท่านมาร้อยเรียงภายใต้แนวคิดเดียว',
      'สำรวจความงามอันบริสุทธิ์ของวัสดุและรูปทรง ตั้งแต่เครื่องปั้นดินเผา สิ่งทอ ไปจนถึงงานฝีมือร่วมสมัย'
    ]
  }
];

/* ---- flat icons (เขียว green-ink) ---- */
window.WON_ICONS = {
  cal:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>',
  fee:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10" stroke-dasharray="2 2"/></svg>',
  pin:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  fac:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-5h6v5M9 12h.01M15 12h.01"/></svg>'
};

/* render รายการรายละเอียด (ใช้ทั้งการ์ดและหน้ารายละเอียด) */
window.wonMetaHTML = function(ev){
  var I = window.WON_ICONS;
  var feeCls = ev.free ? ' class="free"' : '';
  return '<ul class="won-meta">' +
    '<li>'+I.cal+'<span>'+ev.date+'</span></li>' +
    '<li>'+I.clock+'<span>'+ev.time+'</span></li>' +
    '<li>'+I.fee+'<span'+feeCls+'>'+ev.fee+'</span></li>' +
    '<li>'+I.pin+'<span>'+ev.place+'</span></li>' +
  '</ul>';
};

/* ลำดับการแสดงผล: "ใหม่สุดขึ้นก่อน"
   ระบบจริง: Admin เพิ่มอีเวนต์ใหม่ = ต่อท้าย array (id ใหม่สุด) → ฟังก์ชันนี้กลับลำดับให้ล่าสุดอยู่บนสุด
   ใช้ทั้งหน้า What's On (ทุกใบ) และหน้าแรก (หยิบ N ใบล่าสุด) */
window.wonNewestFirst = function(){
  return window.WHATSON.slice().sort(function(a,b){ return (b.seq||b.id) - (a.seq||a.id); });
};

/* สีหมวด (ใช้กับการ์ด v2) — แยกประเภทด้วยสี */
window.WON_CAT_COLOR = {
  'Workshop': '#d8b269',   /* ทอง */
  'ประกวด':   '#e9a6a0',   /* ชมพู */
  'นิทรรศการ': '#62d9c3',   /* เขียว */
  'การแสดง':  '#c5a3dd',   /* ม่วง */
  'เทศกาล':   '#ec9a5e'    /* ส้ม */
};

/* เนื้อหา Overview ตัวอย่าง (เดโม่) — ต่อท้ายทุกอีเวนต์ที่ยังไม่มี body เต็ม (ทุกตัวยกเว้น id=2)
   หลังบ้านจริง: ฟิลด์นี้คือ rich-text "เนื้อหา/รายละเอียด" ของโพสต์ What's On แต่ละรายการ */
window.WON_OVERVIEW_DEMO = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
];

/* render การ์ด v2 (พื้นการ์ด=สีหมวด · tag ดำ+ตัวอักษรสีหมวด · รูปเต็มขอบ) */
window.wonCard2HTML = function(ev){
  var c = window.WON_CAT_COLOR[ev.tag] || '#62d9c3';
  return '<a class="won-card2" href="whatson-detail.html?id='+ev.id+'" style="--cat:'+c+'">' +
    '<div class="thumb" style="background:url(\''+ev.img+'\') center/cover"></div>' +
    '<div class="body">' +
      '<div class="top-row"><span class="tag2">'+ev.tag+'</span><span class="date2">'+ev.date+'</span></div>' +
      '<h3>'+ev.title+'</h3>' +
      '<p class="loc">'+window.WON_ICONS.pin+'<span>'+ev.place+'</span></p>' +
    '</div></a>';
};

/* render การ์ด 1 ใบ (ลิงก์ไปหน้ารายละเอียดพร้อม id) */
window.wonCardHTML = function(ev){
  var style = ev.tagStyle ? ' style="'+ev.tagStyle+'"' : '';
  return '<a class="card won-card" href="whatson-detail.html?id='+ev.id+'">' +
    '<div class="thumb" style="background:url(\''+ev.img+'\') center/cover"></div>' +
    '<div class="body">' +
      '<div class="tag-row"><span class="'+ev.tagCls+'"'+style+'>'+ev.tag+'</span></div>' +
      '<h3>'+ev.title+'</h3>' +
      window.wonMetaHTML(ev) +
    '</div></a>';
};

/* ============================================================
   What's Around SU — ข้อมูลกลาง (ใช้ร่วม: index, around, around-detail)
   tag = ประเภทงาน (ใช้สีหมวดชุดเดียวกับ What's On) · ไม่ใช่ชื่อคณะ
   ============================================================ */
window.AROUND = [
  { id:1, faculty:"คณะโบราณคดี", time:"ตลอดวัน", fee:"เข้าชมฟรี", img:'img/asu-1.jpg', tag:'เทศกาล', date:'18 พ.ค. 2569', title:'วันพิพิธภัณฑ์สากล “International Museum Day”', place:'İstanbul Archaeology Museums',
    desc:['กิจกรรมเนื่องในวันพิพิธภัณฑ์สากล โดยพิพิธภัณฑ์โบราณคดีอิสตันบูล เปิดให้เข้าชมทุกพิพิธภัณฑ์ฟรีตลอดทั้งวัน','ชวนประชาชนร่วมเรียนรู้คุณค่าของมรดกทางโบราณคดีและบทบาทของพิพิธภัณฑ์ต่อสังคม'] },
  { id:2, faculty:"คณะโบราณคดี", time:"10:00–18:00 น.", fee:"เข้าชมฟรี", img:'img/asu-2.jpg', tag:'นิทรรศการ', date:'ฤดูร้อน 2569', title:'ฉลอง 150 ปี “Victoire de Samothrace”', place:'Samothrace, Greece',
    desc:['งานฉลองครบรอบ 150 ปี การค้นพบรูปปั้น Victoire de Samothrace (Winged Victory) หนึ่งในประติมากรรมกรีกที่สำคัญที่สุด','พร้อมพิธีเปิดและกิจกรรมเชิงวัฒนธรรม ณ เกาะ Samothrace'] },
  { id:3, faculty:"คณะจิตรกรรม ประติมากรรมและภาพพิมพ์", time:"10:00–18:00 น.", fee:"บัตร 12 €", img:'img/asu-3.jpg', tag:'นิทรรศการ', date:'15 มี.ค. – 8 ก.ย. 2569', title:'นิทรรศการ “Corps & Âmes” โดย Dorignac', place:'Musée de Montmartre, Jardins Renoir',
    desc:['นิทรรศการผลงานวาดเส้นรูปคนของ Georges Dorignac ที่ถ่ายทอดพลังและจิตวิญญาณของมนุษย์ผ่านเส้นสายอันเข้มข้น','จัดแสดง ณ Musée de Montmartre กรุงปารีส'] },
  { id:4, faculty:"คณะจิตรกรรม ประติมากรรมและภาพพิมพ์", time:"10:00–18:00 น.", fee:"บัตร £22", img:'img/asu-4.jpg', tag:'นิทรรศการ', date:'8 มิ.ย. – 16 ส.ค. 2569', title:'Royal Academy “Summer Exhibition”', place:'Royal Academy of Arts, London',
    desc:['นิทรรศการศิลปะฤดูร้อนประจำปีของ Royal Academy of Arts จัดต่อเนื่องมายาวนาน รวมผลงานหลากหลายแขนงจากศิลปินทั้งมืออาชีพและหน้าใหม่','อำนวยการคัดสรรโดย Michael Craig-Martin'] },
  { id:5, faculty:"คณะจิตรกรรม ประติมากรรมและภาพพิมพ์", time:"10:00–18:00 น.", fee:"บัตร 11 €", img:'img/asu-5.jpg', tag:'นิทรรศการ', date:'5 มี.ค. – 7 ก.ค. 2569', title:'Théodore Rousseau “La Voix de la Forêt”', place:'Petit Palais, Paris',
    desc:['นิทรรศการจิตรกรรมภูมิทัศน์ของ Théodore Rousseau ผู้บุกเบิกการวาดภาพธรรมชาติและป่าไม้แห่งสำนัก Barbizon','สำรวจ “เสียงของผืนป่า” ผ่านผลงานที่สะท้อนความสัมพันธ์ระหว่างมนุษย์กับธรรมชาติ'] },
  { id:6, faculty:"คณะสถาปัตยกรรมศาสตร์", time:"11:00–19:00 น.", fee:"เข้าชมฟรี", img:'img/asu-6.jpg', tag:'นิทรรศการ', date:'ก.ย. 2569', title:'Enigma “Modern Art Exhibition”', place:'Imperial St, Los Angeles',
    desc:['นิทรรศการศิลปะร่วมสมัยรวมผลงานของศิลปินรุ่นใหม่หลายท่าน นำเสนอมุมมองและภาษาทางศิลปะที่ท้าทาย','จัดแสดง ณ ลอสแอนเจลิส สหรัฐอเมริกา'] },
  { id:7, faculty:"คณะดุริยางคศาสตร์", time:"19:30 น.", fee:"มีค่าบัตรเข้าชม", img:'img/asu-7.jpg', tag:'การแสดง', date:'ฤดูกาล 2024/25', title:'Detroit Opera “Opera & Dance Season”', place:'Detroit Opera House',
    desc:['ฤดูกาลการแสดงอุปรากรและนาฏศิลป์ร่วมสมัยของ Detroit Opera รวมโปรแกรมการแสดงตลอดทั้งปี','ประสบการณ์ศิลปะการแสดงระดับสากลกลางเมืองดีทรอยต์'] },
  { id:8, faculty:"คณะอักษรศาสตร์", time:"09:00–16:00 น.", fee:"มีค่าลงทะเบียน", img:'img/asu-8.jpg', tag:'Workshop', date:'6–7 เม.ย. 2569', title:'Workshop “Socorrismo” (การปฐมพยาบาล)', place:'FAP · Porto, Portugal',
    desc:['เวิร์กช็อปการปฐมพยาบาลเบื้องต้นโดยสภากาชาดโปรตุเกส (Cruz Vermelha Portuguesa) สำหรับผู้สนใจ','รับจำนวนจำกัด 25 คน เรียนรู้ทักษะช่วยชีวิตที่ใช้ได้จริง'] },
  { id:9, faculty:"คณะโบราณคดี", time:"09:00–17:00 น.", fee:"บัตร 9 €", img:'img/asu-9.jpg', tag:'นิทรรศการ', date:'30 เม.ย. – 30 ต.ค. 2569', title:'“Bischof. Kaiser. Jedermann.” 200 ปี Salzburg', place:'Salzburg Museum, Neue Residenz',
    desc:['นิทรรศการระดับรัฐเนื่องในวาระ 200 ปี ที่ Salzburg เข้าร่วมกับออสเตรีย (1816–2016) จัดแสดงวัตถุประวัติศาสตร์ล้ำค่า','บอกเล่าเรื่องราวของบิชอป จักรพรรดิ และสามัญชน ผ่านมรดกของเมือง'] },
  { id:10, faculty:"คณะจิตรกรรม ประติมากรรมและภาพพิมพ์", time:"10:00–18:00 น.", fee:"บัตร 11 €", img:'img/asu-10.jpg', tag:'นิทรรศการ', date:'10 มี.ค. – 10 ก.ค. 2569', title:'Albert Edelfelt “Lumières de Finlande”', place:'Petit Palais, Paris',
    desc:['นิทรรศการผลงานของ Albert Edelfelt (1854–1905) จิตรกรชาวฟินแลนด์คนสำคัญ ผู้ถ่ายทอดแสงและบรรยากาศของฟินแลนด์','ความร่วมมือกับ Ateneum / Finnish National Gallery'] },
  { id:11, faculty:"คณะอักษรศาสตร์", time:"ตามกำหนดการ", fee:"ไม่มีค่าใช้จ่าย", img:'img/asu-11.jpg', tag:'ประกวด', date:'ปิดรับ 10 ส.ค. 2569', title:'Call for Artists “The Law Festival”', place:'ออนไลน์ (The Law Festival)',
    desc:['เปิดรับผลงานศิลปะในธีม “วิวัฒนาการของวิชาชีพกฎหมาย” เชิญชวนศิลปินส่งผลงานเข้าร่วมจัดแสดงในเทศกาล','ส่งผลงานทางอีเมลภายในกำหนด'] },
  { id:12, faculty:"คณะมัณฑนศิลป์", time:"ตามกำหนดการ", fee:"ไม่มีค่าใช้จ่าย", img:'img/asu-12.jpg', tag:'ประกวด', date:'15 ก.พ. – 15 มี.ค. 2569', title:'Convocatòria “STRIPART 2020”', place:'Centre Cívic Guinardó, Barcelona',
    desc:['การเปิดรับโครงการศิลปะสหวิทยาการจากศิลปินหน้าใหม่ (emerging artists) ในวาระ 25 ปี ของ STRIPART','โอกาสจัดแสดงผลงาน ณ Centre Cívic Guinardó เมืองบาร์เซโลนา'] },
  { id:13, faculty:"คณะจิตรกรรม ประติมากรรมและภาพพิมพ์", time:"10:00–18:00 น.", fee:"เข้าชมฟรี", img:'img/asu-13.jpg', tag:'นิทรรศการ', date:'9 ม.ค. – 3 ก.พ. 2569', title:'นิทรรศการภาพเขียนไอคอนยูเครนร่วมสมัย', place:'Kharkiv, Ukraine',
    desc:['นิทรรศการภาพเขียนไอคอน (Iconography) ร่วมสมัยของยูเครน รวมผลงานจากศิลปินและสำนักภาพเขียนไอคอนหลายแห่ง','สืบสานงานช่างศิลป์ศักดิ์สิทธิ์ในบริบทร่วมสมัย'] },
  { id:14, faculty:"คณะดุริยางคศาสตร์", time:"19:00 น.", fee:"มีค่าบัตรเข้าชม", img:'img/asu-14.jpg', tag:'การแสดง', date:'29 พ.ย. 2569', title:'Rameau “Hippolyte et Aricie” (Simon Rattle)', place:'Staatsoper, Unter den Linden, Berlin',
    desc:['การแสดงอุปรากร “Hippolyte et Aricie” ของ Jean-Philippe Rameau อำนวยเพลงโดย Simon Rattle','ณ Staatsoper กรุงเบอร์ลิน'] },
  { id:15, faculty:"คณะจิตรกรรม ประติมากรรมและภาพพิมพ์", time:"10:00–18:00 น.", fee:"บัตร 16 €", img:'img/asu-15.jpg', tag:'นิทรรศการ', date:'19 มี.ค. – 3 ส.ค. 2569', title:'Artemisia “Héroïne de l’Art”', place:'Musée Jacquemart-André, Paris',
    desc:['นิทรรศการผลงานของ Artemisia Gentileschi จิตรกรหญิงคนสำคัญแห่งยุคบาโรก ผู้เป็นสัญลักษณ์ของพลังหญิงในวงการศิลปะ','จัดแสดง ณ Musée Jacquemart-André กรุงปารีส'] }
];

/* ลำดับ "ใหม่สุดขึ้นก่อน" (Admin ลงใหม่ = id/seq สูงสุด → ขึ้นบนสุด ทั้ง around + หน้าแรก) */
window.aroundNewestFirst = function(){
  return window.AROUND.slice().sort(function(a,b){ return (b.seq||b.id) - (a.seq||a.id); });
};

/* render รายละเอียด Around (วันที่ + สถานที่) */
window.aroundMetaHTML = function(ev){
  var I = window.WON_ICONS;
  return '<ul class="won-meta">' +
    '<li>'+I.cal+'<span>'+ev.date+'</span></li>' +
    '<li>'+I.pin+'<span>'+ev.place+'</span></li>' +
  '</ul>';
};

/* render การ์ด Around (variant .dark · ลิงก์ around-detail.html?id) */
window.aroundCard2HTML = function(ev){
  var c = window.WON_CAT_COLOR[ev.tag] || '#62d9c3';
  var fac = ev.faculty ? '<p class="fac">'+window.WON_ICONS.fac+'<span>'+ev.faculty+'</span></p>' : '';
  return '<a class="won-card2 light" href="around-detail.html?id='+ev.id+'" style="--cat:'+c+'">' +
    '<div class="thumb" style="background:url(\''+ev.img+'\') center/cover"></div>' +
    '<div class="body">' +
      '<div class="top-row"><span class="tag2">'+ev.tag+'</span><span class="date2">'+ev.date+'</span></div>' +
      '<h3>'+ev.title+'</h3>' +
      fac +
      '<p class="loc">'+window.WON_ICONS.pin+'<span>'+ev.place+'</span></p>' +
    '</div></a>';
};

/* ============================================================
   Blog — ข้อมูลบทความ (ใช้ใน Reading Corner / Blog) · highlight = ติ๊กให้ขึ้น Highlights
   ============================================================ */
window.BLOG = [
  { id:1, img:'img/rc-blog1.jpg', tag:'บทความ', tagColor:'#9ec5e0', title:'จิตรกรรมกับดอกไม้: สัญลักษณ์และความหมายในงานศิลป์', date:'1 มิ.ย. 2569', place:'Reading Corner · Blog', highlight:true,
    excerpt:'ดอกไม้ในงานจิตรกรรมไม่ได้เป็นเพียงความงามทางสายตา แต่ยังแฝงสัญลักษณ์และความหมายเชิงวัฒนธรรมที่ลึกซึ้ง บทความนี้ชวนสำรวจการตีความดอกไม้ในงานศิลป์ตั้งแต่อดีตถึงปัจจุบัน' },
  { id:2, img:'img/hl-blog.jpg', tag:'บทความ', tagColor:'#9ec5e0', title:'ศิลปะ วัฒนธรรม และการสร้างสรรค์ ของไทยกับโลกนี้', date:'20 พ.ค. 2569', place:'Reading Corner · Blog', highlight:true,
    excerpt:'มองบทบาทของศิลปะและวัฒนธรรมไทยในเวทีโลก และการสร้างสรรค์ที่เชื่อมรากเหง้ากับความร่วมสมัย' },
  { id:3, img:'img/rc-blog2.jpg', tag:'บทความ', tagColor:'#9ec5e0', title:'มนุษย์และสัตว์ในงานประติมากรรม', date:'10 พ.ค. 2569', place:'Reading Corner · Blog', highlight:false,
    excerpt:'รูปทรงของมนุษย์และสัตว์เป็นแรงบันดาลใจสำคัญของงานปั้นมาทุกยุคสมัย สำรวจความหมายที่ซ่อนอยู่' }
];

/* ============================================================
   Highlights — รวมเฉพาะการ์ด What's On + Blog ที่ "ติ๊กให้ขึ้น Highlights" (highlight:true)
   ระบบจริง: หลังบ้านมีปุ่ม/สวิตช์ตอนลงข้อมูล → ตั้งค่า highlight ของรายการนั้น
   ============================================================ */
window.getHighlights = function(){
  var out = [];
  (window.WHATSON||[]).forEach(function(e){ if(e.highlight) out.push({
    img:e.img, source:"What's On", tag:e.tag, tagColor:(window.WON_CAT_COLOR[e.tag]||'#62d9c3'),
    title:e.title, date:e.date, place:e.place, link:'whatson-detail.html?id='+e.id }); });
  (window.BLOG||[]).forEach(function(b){ if(b.highlight) out.push({
    img:b.img, source:"Blog", tag:b.tag, tagColor:b.tagColor,
    title:b.title, date:b.date, place:'', link:'blog.html' }); }); /* Blog ไม่แสดงสถานที่ */
  return out;
};

/* render การ์ด Highlights (รูปซ้าย cover เต็ม + พาเนลดำขวา: source/tag/หัวข้อ/วันที่+สถานที่) */
window.highlightCardHTML = function(it){
  return '<a class="hl-slide" href="'+it.link+'" style="--cat:'+it.tagColor+'">' +
    '<div class="hl-img" style="background-image:url(\''+it.img+'\')"></div>' +
    '<div class="hl-info">' +
      '<div class="hl-top"><span class="hl-src">'+it.source+'</span><span class="hl-tag">'+it.tag+'</span></div>' +
      '<h3>'+it.title+'</h3>' +
      '<div class="hl-meta">' +
        '<span class="hl-mrow">'+window.WON_ICONS.cal+'<span>'+it.date+'</span></span>' +
        (it.place?('<span class="hl-mrow">'+window.WON_ICONS.pin+'<span>'+it.place+'</span></span>'):'') +
      '</div>' +
    '</div></a>';
};
