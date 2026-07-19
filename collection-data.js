/* ============================================================
   Collection — ข้อมูลกลางคลังสะสมผลงานศิลปกรรม (mockup)
   ระบบจริง: มาจาก CMS · แก้/เพิ่มผลงานที่ array COLLECTION ที่เดียว
   หมายเหตุ: รูปเป็นภาพตัวอย่าง 3 ภาพ (ตามประเภท) นำมาใช้ซ้ำเพื่อสาธิต
   ============================================================ */

/* 3 ฐานข้อมูล (ชุดคลังสะสม) — 1 ผลงาน สังกัด 1 ชุด */
window.COLL_SETS = {
  national: { label:'ศิลปกรรมแห่งชาติ',                          badge:'b-red'   },
  young:    { label:'ศิลปกรรมร่วมสมัยของศิลปินรุ่นเยาว์',        badge:'b-gold'  },
  silpa:    { label:'ผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี',  badge:'b-green' }
};

/* fallback รูปตามประเภท (ปกติทุกผลงานมี cover ของตัวเองแล้ว) */
window.COLL_TYPE_IMG = {
  'จิตรกรรม':    'img/coll-18.jpg',
  'ประติมากรรม': 'img/coll-14.jpg',
  'ภาพพิมพ์':    'img/coll-23.jpg'
};

/* คำสำคัญ (Themes) — ลูกค้าเพิ่มได้เรื่อยๆ · 1 ผลงานอยู่ได้หลายคำ */
window.THEMES = [
  'พุทธศิลป์ & ศรัทธา',
  'ธรรมชาติ & สรรพสัตว์',
  'รูปทรงมนุษย์',
  'นามธรรม & ทดลอง',
  'วิถีชีวิตไทย',
  'สีสันร่วมสมัย'
];

/* ผลงานทั้งหมด — highlight=true จะขึ้น section Collection Highlights (slider) */
window.COLLECTION = [
  { id:13, set:'national', type:'ประติมากรรม', title:'อสูรปักษา', artist:'ประสิทธิ์ วิจิตรศิลป์', year:2565,
    size:'55 × 40 × 30 ซม.', technique:'บรอนซ์รมดำ', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 68',
    awards:['รางวัลเกียรตินิยมอันดับ 1 เหรียญทอง'], highlight:true, themes:['รูปทรงมนุษย์','ธรรมชาติ & สรรพสัตว์'],
    cover:'img/coll-griffin.jpg', images:['img/coll-griffin.jpg','img/coll-griffin-2.jpg','img/coll-griffin-3.jpg','img/coll-griffin-4.jpg'],
    concept:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br><br>The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br><br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' },

  { id:14, set:'young', type:'ประติมากรรม', title:'คารวะ', artist:'ศิริชัย มานะธรรม', year:2565,
    size:'60 × 25 × 22 ซม.', technique:'เซรามิกเคลือบ', exhibition:'การแสดงศิลปกรรมร่วมสมัยของศิลปินรุ่นเยาว์ ครั้งที่ 40',
    awards:[], highlight:true, themes:['ธรรมชาติ & สรรพสัตว์','นามธรรม & ทดลอง'], cover:'img/coll-14.jpg',
    concept:'ประติมากรรมเซรามิกรูปช้างก้มคำนับนกตัวเล็ก สื่อถึงความอ่อนน้อมของผู้ยิ่งใหญ่ต่อสรรพชีวิตที่เล็กที่สุด' },

  { id:15, set:'silpa', type:'ประติมากรรม', title:'พระคเณศ ปางประทานพร', artist:'ธนวัฒน์ ศิลป์สกุล', year:2560,
    size:'40 × 18 × 18 ซม.', technique:'โลหะผสม (บรอนซ์รมเงิน)', exhibition:'นิทรรศการผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี ครั้งที่ 16',
    awards:[], highlight:false, themes:['พุทธศิลป์ & ศรัทธา','รูปทรงมนุษย์'], cover:'img/coll-15.jpg',
    concept:'เทวรูปพระคเณศเทพแห่งศิลปวิทยา ประทานพรและปัดเป่าอุปสรรค หล่อด้วยโลหะผสมรมเงินอย่างประณีต' },

  { id:16, set:'national', type:'ประติมากรรม', title:'มหาภิเนษกรมณ์', artist:'อนุพงษ์ ช่างเรือน', year:2563,
    size:'45 × 42 × 22 ซม.', technique:'เซรามิกดินสโตนแวร์', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 66',
    awards:['เกียรตินิยมอันดับ 2 เหรียญเงิน'], highlight:false, themes:['พุทธศิลป์ & ศรัทธา','วิถีชีวิตไทย'], cover:'img/coll-16.jpg',
    concept:'ตีความตอนเจ้าชายสิทธัตถะเสด็จออกผนวชทรงม้ากัณฐกะ ด้วยรูปทรงเรียบง่ายแบบเซรามิกร่วมสมัย' },

  { id:17, set:'silpa', type:'จิตรกรรม', title:'มหาเทพแห่งศิลปวิทยา', artist:'ปกรณ์ อารยะกุล', year:2561,
    size:'150 × 120 ซม.', technique:'สีอะคริลิกและทองคำเปลวบนผ้าใบ', exhibition:'นิทรรศการผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี ครั้งที่ 19',
    awards:['รางวัลดีเด่น'], highlight:false, themes:['พุทธศิลป์ & ศรัทธา','สีสันร่วมสมัย'], cover:'img/coll-17.jpg',
    concept:'พระคเณศประทับบนบัลลังก์ท่ามกลางเหล่าเทพและเครื่องสักการะ ผสานงานจิตรกรรมไทยกับเทคนิคปะติดร่วมสมัย' },

  { id:18, set:'national', type:'จิตรกรรม', title:'ความลับของยาย', artist:'สุรพล ทวีสุข', year:2564,
    size:'140 × 110 ซม.', technique:'สีน้ำมันบนผ้าใบ', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 67',
    awards:['เกียรตินิยมอันดับ 2 เหรียญเงิน'], highlight:true, themes:['วิถีชีวิตไทย','รูปทรงมนุษย์'], cover:'img/coll-18.jpg',
    concept:'ภาพเหมือนจริงของหลานกระซิบกับยาย ถ่ายทอดความผูกพันอบอุ่นระหว่างวัยและวิถีชีวิตชนบทไทย' },

  { id:19, set:'young', type:'จิตรกรรม', title:'สายใยแห่งมิตรภาพ', artist:'ณัฐพล จิตรกร', year:2566,
    size:'100 × 130 ซม.', technique:'สีน้ำมันบนผ้าใบ', exhibition:'การแสดงศิลปกรรมร่วมสมัยของศิลปินรุ่นเยาว์ ครั้งที่ 41',
    awards:['รางวัลยอดเยี่ยม'], highlight:false, themes:['รูปทรงมนุษย์','วิถีชีวิตไทย'], cover:'img/coll-19.jpg',
    concept:'ภาพเด็กสองคนสวมสร้อยให้กัน สะท้อนความบริสุทธิ์ของมิตรภาพในวัยเยาว์ ด้วยเทคนิคสีน้ำมันแบบคลาสสิก' },

  { id:20, set:'silpa', type:'ประติมากรรม', title:'จักรวาลแห่งปัญญา', artist:'วิชัย เรืองศิลป์', year:2562,
    size:'90 × 55 × 30 ซม.', technique:'บรอนซ์และทองเหลือง', exhibition:'นิทรรศการผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี ครั้งที่ 20',
    awards:[], highlight:false, themes:['พุทธศิลป์ & ศรัทธา','นามธรรม & ทดลอง'], cover:'img/coll-20.jpg',
    concept:'พระคเณศประทับกลางโครงเรขาคณิตคล้ายจักรวาล สื่อถึงปัญญาที่เชื่อมโยงสรรพสิ่งเข้าด้วยกัน' },

  { id:21, set:'national', type:'จิตรกรรม', title:'ต้นไม้แห่งธรรม', artist:'บุญส่ง วิจิตรกุล', year:2559,
    size:'120 × 90 ซม.', technique:'สีฝุ่นและทองคำเปลวบนผ้าใบ', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 62',
    awards:['เกียรตินิยมอันดับ 1 เหรียญทอง'], highlight:false, themes:['พุทธศิลป์ & ศรัทธา','วิถีชีวิตไทย'], cover:'img/coll-21.jpg',
    concept:'จิตรกรรมไทยลายเส้นทองรูปต้นไม้แห่งธรรม แสดงเรื่องราวพุทธศาสนาและวิถีชุมชนที่แผ่กิ่งก้านสัมพันธ์กัน' },

  { id:22, set:'national', type:'ประติมากรรม', title:'กำเนิดแห่งรัตติกาล', artist:'เกรียงไกร ปั้นทอง', year:2565,
    size:'120 × 90 × 70 ซม.', technique:'ไฟเบอร์กลาสและสีอะคริลิก', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 68',
    awards:[], highlight:false, themes:['ธรรมชาติ & สรรพสัตว์','นามธรรม & ทดลอง'], cover:'img/coll-22.jpg',
    concept:'ประติมากรรมสัตว์ในจินตนาการผุดขึ้นจากความมืด สื่อถึงพลังดิบและการก่อกำเนิดของสรรพสิ่งยามราตรี' },

  { id:23, set:'young', type:'ภาพพิมพ์', title:'ระบำแห่งปีก', artist:'พรรณี ศรีสุวรรณ', year:2564,
    size:'50 × 40 ซม.', technique:'ภาพพิมพ์ Scratchboard', exhibition:'การแสดงศิลปกรรมร่วมสมัยของศิลปินรุ่นเยาว์ ครั้งที่ 39',
    awards:[], highlight:false, themes:['ธรรมชาติ & สรรพสัตว์'], cover:'img/coll-23.jpg',
    concept:'ภาพพิมพ์ขูดผิวรูปนกกางปีกกลางราตรี ถ่ายทอดความสง่างามและอิสระด้วยเส้นสีขาวบนพื้นดำ' },

  { id:24, set:'silpa', type:'จิตรกรรม', title:'เมืองลอยฟ้า', artist:'ธีรศักดิ์ พงศ์ธร', year:2560,
    size:'180 × 140 ซม.', technique:'สีน้ำมันบนผ้าใบ', exhibition:'นิทรรศการผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี ครั้งที่ 18',
    awards:[], highlight:true, themes:['พุทธศิลป์ & ศรัทธา','นามธรรม & ทดลอง'], cover:'img/coll-24.jpg',
    concept:'ภาพเมืองและปราสาทไทยล่องลอยเป็นรูปทรงคล้ายต้นไม้เหนือหมู่เมฆ สื่อจินตนาการถึงแดนสวรรค์ในคติไทย' },

  { id:25, set:'young', type:'จิตรกรรม', title:'ผู้พิทักษ์ความไร้เดียงสา', artist:'กานต์ อภิรักษ์', year:2567,
    size:'120 × 90 ซม.', technique:'สีอะคริลิกบนผ้าใบ', exhibition:'การแสดงศิลปกรรมร่วมสมัยของศิลปินรุ่นเยาว์ ครั้งที่ 41',
    awards:['รางวัลดีเด่น'], highlight:false, themes:['สีสันร่วมสมัย','นามธรรม & ทดลอง'], cover:'img/coll-25.jpg',
    concept:'ภาพตัวละครในจินตนาการโอบอุ้มดอกไม้และเด็กน้อย แนว pop-surrealism สื่อการปกป้องความบริสุทธิ์' },

  { id:26, set:'national', type:'ประติมากรรม', title:'เทพยดาอัญเชิญธง', artist:'มนตรี สุวรรณเลิศ', year:2561,
    size:'80 × 50 × 40 ซม.', technique:'บรอนซ์ปิดทอง', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 64',
    awards:['เกียรตินิยมอันดับ 1 เหรียญทอง'], highlight:true, themes:['พุทธศิลป์ & ศรัทธา','รูปทรงมนุษย์'], cover:'img/coll-26.jpg',
    concept:'เทวดาในท่วงท่าอ่อนช้อยอัญเชิญธงตะขาบ หล่อบรอนซ์ปิดทองตามแบบประเพณีไทยชั้นสูง' },

  { id:27, set:'young', type:'ภาพพิมพ์', title:'สรรพชีวิต', artist:'อรุณ เมธาวี', year:2565,
    size:'60 × 45 ซม.', technique:'ภาพพิมพ์ Scratchboard', exhibition:'การแสดงศิลปกรรมร่วมสมัยของศิลปินรุ่นเยาว์ ครั้งที่ 40',
    awards:[], highlight:false, themes:['ธรรมชาติ & สรรพสัตว์'], cover:'img/coll-27.jpg',
    concept:'ภาพพิมพ์ขูดผิวรวมสรรพสัตว์นานาชนิด สื่อความหลากหลายและการพึ่งพิงกันของระบบนิเวศ' },

  { id:28, set:'silpa', type:'ภาพพิมพ์', title:'วิหคแห่งความตาย', artist:'ปรีชา ดำรงศิลป์', year:2559,
    size:'70 × 50 ซม.', technique:'ภาพพิมพ์โลหะ (Mezzotint)', exhibition:'นิทรรศการผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี ครั้งที่ 17',
    awards:[], highlight:false, themes:['ธรรมชาติ & สรรพสัตว์','นามธรรม & ทดลอง'], cover:'img/coll-28.jpg',
    concept:'ภาพพิมพ์โลหะโทนมืดรูปสัตว์มีปีกและกะโหลก สำรวจความงามอันน่าพรั่นพรึงของความตายและการเปลี่ยนผ่าน' },

  { id:29, set:'silpa', type:'จิตรกรรม', title:'ตรัสรู้', artist:'สมพงษ์ พุทธคุณ', year:2562,
    size:'160 × 150 ซม.', technique:'สีอะคริลิก เงินและทองบนผ้าใบ', exhibition:'นิทรรศการผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี ครั้งที่ 20',
    awards:['เกียรตินิยมอันดับ 2 เหรียญเงิน'], highlight:true, themes:['พุทธศิลป์ & ศรัทธา'], cover:'img/coll-29.jpg',
    concept:'ภาพพระพุทธองค์ท่ามกลางจักรวาลแห่งเงินและทอง สื่อการตรัสรู้และการหลุดพ้นในคติพุทธ' },

  { id:30, set:'national', type:'ภาพพิมพ์', title:'เพลงเช้าริมบึง', artist:'วิรัช ธารทอง', year:2558,
    size:'55 × 45 ซม.', technique:'ภาพพิมพ์ Scratchboard', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 61',
    awards:[], highlight:false, themes:['ธรรมชาติ & สรรพสัตว์','วิถีชีวิตไทย'], cover:'img/coll-30.jpg',
    concept:'ภาพพิมพ์ขูดผิวรูปนกขับขานบนกิ่งไม้ริมบึงยามเช้า ถ่ายทอดความสงบงามของธรรมชาติ' },

  { id:31, set:'young', type:'ประติมากรรม', title:'เสียงสุดท้ายของนก', artist:'ชลิตา วงศ์ไพศาล', year:2566,
    size:'35 × 20 × 42 ซม.', technique:'เรซินหล่อ', exhibition:'การแสดงศิลปกรรมร่วมสมัยของศิลปินรุ่นเยาว์ ครั้งที่ 41',
    awards:[], highlight:false, themes:['ธรรมชาติ & สรรพสัตว์','นามธรรม & ทดลอง'], cover:'img/coll-31.jpg',
    concept:'ประติมากรรมนกที่ผสานกับกะโหลกกรีดร้อง ตั้งคำถามถึงชะตากรรมของธรรมชาติในโลกที่เปลี่ยนไป' },

  { id:32, set:'national', type:'จิตรกรรม', title:'อนิจจัง', artist:'เมธี รัตนศิลป์', year:2563,
    size:'170 × 150 ซม.', technique:'สีน้ำมันบนผ้าใบ', exhibition:'การแสดงศิลปกรรมแห่งชาติ ครั้งที่ 66',
    awards:['เกียรตินิยมอันดับ 1 เหรียญทอง'], highlight:true, themes:['พุทธศิลป์ & ศรัทธา','รูปทรงมนุษย์'], cover:'img/coll-32.jpg',
    concept:'ภาพประดุจฉากชีวิต พระ โครงกระดูก มารดาและบุตร สื่อสัจธรรมความไม่เที่ยงของสรรพสิ่ง' },

  { id:33, set:'silpa', type:'จิตรกรรม', title:'ความทรงจำที่จมหาย', artist:'อาทิตย์ แสงเดือน', year:2561,
    size:'120 × 90 ซม.', technique:'สีน้ำมันบนผ้าใบ', exhibition:'นิทรรศการผลงานทุนสร้างสรรค์ศิลปกรรม ศิลป์ พีระศรี ครั้งที่ 18',
    awards:[], highlight:false, themes:['วิถีชีวิตไทย','นามธรรม & ทดลอง'], cover:'img/coll-33.jpg',
    concept:'ภาพเศียรบุคคลในเครื่องทรงไทยจมอยู่ในผืนน้ำสีทอง มีวัดอรุณเป็นฉากหลัง สื่อความทรงจำและกาลเวลาที่เลือนหาย' }
];

/* Stories — ใช้ร่วมกับ Blog · ที่ติ๊ก "Stories" จะมาแสดงที่ section นี้ · artworkIds = ผลงานที่ฝังในบทความ */
window.COLL_STORIES = [
  { id:1, title:'ธรรมชาติในงานศิลปะไทยร่วมสมัย', author:'ศิริพร วงศ์ไทย', excerpt:'สำรวจการตีความธรรมชาติและสรรพสัตว์ในผลงานจากคลังสะสม ตั้งแต่ทุ่งนาถึงสัตว์ในจินตนาการ',
    cover:'img/coll-story1.jpg', read:'อ่านราว 6 นาที', date:'12 พ.ค. 2569', tags:['ศิลปะไทย','ธรรมชาติ','บทความ'], artworkIds:[14,23,27,30,31] },
  { id:2, title:'พุทธศิลป์: ศรัทธาที่จับต้องได้', author:'ธนา ภักดีศิลป์', excerpt:'เมื่อความเชื่อกลายเป็นรูปธรรม ชวนมองผลงานที่ถ่ายทอดพลังศรัทธาในพุทธศาสนา',
    cover:'img/coll-story2.jpg', read:'อ่านราว 5 นาที', date:'28 เม.ย. 2569', tags:['พุทธศิลป์','ศรัทธา','บทความ'], artworkIds:[17,24,29,32] },
  { id:3, title:'รูปทรงมนุษย์กับการทดลองทางประติมากรรม', author:'มานพ ศิลปกุล', excerpt:'จากมือหินสู่รูปทรงนามธรรม ผลงานประติมากรรมที่ท้าทายนิยามของร่างกาย',
    cover:'img/coll-story3.jpg', read:'อ่านราว 7 นาที', date:'3 เม.ย. 2569', tags:['ประติมากรรม','รูปทรงมนุษย์'], artworkIds:[13,26,20] }
];

/* ---------- helpers ---------- */
window.collById = function(id){ return window.COLLECTION.filter(function(w){return w.id===id;})[0]; };

window.collCover = function(w){ return w.cover || window.COLL_TYPE_IMG[w.type] || 'img/coll-14.jpg'; };

/* แกลเลอรี: ใช้ images ของชิ้นถ้ามี · ไม่มีก็แสดง cover รูปเดียว */
window.collGallery = function(w){
  if(w.images && w.images.length) return w.images;
  return [window.collCover(w)];
};

window.collBadgeHTML = function(w){
  var s=window.COLL_SETS[w.set]||{label:w.set,badge:'b-green'};
  return '<span class="badge '+s.badge+'">'+s.label+'</span>';
};

/* การ์ดผลงาน (คลิก = เปิด popup ผ่าน data-coll-id) */
window.collCardHTML = function(w){
  return '<button class="coll-card" type="button" data-coll-id="'+w.id+'">' +
    '<div class="coll-thumb" style="background-image:url(\''+window.collCover(w)+'\')">'+window.collBadgeHTML(w)+'</div>' +
    '<div class="coll-cardbody"><h3>'+w.title+'</h3><p class="meta">'+w.artist+' · '+w.year+'</p>' +
    '<span class="coll-type">'+w.type+'</span></div></button>';
};

/* สไลด์ Highlights */
window.collSlideHTML = function(w){
  return '<button class="coll-slide" type="button" data-coll-id="'+w.id+'">' +
    '<div class="coll-slide-img" style="background-image:url(\''+window.collCover(w)+'\')"></div>' +
    '<div class="coll-slide-cap">'+window.collBadgeHTML(w)+
      '<h3>'+w.title+'</h3><p>ศิลปิน: '+w.artist+' · '+w.type+(w.awards&&w.awards.length?(' · '+w.awards[0]):'')+'</p></div>' +
    '</button>';
};

/* การ์ด Story — ดีไซน์ใหม่ หน้า collection (รูปเต็มกล่อง + overlay) */
window.collStoryCardHTML = function(s){
  var arrow='<svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">'+
    '<path d="M1 7h17M12 1l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  return '<a class="scard" href="blog.html" style="background-image:url(\''+s.cover+'\')">' +
    '<div class="scard-ov"></div>' +
    '<div class="scard-body">' +
      '<h3 class="scard-title">'+s.title+'</h3>' +
      '<p class="scard-ex">'+s.excerpt+'</p>' +
      '<div class="scard-foot">' +
        '<span class="scard-date">'+s.date+'</span>' +
        '<span class="scard-btn">Read the story '+arrow+'</span>' +
      '</div>' +
    '</div>' +
  '</a>';
};

/* การ์ด Story — ดีไซน์เดิม (รูปบน + ข้อความล่าง) ไว้ใช้หน้า blog list */
window.blogCardHTML = function(s){
  var tags=(s.tags||[]).map(function(t){
    return '<a class="story-tag" href="blog.html?tag='+encodeURIComponent(t)+'">'+t+'</a>';
  }).join('');
  return '<div class="story-card">' +
    '<a class="story-media" href="blog.html"><div class="story-img" style="background-image:url(\''+s.cover+'\')"></div></a>' +
    '<p class="story-by">'+(s.author?s.author+' · ':'')+s.date+'</p>' +
    '<a class="story-titlelink" href="blog.html"><h3 class="story-title">'+s.title+'</h3></a>' +
    '<p class="story-ex">'+s.excerpt+'</p>' +
    (tags?'<div class="story-tags">'+tags+'</div>':'') +
  '</div>';
};

/* เนื้อหา popup รายละเอียดผลงาน */
window.collPopupHTML = function(w){
  var g=window.collGallery(w);
  var thumbs=g.map(function(src,i){
    return '<button class="cpop-thumb'+(i===0?' on':'')+'" type="button" data-src="'+src+'" style="background-image:url(\''+src+'\')"></button>';
  }).join('');
  function row(label,val){ return val ? '<div class="cpop-row"><dt>'+label+'</dt><dd>'+val+'</dd></div>' : ''; }
  var awards=(w.awards&&w.awards.length)?w.awards.join('<br>'):'';
  var themes=(w.themes||[]).map(function(t){return '<span class="cpop-chip">'+t+'</span>';}).join('');
  return '<div class="cpop-gallery">' +
      '<div class="cpop-main" id="cpopMain" style="background-image:url(\''+g[0]+'\')"></div>' +
      '<div class="cpop-thumbs">'+thumbs+'</div>' +
    '</div>' +
    '<div class="cpop-info">' +
      window.collBadgeHTML(w) +
      '<h2>'+w.title+'</h2>' +
      '<p class="cpop-artist">'+w.artist+' · '+w.year+'</p>' +
      '<dl class="cpop-rows">' +
        row('ประเภท', w.type) +
        row('เทคนิค', w.technique) +
        row('ขนาด', w.size) +
        row('นิทรรศการ', w.exhibition) +
        row('รางวัลที่ได้รับ', awards) +
      '</dl>' +
      (w.concept?'<div class="cpop-concept"><h4>แนวคิด</h4><p>'+w.concept+'</p></div>':'') +
      (themes?'<div class="cpop-themes">'+themes+'</div>':'') +
    '</div>';
};
