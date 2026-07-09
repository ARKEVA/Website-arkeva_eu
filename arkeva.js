/* ============================================================
   ARKEVA — Design System v2 « Instrument »
   Deeptech industrielle · noir carbone · données vivantes
   ============================================================ */
:root{
  --bg:#04060B; --bg2:#070B14; --bg3:#0A101D;
  --surface:#0D1424; --surface2:#111A2E; --surface3:#16213A;
  --line:rgba(148,170,220,.10); --line2:rgba(148,170,220,.20); --line3:rgba(148,170,220,.32);
  --text:#EDF2FC; --muted:#8E9DBC; --faint:#5A6886;
  --teal:#2BF0C9; --blue:#5B8CFF; --violet:#9C7CFF; --amber:#FFB224; --red:#FF5C5C;
  --teal-dim:rgba(43,240,201,.12); --amber-dim:rgba(255,178,36,.12);
  --grad:linear-gradient(115deg,#2BF0C9 0%,#5B8CFF 55%,#9C7CFF 100%);
  --grad-soft:linear-gradient(115deg,rgba(43,240,201,.14),rgba(91,140,255,.14));
  --maxw:1240px; --r:18px;
  --font-d:'Space Grotesk',sans-serif;
  --font-b:'Inter',system-ui,sans-serif;
  --font-m:'IBM Plex Mono','SF Mono',monospace;
  --ease:cubic-bezier(.22,1,.36,1);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
::selection{background:rgba(43,240,201,.25);color:#fff}
body{
  background:var(--bg);color:var(--text);
  font-family:var(--font-b);line-height:1.65;
  overflow-x:hidden;-webkit-font-smoothing:antialiased;
}
h1,h2,h3,h4,.font-d{font-family:var(--font-d);letter-spacing:-.025em;line-height:1.06}
a{color:inherit;text-decoration:none}
section{position:relative}
img{max-width:100%}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}
.grad-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.muted{color:var(--muted)}
.mono{font-family:var(--font-m)}
.amber{color:var(--amber)}
.teal{color:var(--teal)}

/* Blueprint grid backdrop helper */
.gridbg{position:relative}
.gridbg::before{content:"";position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(148,170,220,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(148,170,220,.045) 1px,transparent 1px);
  background-size:56px 56px;
  -webkit-mask:radial-gradient(ellipse 90% 80% at 50% 0%,#000 30%,transparent 80%);
          mask:radial-gradient(ellipse 90% 80% at 50% 0%,#000 30%,transparent 80%);
}

/* Eyebrow / labels */
.eyebrow{font-family:var(--font-m);font-size:12px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:var(--teal);margin-bottom:20px;display:inline-flex;align-items:center;gap:12px}
.eyebrow::before{content:"";width:30px;height:1px;background:var(--teal);opacity:.7}
.eyebrow .idx{color:var(--faint)}
.datalabel{font-family:var(--font-m);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}

/* ============ PROGRESS BAR ============ */
#pgbar{position:fixed;top:0;left:0;height:2px;background:var(--grad);width:0;z-index:200;transition:width .15s linear}

/* ============ NAV ============ */
header.nav{position:fixed;top:0;left:0;right:0;z-index:100;transition:.4s var(--ease)}
header.nav.scrolled{background:rgba(4,6,11,.72);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
.nav-inner{max-width:var(--maxw);margin:0 auto;padding:18px 28px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.logo{display:flex;align-items:center;gap:11px;font-family:'Sora',var(--font-d);font-weight:800;font-size:23px;letter-spacing:.005em;text-transform:uppercase;
  background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}
.logo .mark{height:30px;width:auto;flex:0 0 auto;object-fit:contain;-webkit-text-fill-color:initial}
.nav-links{display:flex;gap:32px;align-items:center}
.nav-links a{font-size:14px;color:var(--muted);font-weight:500;transition:.25s;position:relative;padding:4px 0}
.nav-links a::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:1px;background:var(--teal);transform:scaleX(0);transform-origin:right;transition:transform .35s var(--ease)}
.nav-links a:hover{color:var(--text)}
.nav-links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav-links a.active{color:var(--text)}
.nav-links a.active::after{transform:scaleX(1)}
.nav-right{display:flex;align-items:center;gap:16px}
.lang-toggle{display:flex;border:1px solid var(--line2);border-radius:30px;overflow:hidden;font-size:12px;font-weight:600;font-family:var(--font-m)}
.lang-toggle button{background:none;border:none;color:var(--muted);padding:6px 12px;cursor:pointer;transition:.25s;font-family:inherit}
.lang-toggle button.active{background:var(--grad);color:#04121a}
.burger{display:none;background:none;border:none;color:var(--text);cursor:pointer;flex-direction:column;gap:5px;padding:6px}
.burger span{width:22px;height:2px;background:var(--text);border-radius:2px;transition:.3s}

/* ============ BUTTONS ============ */
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:14.5px;padding:13px 24px;border-radius:32px;cursor:pointer;border:none;font-family:var(--font-b);transition:.35s var(--ease);white-space:nowrap;position:relative;overflow:hidden}
.btn-primary{background:var(--grad);color:#03141c;box-shadow:0 8px 32px -10px rgba(43,240,201,.55)}
.btn-primary:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 14px 44px -10px rgba(91,140,255,.65)}
.btn-ghost{background:rgba(255,255,255,.04);color:var(--text);border:1px solid var(--line2)}
.btn-ghost:hover{background:rgba(255,255,255,.09);border-color:var(--line3);transform:translateY(-2px)}
.btn-amber{background:linear-gradient(115deg,#FFB224,#FF7A45);color:#1a0d02;box-shadow:0 8px 32px -10px rgba(255,178,36,.5)}
.btn-amber:hover{transform:translateY(-2px) scale(1.02)}

/* ============ SECTIONS ============ */
.sec{padding:120px 0}
.sec-head{max-width:720px;margin-bottom:64px}
.sec-head.center{margin-left:auto;margin-right:auto;text-align:center}
.sec-head.center .eyebrow{justify-content:center}
.sec-head.center .eyebrow::before{display:none}
.sec-head h2{font-size:clamp(32px,4.6vw,56px);font-weight:700;margin-bottom:22px}
.sec-head p{color:var(--muted);font-size:17.5px}
.sec-alt{background:var(--bg2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}

/* ============ REVEAL ============ */
.reveal{opacity:0;transform:translateY(36px);filter:blur(6px);transition:opacity .9s var(--ease),transform .9s var(--ease),filter .9s var(--ease)}
.reveal.in{opacity:1;transform:none;filter:none}
.reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}.reveal.d4{transition-delay:.32s}.reveal.d5{transition-delay:.4s}
@media (prefers-reduced-motion:reduce){.reveal{transition:none;opacity:1;transform:none;filter:none}}

/* ============ CARDS « instrument » ============ */
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:32px;position:relative;overflow:hidden;transition:.45s var(--ease)}
.card:hover{border-color:var(--line2);transform:translateY(-5px);background:var(--surface2)}
.card .ic{width:48px;height:48px;border-radius:12px;background:var(--grad-soft);display:flex;align-items:center;justify-content:center;margin-bottom:20px}
.card h3{font-size:20px;margin-bottom:10px}
.card p{color:var(--muted);font-size:15px}
/* corner ticks */
.ticks::after,.ticks::before{content:"";position:absolute;width:14px;height:14px;border-color:var(--line3);border-style:solid;opacity:0;transition:.4s}
.ticks::before{top:10px;left:10px;border-width:1px 0 0 1px}
.ticks::after{bottom:10px;right:10px;border-width:0 1px 1px 0}
.ticks:hover::before,.ticks:hover::after{opacity:1}

/* ============ MARQUEE ============ */
.marquee{overflow:hidden;-webkit-mask:linear-gradient(90deg,transparent,#fff 12%,#fff 88%,transparent);mask:linear-gradient(90deg,transparent,#fff 12%,#fff 88%,transparent)}
.marquee-track{display:flex;align-items:center;gap:56px;width:max-content;animation:marquee 28s linear infinite}
.marquee-track:hover{animation-play-state:paused}
@keyframes marquee{to{transform:translateX(-50%)}}
.marquee-track img{height:26px;width:auto;filter:brightness(0) invert(1);opacity:.45;transition:.3s;flex-shrink:0}
.marquee-track img:hover{opacity:.95}

/* ============ STAT NUMBERS ============ */
.num-display{font-family:var(--font-d);font-weight:700;line-height:1;background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}

/* ============ FORM ============ */
form{display:grid;gap:14px}
form .row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
form input,form textarea,form select{width:100%;background:rgba(255,255,255,.04);border:1px solid var(--line2);border-radius:12px;padding:14px 16px;color:var(--text);font-family:inherit;font-size:14.5px;transition:.25s}
form input:focus,form textarea:focus,form select:focus{outline:none;border-color:var(--teal);background:var(--teal-dim);box-shadow:0 0 0 3px rgba(43,240,201,.08)}
form select option{background:var(--surface2);color:var(--text)}
form textarea{resize:vertical;min-height:90px}
form button{justify-content:center;width:100%;padding:15px}
.form-note{font-size:12.5px;color:var(--faint);text-align:center}

/* ============ CTA BOX ============ */
.cta{padding:130px 0}
.cta-box{background:linear-gradient(135deg,var(--surface2),var(--surface));border:1px solid var(--line2);border-radius:30px;padding:68px;position:relative;overflow:hidden}
.cta-box::before{content:"";position:absolute;width:560px;height:560px;border-radius:50%;background:var(--grad);filter:blur(130px);opacity:.15;top:-220px;right:-120px;pointer-events:none}
.cta-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;position:relative;z-index:2;align-items:center}
.cta-grid h2{font-size:clamp(28px,4vw,46px);margin-bottom:18px}
.cta-grid p{color:var(--muted);font-size:17px;margin-bottom:26px}
.cta-points{display:grid;gap:12px}
.cta-points div{display:flex;gap:11px;align-items:center;font-size:14.5px;color:var(--muted)}
.cta-points div::before{content:"✓";color:var(--teal);font-weight:700}

/* ============ FOOTER ============ */
footer{border-top:1px solid var(--line);padding:64px 0 40px;background:var(--bg2);position:relative;overflow:hidden}
footer .bigword{position:absolute;bottom:-46px;left:50%;transform:translateX(-50%);font-family:var(--font-d);font-weight:700;font-size:clamp(120px,22vw,300px);letter-spacing:-.04em;color:rgba(148,170,220,.035);white-space:nowrap;pointer-events:none;line-height:1}
.foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:46px;position:relative;z-index:2}
.foot-grid .logo{margin-bottom:16px}
.foot-grid > div > p{color:var(--muted);font-size:14px;max-width:290px}
.foot-col h5{font-family:var(--font-m);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--faint);margin-bottom:18px}
.foot-col a{display:block;color:var(--muted);font-size:14px;margin-bottom:11px;transition:.25s}
.foot-col a:hover{color:var(--teal);transform:translateX(3px)}
.foot-bot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding-top:26px;color:var(--faint);font-size:13px;flex-wrap:wrap;gap:14px;position:relative;z-index:2}

/* ============ PAGE HERO (sous-pages) ============ */
.page-hero{padding:190px 0 90px;position:relative;overflow:hidden}
.page-hero h1{font-size:clamp(38px,6vw,72px);font-weight:700;margin-bottom:24px;max-width:880px}
.page-hero .lead{font-size:clamp(17px,2vw,20px);color:var(--muted);max-width:640px;margin-bottom:36px}
.hero-badge{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid var(--line2);border-radius:30px;padding:7px 16px 7px 9px;font-size:13px;color:var(--muted);margin-bottom:30px;font-family:var(--font-m)}
.hero-badge .dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px rgba(43,240,201,.18);animation:pulse 2s infinite}
@keyframes pulse{50%{box-shadow:0 0 0 9px rgba(43,240,201,0)}}

/* ============ RESPONSIVE ============ */
@media(max-width:980px){
  .nav-inner{padding:16px 20px;gap:14px}
  .logo{flex-shrink:0}
  .nav-links{display:none}
  .burger{display:flex}
  .nav-links.open{display:flex;position:absolute;top:68px;left:16px;right:16px;flex-direction:column;background:var(--surface);border:1px solid var(--line2);border-radius:16px;padding:22px;gap:16px;z-index:99}
  .nav-links.open a{font-size:16px}
  .cta-grid{grid-template-columns:1fr;gap:40px}
  .cta-box{padding:40px 26px}
  form .row{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr 1fr}
  .sec{padding:90px 0}
}
.nav-cta-mobile{display:none}
.nav-links.open .nav-cta-mobile{display:inline-flex;justify-content:center;margin-top:4px;color:#03141c}
.nav-links.open .nav-cta-mobile:hover{color:#03141c}
.nav-links.open .nav-cta-mobile::after{display:none}
@media(max-width:600px){
  .nav-right .btn-primary{display:none}
}
@media(max-width:520px){
  .foot-grid{grid-template-columns:1fr}
  .foot-bot{flex-direction:column;text-align:center}
  .wrap{padding:0 20px}
}
