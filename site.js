/* SUACC mockup — shared nav + footer + interactions (WCAG 2.1 AA aware) */
/* ===== ภาษา (TH/EN) — ?lang=en|th บังคับ + จำใน localStorage · ค่าเริ่มต้น = ไทย ===== */
window.SUACC_LANG = (function(){
  var q = new URLSearchParams(location.search).get('lang'), v = null;
  try{ if(q==='en'||q==='th') localStorage.setItem('suacc-lang', q); v = localStorage.getItem('suacc-lang'); }catch(e){}
  return (q==='en'||q==='th') ? q : (v==='en' ? 'en' : 'th');
})();

(function(){
  const LANG = window.SUACC_LANG;
  const page = (location.pathname.split('/').pop() || 'index.html');
  const A = (href,label,cls='') => `<a class="${cls}" href="${href}">${label}</a>`;
  const isOn = (...f)=> f.includes(page) ? 'active' : '';
  const aria = (...f)=> f.includes(page) ? ' aria-current="page"' : '';

  const CARET = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true"><path d="M5 8.5 L12 15.5 L19 8.5"/></svg>';
  /* What we do detail ใช้ template whatson-detail.html?from=work → ไฮไลต์เมนู About Us แทน What's On */
  const fromWork = page==='whatson-detail.html' && new URLSearchParams(location.search).get('from')==='work';
  const aAbout = fromWork ? 'active' : isOn('about.html','about-who.html','about-people.html','about-portfolio.html','about-news.html');
  const aRead  = isOn('reading.html','ebooks.html','blog.html','stories.html');
  const aWon   = fromWork ? '' : isOn('whatson.html','whatson-detail.html');
  const aColl  = isOn('collection.html','collection-detail.html');

  const NAV = `
  <header class="topnav">
    <div class="bar">
      <a class="logo-link" href="index.html" aria-label="SUACC — สำนักศิลปวัฒนธรรมและการสร้างสรรค์ มหาวิทยาลัยศิลปากร">
        <img class="logo-c" src="img/logo.png" alt="Office of Art Culture and Creativity, Silpakorn University"><img class="logo-w" src="img/logo-white.png" alt="" aria-hidden="true">
      </a>
      <div class="util">
        <button class="search" type="button" aria-label="ค้นหา (Search)" aria-haspopup="dialog" aria-keyshortcuts="Control+K Meta+K /">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
          Search
        </button>
        <div class="langsw" role="group" aria-label="Language / ภาษา">
          <button type="button" data-lang="th" lang="th" aria-label="ภาษาไทย" class="${LANG==='th'?'on':''}" aria-pressed="${LANG==='th'}">TH</button>
          <button type="button" data-lang="en" lang="en" aria-label="English" class="${LANG==='en'?'on':''}" aria-pressed="${LANG==='en'}">EN</button>
        </div>
      </div>
      <button class="burger" type="button" aria-label="เปิด/ปิดเมนู" aria-expanded="false" aria-controls="mainmenu">
        <span></span><span></span><span></span>
      </button>
      <nav class="main" id="mainmenu" aria-label="Main menu">
        <div class="item ${isOn('index.html')}"><a href="index.html"${aria('index.html')}>Home</a></div>
        <div class="item ${aAbout}"><a href="about.html"${aAbout?' aria-current="page"':''}>About Us ${CARET}</a>
          <div class="sub">
            <a href="about.html">About SUACC</a>
            <a href="about-who.html">Vision &amp; Mission</a>
            <a href="about-people.html">Team</a>
            <a href="about-portfolio.html">What We Do</a>
            <a href="about-news.html">News &amp; Announcements</a>
          </div>
        </div>
        <div class="item ${aWon}"><a href="whatson.html"${aWon?' aria-current="page"':''}>What's On</a></div>
        <div class="item ${isOn('around.html')}"><a href="around.html"${aria('around.html')}>What's Around SU</a></div>
        <div class="item ${aColl}"><a href="collection.html"${aColl?' aria-current="page"':''}>Collection</a></div>
        <div class="item ${aRead}"><a href="reading.html"${aRead?' aria-current="page"':''}>Reading Corner ${CARET}</a>
          <div class="sub">
            <a href="reading.html">Overview</a>
            <a href="ebooks.html">E-Books</a>
            <a href="blog.html">Blog</a>
            <a href="stories.html">Stories</a>
          </div>
        </div>
        <div class="item ${isOn('contact.html')}"><a href="contact.html"${aria('contact.html')}>Contact</a></div>
      </nav>
    </div>
  </header>`;

  const FOOT = `
  <footer class="foot2">
    <div class="fwrap">
      <div class="ftop">
        <div class="connect">
          <h2>Connect with us</h2>
          <div class="social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X (Twitter)">𝕏</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Line">L</a>
          </div>
        </div>
        <form class="news" onsubmit="return false">
          <label for="news-email">ไม่พลาด! ข่าวสารสำคัญของ SUACC</label>
          <div class="row">
            <input id="news-email" type="email" placeholder="กรอกอีเมลของคุณ" autocomplete="email">
            <button type="submit">สมัครรับข่าว</button>
          </div>
        </form>
      </div>
    </div>
    <hr class="fdiv">
    <div class="fwrap">
      <div class="fcols">
        <div class="col">
          <img src="img/logo-white.png" alt="SUACC" style="height:84px;margin-bottom:18px">
          <div class="info">
            สำนักศิลปวัฒนธรรมและการสร้างสรรค์<br>แห่งมหาวิทยาลัยศิลปากร<br><br>
            31 ถ.หน้าพระลาน แขวงพระบรมมหาราชวัง<br>เขตพระนคร กรุงเทพฯ 10200<br><br>
            โทร 02 221 3841<br>
            Email : example@gmail.com<br>
            เวลาทำการ: จันทร์–ศุกร์ 08.30–16.30
          </div>
        </div>
        <div class="col">
          <h3><a href="about.html">About Us</a></h3>
          <a href="about.html">About SUACC</a>
          <a href="about-who.html">Vision &amp; Mission</a>
          <a href="about-people.html">Team</a>
          <a href="about-portfolio.html">What We Do</a>
          <a href="about-news.html">News &amp; Announcements</a>
        </div>
        <div class="col">
          <h3><a href="whatson.html">What's On</a></h3>
          <h3 class="mt"><a href="around.html">What's Around SU</a></h3>
          <h3 class="mt"><a href="collection.html">Collection</a></h3>
        </div>
        <div class="col">
          <h3><a href="reading.html">Reading Corner</a></h3>
          <a href="reading.html">Overview</a>
          <a href="ebooks.html">E-Books</a>
          <a href="blog.html">Blog</a>
          <a href="stories.html">Stories</a>
          <h3 class="mt"><a href="contact.html">Contact</a></h3>
        </div>
      </div>
    </div>
    <hr class="fdiv">
    <div class="fwrap">
      <div class="fbottom">
        <span>© 2569 สำนักศิลปวัฒนธรรมและการสร้างสรรค์ แห่งมหาวิทยาลัยศิลปากร</span>
        <span class="flinks">
          <a href="privacy.html">นโยบายความเป็นส่วนตัว</a>
          <a href="terms.html">ข้อกำหนดการใช้งาน</a>
        </span>
      </div>
    </div>
  </footer>`;

  // skip link (2.4.1)
  const skip=document.createElement('a');
  skip.className='skip'; skip.href='#maincontent'; skip.textContent='ข้ามไปยังเนื้อหาหลัก';
  document.body.insertBefore(skip, document.body.firstChild);

  const navEl = document.getElementById('site-nav');
  const footEl = document.getElementById('site-footer');
  if(navEl) navEl.outerHTML = NAV;
  if(footEl) footEl.outerHTML = FOOT;

  // main landmark = first content element after nav (skip-link target)
  const navNow = document.querySelector('.topnav');
  if(navNow){
    let m = navNow.nextElementSibling;
    if(m){ m.id='maincontent'; m.setAttribute('tabindex','-1'); m.setAttribute('role','main'); }
  }

  // mobile hamburger toggle
  (function(){
    const tn=document.querySelector('.topnav');
    if(!tn) return;
    const burger=tn.querySelector('.burger'), menu=tn.querySelector('.main');
    if(!burger||!menu) return;
    function setOpen(open){
      tn.classList.toggle('menu-open',open);
      burger.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',String(open));
    }
    burger.addEventListener('click',()=>setOpen(!tn.classList.contains('menu-open')));
    // ปิดเมนูเมื่อคลิกลิงก์ / กด Esc
    menu.addEventListener('click',e=>{ if(e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') setOpen(false); });
  })();

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // hero video play/pause (มี control ตาม 2.2.2 — วิดีโอจริงต้อง muted autoplay)
  const play = document.querySelector('.hero .play');
  if(play){ let on=true;
    play.setAttribute('aria-pressed','true');
    play.onclick=()=>{on=!on; play.setAttribute('aria-pressed',String(on));
      play.textContent = on ? '❚❚ หยุดวิดีโอ' : '► เล่นวิดีโอ'; };
    play.textContent='❚❚ หยุดวิดีโอ';
  }

  // carousels — keyboard-operable, pausable, respects reduced-motion
  document.querySelectorAll('[data-carousel]').forEach(c=>{
    const track=c.querySelector('.slides'); if(!track) return;
    const slides=track.children.length; let i=0, timer=null;
    c.setAttribute('role','region');
    c.setAttribute('aria-roledescription','แกลเลอรีภาพเลื่อน');
    c.setAttribute('aria-label','ภาพไฮไลต์');
    [...track.children].forEach((s,k)=>{s.setAttribute('role','group');
      s.setAttribute('aria-roledescription','สไลด์');s.setAttribute('aria-label',(k+1)+' จาก '+slides);});
    const dotsBox=c.querySelector('.dots');
    if(dotsBox){for(let k=0;k<slides;k++){const b=document.createElement('button');b.type='button';
      b.setAttribute('aria-label','ไปยังสไลด์ที่ '+(k+1));if(k===0)b.className='on';
      b.onclick=()=>go(k);dotsBox.appendChild(b);}}
    function go(n){i=(n+slides)%slides;track.style.transform=`translateX(-${i*100}%)`;
      if(dotsBox)[...dotsBox.children].forEach((d,k)=>d.className=k===i?'on':'');}
    const prev=c.querySelector('.prev'),next=c.querySelector('.next');
    if(prev){prev.setAttribute('aria-label','สไลด์ก่อนหน้า');prev.onclick=()=>go(i-1);}
    if(next){next.setAttribute('aria-label','สไลด์ถัดไป');next.onclick=()=>go(i+1);}
    const pause=document.createElement('button');pause.type='button';pause.className='cpause';
    function start(){if(timer||reduce)return;timer=setInterval(()=>go(i+1),4500);
      pause.textContent='❚❚ หยุดเลื่อน';pause.setAttribute('aria-pressed','false');}
    function stop(){clearInterval(timer);timer=null;
      pause.textContent='► เล่นเลื่อน';pause.setAttribute('aria-pressed','true');}
    pause.onclick=()=>{timer?stop():start();};
    c.appendChild(pause);
    if(reduce) stop(); else start();
    c.addEventListener('mouseenter',stop); c.addEventListener('mouseleave',()=>{if(!reduce)start();});
  });

  // chip filters — operable by keyboard (visual only)
  document.querySelectorAll('.chips').forEach(box=>{
    box.querySelectorAll('.chip').forEach(c=>{c.setAttribute('role','button');c.setAttribute('tabindex','0');
      c.setAttribute('aria-pressed', c.classList.contains('on')?'true':'false');});
    function sel(c){box.querySelectorAll('.chip').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-pressed','false');});
      c.classList.add('on');c.setAttribute('aria-pressed','true');}
    box.addEventListener('click',e=>{const c=e.target.closest('.chip');if(c)sel(c);});
    box.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('chip')){
      e.preventDefault();sel(e.target);}});
  });
})();

/* ===== Search panel — กดปุ่ม Search / Ctrl+K / ⌘K / "/" เปิดแผงค้นหา
   ค้นทั้งเว็บด้วย search-index.js (โหลดข้อมูลเมื่อเปิดครั้งแรก) · Enter = ไปหน้าผลค้นหาเต็ม search.html?q= ===== */
(function(){
  var btn=document.querySelector('.topnav .search'); if(!btn) return;
  var ICON_SEARCH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>';
  var SUGS=['นิทรรศการ','Workshop','วนิดา พึ่งสุนทร','ภาพพิมพ์','เสวนา','ติดต่อ'];
  var wrap=document.createElement('div');
  wrap.className='sx-overlay'; wrap.hidden=true;
  wrap.innerHTML=
    '<div class="sx-dialog" role="dialog" aria-modal="true" aria-label="ค้นหาทั้งเว็บไซต์">'+
      '<form class="sx-form" role="search" action="search.html">'+ICON_SEARCH+
        '<label for="sxInput" class="sr-only">ค้นหา</label>'+
        '<input id="sxInput" class="sx-input" type="search" name="q" autocomplete="off" placeholder="ค้นหานิทรรศการ กิจกรรม ผลงาน บทความ…" aria-controls="sxBody" aria-describedby="sxStatus">'+
        '<button type="button" class="sx-close" aria-label="ปิดการค้นหา" title="ปิด (Esc)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'+
      '</form>'+
      '<div class="sx-body" id="sxBody"></div>'+
      '<p class="sr-only" id="sxStatus" aria-live="polite"></p>'+
    '</div>';
  document.body.appendChild(wrap);
  var input=wrap.querySelector('.sx-input'), body=wrap.querySelector('.sx-body'), status=wrap.querySelector('#sxStatus'), lastFocus=null, loading=null;

  /* โหลดไฟล์ข้อมูลที่หน้านี้ยังไม่มี (ครั้งเดียว) */
  function load(src){ return new Promise(function(ok){ var sc=document.createElement('script'); sc.src=src; sc.onload=sc.onerror=ok; document.head.appendChild(sc); }); }
  function ready(){
    if(window.SUACCSearch) return Promise.resolve();
    if(loading) return loading;
    var need=[]; if(!window.WHATSON) need.push('whatson-data.js'); if(!window.COLLECTION) need.push('collection-data.js');
    loading=Promise.all(need.map(load)).then(function(){ return load('search-index.js'); });
    return loading;
  }

  function thumb(it){ return it.img ? '<span class="sx-thumb" style="background-image:url(\''+it.img+'\')"></span>' : '<span class="sx-thumb">'+ICON_SEARCH+'</span>'; }
  function idle(){
    body.innerHTML='<p class="sx-hint">คำค้นยอดนิยม</p><div class="sx-sugs">'+SUGS.map(function(w){ return '<button type="button" class="sx-sug">'+w+'</button>'; }).join('')+'</div>';
    status.textContent='';
  }
  function render(){
    var q=input.value.trim(); if(!q){ idle(); return; }
    var S=window.SUACCSearch; if(!S){ body.innerHTML='<p class="sx-empty">กำลังโหลด…</p>'; return; }
    var all=S.search(q), html='', last='';
    /* 8 อันดับแรกตามคะแนน แล้วจัดกลุ่มตามประเภท (หัวกลุ่มไม่ซ้ำ) */
    var order=S.TYPES.map(function(x){return x.k;});
    var top=all.slice(0,8).map(function(it,i){return {it:it,i:i};})
      .sort(function(a,b){ return order.indexOf(a.it.type)-order.indexOf(b.it.type) || a.i-b.i; })
      .map(function(x){return x.it;});
    if(!all.length){
      body.innerHTML='<p class="sx-empty">ไม่พบผลลัพธ์สำหรับ “'+S.esc(q)+'”<br><small>ลองใช้คำอื่น หรือคำที่สั้นลง</small></p>';
      status.textContent='ไม่พบผลลัพธ์'; return;
    }
    top.forEach(function(it){
      if(it.type!==last){ html+='<p class="sx-group">'+S.typeLabel(it.type)+'</p>'; last=it.type; }
      html+='<a class="sx-item" href="'+it.href+'">'+thumb(it)+'<span style="min-width:0"><span class="sx-t">'+S.mark(it.title,q)+'</span><span class="sx-s">'+S.esc(it.sub||'')+'</span></span></a>';
    });
    html+='<a class="sx-all" href="search.html?q='+encodeURIComponent(q)+'">ดูผลการค้นหาทั้งหมด '+all.length+' รายการ →</a>';
    body.innerHTML=html;
    status.textContent='พบ '+all.length+' รายการ';
  }
  function open(){
    if(!wrap.hidden) return;
    lastFocus=document.activeElement; wrap.hidden=false; document.body.style.overflow='hidden';
    btn.setAttribute('aria-expanded','true');
    input.value=''; idle(); input.focus();
    ready().then(render);
  }
  function close(){
    wrap.hidden=true; document.body.style.overflow=''; btn.setAttribute('aria-expanded','false');
    /* คืนโฟกัสไปจุดเดิม — ถ้าเดิมไม่มี (body) ให้กลับไปที่ปุ่ม Search */
    (lastFocus && lastFocus!==document.body && !wrap.contains(lastFocus) ? lastFocus : btn).focus();
  }
  var t; input.addEventListener('input',function(){ clearTimeout(t); t=setTimeout(render,120); });
  btn.addEventListener('click',open);
  wrap.querySelector('.sx-close').addEventListener('click',close);
  wrap.addEventListener('click',function(e){
    if(e.target===wrap){ close(); return; }
    var sg=e.target.closest('.sx-sug'); if(sg){ input.value=sg.textContent; input.focus(); ready().then(render); }
  });
  wrap.querySelector('.sx-form').addEventListener('submit',function(e){
    e.preventDefault(); var q=input.value.trim(); if(!q) return;
    var on=body.querySelector('.sx-item.on'); location.href = on ? on.getAttribute('href') : 'search.html?q='+encodeURIComponent(q);
  });
  document.addEventListener('keydown',function(e){
    var typing=/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName||'')) || e.target.isContentEditable;
    if((e.key==='k'||e.key==='K') && (e.metaKey||e.ctrlKey)){ e.preventDefault(); wrap.hidden?open():close(); return; }
    if(e.key==='/' && !typing && wrap.hidden){ e.preventDefault(); open(); return; }
    if(wrap.hidden) return;
    if(e.key==='Escape'){ e.preventDefault(); close(); return; }
    /* ↑↓ เลือกผลลัพธ์ (Enter เปิดรายการที่เลือก) */
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){
      var items=[].slice.call(body.querySelectorAll('.sx-item')); if(!items.length) return;
      e.preventDefault();
      var i=items.findIndex(function(x){return x.classList.contains('on');});
      i = e.key==='ArrowDown' ? Math.min(i+1,items.length-1) : Math.max(i-1,-1);
      items.forEach(function(x,k){ x.classList.toggle('on',k===i); x.removeAttribute('aria-current'); });
      if(i>=0){
        var it=items[i], top=it.offsetTop, bot=top+it.offsetHeight;   /* เลื่อนเฉพาะในแผง (scrollIntoView จะเลื่อนหน้าด้านหลังด้วย) */
        if(top<body.scrollTop) body.scrollTop=top-8; else if(bot>body.scrollTop+body.clientHeight) body.scrollTop=bot-body.clientHeight+8;
        it.setAttribute('aria-current','true');
      }
      return;
    }
    /* Tab วนอยู่ในแผง (focus trap) */
    if(e.key==='Tab'){
      var f=[].slice.call(wrap.querySelectorAll('input,button,a[href]')).filter(function(x){return x.offsetParent!==null;});
      var first=f[0], lastEl=f[f.length-1];
      if(e.shiftKey && document.activeElement===first){ e.preventDefault(); lastEl.focus(); }
      else if(!e.shiftKey && document.activeElement===lastEl){ e.preventDefault(); first.focus(); }
    }
  });
})();

/* ===== i18n — แปลหน้าเป็นภาษาอังกฤษ (mockup)
   ข้อความไทยทุกจุดบนหน้า (text + alt/title/aria-label/placeholder + <title>) แปลผ่านพจนานุกรม i18n-en.js
   (โหลดเฉพาะตอนเลือก EN) · เนื้อหาที่ JS render ทีหลังแปลด้วย MutationObserver
   สลับ EN→TH = reload หน้า (คืนข้อความต้นฉบับ) · ระบบจริง: ดึงเนื้อหาจาก API ?lang=en (หลังบ้านรองรับแล้ว) ===== */
(function(){
  var TH=/[฀-๿]/, ATTRS=['alt','title','aria-label','placeholder'], D=null, busy=false;
  /* ข้อความที่ประกอบจากตัวแปร (ตัวเลข/คำค้น) */
  var PATTERNS=[
    [/^พบ (\d+) รายการ · แสดง (.+) (\d+) รายการ$/, function(m){ return m[1]+' results · showing '+(t(m[2])||m[2])+' '+m[3]; }],
    [/^พบ (\d+) รายการ$/, function(m){ return m[1]+(m[1]==='1'?' result':' results'); }],
    [/^ดูผลการค้นหาทั้งหมด (\d+) รายการ →$/, function(m){ return 'View all '+m[1]+' results →'; }],
    [/^ไม่พบผลลัพธ์สำหรับ “(.*)”$/, function(m){ return 'No results for “'+m[1]+'”'; }],
    [/^ผลการค้นหา “(.*)”$/, function(m){ return 'Search results for “'+m[1]+'”'; }],
    [/^ค้นหา: (.*) · SUACC$/, function(m){ return 'Search: '+m[1]+' · SUACC'; }],
    [/^(\d+) ผลงาน$/, function(m){ return m[1]+(m[1]==='1'?' work':' works'); }],
    [/^(\d+) กิจกรรม$/, function(m){ return m[1]+(m[1]==='1'?' event':' events'); }],
    [/^(\d+) รายการ$/, function(m){ return m[1]+(m[1]==='1'?' item':' items'); }],
    [/^(\d+) เล่ม$/, function(m){ return m[1]+(m[1]==='1'?' book':' books'); }]
  ];
  function norm(s){ return s.replace(/\s+/g,' ').trim(); }
  function t(s){
    var k=norm(s); if(!k || !TH.test(k)) return null;
    if(D[k]) return D[k];
    for(var i=0;i<PATTERNS.length;i++){ var m=k.match(PATTERNS[i][0]); if(m) return PATTERNS[i][1](m); }
    if(k.indexOf(' · ')>0){ var parts=k.split(' · '), ok=true;   /* ข้อความรวมหลายฟิลด์ "a · b · c" */
      parts=parts.map(function(p){ if(!TH.test(p)) return p; var r=t(p); if(!r) ok=false; return r||p; });
      if(ok) return parts.join(' · ');
    }
    return null;
  }
  function trNode(n){
    if(n.nodeType===3){
      var v=n.nodeValue; if(!TH.test(v)) return;
      var p=n.parentNode; if(p && /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(p.nodeName)) return;
      var r=t(v); if(r) n.nodeValue=v.match(/^\s*/)[0]+r+v.match(/\s*$/)[0];   /* คงช่องว่างหัว/ท้ายเดิม */
      return;
    }
    if(n.nodeType!==1 || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(n.nodeName)) return;
    ATTRS.forEach(function(a){ var v=n.getAttribute(a); if(v && TH.test(v)){ var r=t(v); if(r) n.setAttribute(a,r); } });
    if(n.nodeName==='INPUT' && (n.type==='button'||n.type==='submit') && TH.test(n.value)){ var r2=t(n.value); if(r2) n.value=r2; }
    var w=document.createTreeWalker(n, NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT), x;
    while((x=w.nextNode())){
      if(x.nodeType===3) trNode(x);
      else if(!/^(SCRIPT|STYLE|NOSCRIPT)$/.test(x.nodeName)) ATTRS.forEach(function(a){ var v=x.getAttribute(a); if(v && TH.test(v)){ var r=t(v); if(r) x.setAttribute(a,r); } });
    }
  }
  function translatePage(){
    busy=true;
    document.documentElement.lang='en';
    var tt=t(document.title); if(tt) document.title=tt;
    var md=document.querySelector('meta[name="description"]'); if(md){ var r=t(md.content||''); if(r) md.content=r; }
    trNode(document.body);
    busy=false;
  }
  function loadDict(cb){
    if(window.I18N_EN){ D=window.I18N_EN; cb(); return; }
    var sc=document.createElement('script'); sc.src='i18n-en.js';
    sc.onload=function(){ D=window.I18N_EN||{}; cb(); };
    sc.onerror=function(){ D={}; cb(); };
    document.head.appendChild(sc);
  }
  function startEnglish(){
    document.documentElement.classList.add('i18n-pending');
    loadDict(function(){
      window.SUACC_I18N={ t:function(s){ return t(String(s||'')) || s; } };
      translatePage();
      document.documentElement.classList.remove('i18n-pending');
      new MutationObserver(function(ms){
        if(busy) return; busy=true;
        ms.forEach(function(m){
          if(m.type==='characterData') trNode(m.target);
          else if(m.type==='attributes') trNode(m.target);
          else m.addedNodes.forEach(trNode);
        });
        var tt2=t(document.title); if(tt2) document.title=tt2;
        busy=false;
      }).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
      document.dispatchEvent(new Event('suacc:lang'));   /* ให้หน้า/ค้นหา render ใหม่ด้วยดัชนีภาษาอังกฤษ */
    });
  }

  /* ปุ่ม TH / EN */
  document.addEventListener('click',function(e){
    var b=e.target.closest('.langsw button[data-lang]'); if(!b) return;
    var lang=b.dataset.lang; if(lang===window.SUACC_LANG) return;
    try{ localStorage.setItem('suacc-lang',lang); }catch(err){}
    var u=new URL(location.href); u.searchParams.delete('lang');
    if(lang==='th'){ location.replace(u.href); return; }   /* คืนข้อความไทยต้นฉบับ */
    window.SUACC_LANG='en';
    document.querySelectorAll('.langsw button[data-lang]').forEach(function(x){ var on=x.dataset.lang==='en'; x.classList.toggle('on',on); x.setAttribute('aria-pressed',on); });
    history.replaceState(null,'',u.href);
    startEnglish();
  });

  if(window.SUACC_LANG==='en') startEnglish();
})();

/* ===== เมนูโปร่ง+เบลอ ทับวิดีโอเต็มจอ (หน้าที่มี .hero .video = หน้าแรก)
   บนสุด: แถบเมนูเบลอ ตัวอักษร/โลโก้ขาว · เลื่อนลง (>40px) หรือเปิดเมนูมือถือ: แถบขาวปกติ ===== */
(function(){
  var tn=document.querySelector('.topnav'); if(!tn || !document.querySelector('.hero .video')) return;
  document.body.classList.add('has-overlay-nav');
  tn.classList.add('overlay');
  function upd(){ tn.classList.toggle('solid', window.scrollY>40 || tn.classList.contains('menu-open')); }
  upd();
  window.addEventListener('scroll',upd,{passive:true});
  new MutationObserver(upd).observe(tn,{attributes:true,attributeFilter:['class']});
})();
