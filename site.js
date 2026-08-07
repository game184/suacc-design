/* SUACC mockup — shared nav + footer + interactions (WCAG 2.1 AA aware) */
(function(){
  const page = (location.pathname.split('/').pop() || 'index.html');
  const A = (href,label,cls='') => `<a class="${cls}" href="${href}">${label}</a>`;
  const isOn = (...f)=> f.includes(page) ? 'active' : '';
  const aria = (...f)=> f.includes(page) ? ' aria-current="page"' : '';

  const CARET = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true"><path d="M5 8.5 L12 15.5 L19 8.5"/></svg>';
  const aAbout = isOn('about.html','about-who.html','about-people.html','about-portfolio.html','about-news.html');
  const aRead  = isOn('reading.html','ebooks.html','blog.html','stories.html');
  const aWon   = isOn('whatson.html','whatson-detail.html');
  const aColl  = isOn('collection.html','collection-detail.html');

  const NAV = `
  <header class="topnav">
    <div class="bar">
      <a class="logo-link" href="index.html" aria-label="SUACC — สำนักศิลปวัฒนธรรมและการสร้างสรรค์ มหาวิทยาลัยศิลปากร">
        <img src="img/logo.png" alt="Office of Art Culture and Creativity, Silpakorn University">
      </a>
      <div class="util">
        <button class="search" type="button" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
          Search
        </button>
        <div class="langsw" role="group" aria-label="Language">
          <button class="on" aria-pressed="true">TH</button>
          <button disabled title="Available soon">EN</button>
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
