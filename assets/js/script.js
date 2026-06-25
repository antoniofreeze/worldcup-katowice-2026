/* ============================================================
   World Cup Katowice Internationals 2026
   Vanilla JS — i18n (EN/IT/PL), nav, counters, application form
   ============================================================ */

/* ---- CONFIG (edit these) ---------------------------------- */
const CONFIG = {
  applicationEmail: "info@worldcupkatowiceinternationals.eu", // ← set the real inbox for trip applications
  social: {
    facebook: "https://www.facebook.com/katowiceinternationals",
    instagram: "https://www.instagram.com/katowiceinternationals/",
    linkedin: "https://www.linkedin.com/company/katowice-internationals-foundation-garagerasmus4silesia/",
    youtube: "https://www.youtube.com/@katowiceinternationalsgara7043"
  },
  stripeDonationUrl: "", // ← paste your Stripe Payment Link here (Apple Pay, card, PayPal…). Empty = falls back to Franek's page.
  galleryCount: 22
};

/* ---- TRANSLATIONS ----------------------------------------- */
const I18N = {
  en: {
    "a11y.skip":"Skip to content",
    "nav.about":"About","nav.agenda":"Agenda","nav.champions":"Champions","nav.franek":"Franek","nav.rome":"Rome Trip","nav.sponsors":"Sponsors","nav.donate":"Donate",
    "hero.kicker":"Katowice • Poland • 27–28 June 2026",
    "hero.title":"World Cup Katowice Internationals 2026",
    "hero.subtitle":"The annual charity football & eSports World Cup where talent from over 28 countries plays for one cause: integration through sport.",
    "hero.cta_donate":"Donate now","hero.cta_apply":"Win the trip to Rome",
    "about.kicker":"Who we are",
    "about.title":"Football & eSports as a vehicle for integration",
    "about.p1":"Since 2018, the Katowice Internationals World Cup has brought together players from every continent — refugees, migrants, workers, students and locals — around the world's most universal game. When the ball rolls, skin colour, religion and language no longer matter.",
    "about.p2":"Organised by the Katowice Internationals Foundation, the tournament is far more than football and eSports: it is a celebration of diversity, friendship and belonging in the heart of Silesia.",
    "about.p3":"Founded in 2018 by the international community of Silesia and supported by the garageRasmus Foundation, the project has grown into one of the region's most heartfelt celebrations of integration.",
    "about.stat_editions":"Editions","about.stat_countries":"Countries","about.stat_sports":"Disciplines","about.stat_since":"Uniting people since",
    "agenda.kicker":"Two days of football","agenda.title":"Event Agenda",
    "agenda.day1":"Saturday 27 June 2026","agenda.day2":"Sunday 28 June 2026",
    "ag.reg":"Teams Registration","ag.flag":"Flag Parade","ag.opening":"Official Event Opening","ag.matches":"Start of the Matches","ag.end1":"End of the First Day","ag.semi":"Semi-Final","ag.final":"World Cup 2026 Final","ag.ceremony":"Winning Ceremony & Closing",
    "ag.extras":"Extras: Mini-games, Kids Corner, Discussion Panel, Sponsors Stands, Food Corner & more.",
    "champ.kicker":"Hall of fame","champ.title":"Hall of Champions",
    "champ.subtitle":"Eight editions, eight stories. The podium of every Katowice Internationals World Cup.",
    "champ.year":"Year","champ.first":"1st","champ.second":"2nd","champ.third":"3rd",
    "champ.ranking_title":"All-time ranking — Top 10","champ.ranking_note":"Points awarded across all editions since 2018.",
    "nav.gallery":"Gallery","gallery.kicker":"Past editions","gallery.title":"Gallery","gallery.subtitle":"Moments from the previous editions of the Katowice Internationals World Cup.",
    "franek.kicker":"This year, we play for someone special","franek.title":"We play for Franek",
    "franek.p1":"Franek is a brave little boy who cannot walk or talk — but he has the heart of a warrior and a smile that can light up the sky. Born in Katowice at just 28 weeks to a Polish mother and a Welsh father, he has already faced many serious challenges, with more ahead.",
    "franek.p2":"Franek needs constant medical care and physiotherapy to keep developing, and all of it is extremely expensive. Every donation helps give him the better quality of life he so deeply deserves.",
    "franek.cta":"Donate for Franek",
    "franek.note":"Donations are collected by the Katowice Internationals Foundation. 50% of every donation goes to Franek; after the event we publish a full report and transfer his share.",
    "franek.pay":"Secure donation via Stripe — Apple Pay, card, PayPal & more.",
    "franek.alt1":"Franek wearing a football shirt","franek.alt2":"Franek smiling outdoors",
    "rome.kicker":"The prize","rome.title":"Champions fly to Rome",
    "rome.p1":"The winners of World Cup Katowice 2026 earn a place at the Integration Cup 2026 in Ostia – Rome, from 17 to 19 July 2026 — the grand final of the Mundialido, football's biggest tournament for migrant communities.",
    "rome.p2":"The trip is almost entirely covered by the Katowice Internationals Foundation and our main sponsor, Vicenti Pizzerie Krakow. Champions pay only a symbolic fee of 100–200 PLN for a journey worth around €5,000.",
    "rome.cov1":"Team & player registration","rome.cov2":"Return flights (cabin backpack only)","rome.cov3":"Accommodation (Friday & Saturday)","rome.cov4":"Full board: Friday dinner → Sunday breakfast",
    "rome.flights_title":"Flights","rome.out":"Outbound","rome.ret":"Return",
    "apply.title":"Want to go? Tell us who you are.","apply.subtitle":"Fill in the form and tell us why you want to represent us in Rome. Our team reserves the right to select the travelling squad.",
    "apply.name":"Full name","apply.email":"Email","apply.phone":"Phone","apply.team":"Country / Team","apply.role":"Role",
    "apply.role_player":"Player","apply.role_coach":"Coach","apply.role_manager":"Manager","apply.role_other":"Other",
    "apply.motivation":"Why do you want to go to Rome with the team?","apply.fee_ack":"I understand a symbolic participation fee of 100–200 PLN applies.","apply.submit":"Send my application",
    "apply.sending":"Opening your email app…","apply.thanks":"Thank you! Your application is ready to send in your email app.","apply.error":"Please fill in the required fields.",
    "spons.kicker":"With the support of","spons.title":"Sponsors & Partners",
    "spons.foundation":"Organiser of the tournament and driving force behind every charitable cause.",
    "spons.vicenti":"Main sponsor of the champions' trip to Rome. Italian pizza, made in Kraków since 2018.",
    "docs.title":"Official documents","docs.subtitle":"Integration Cup Rome 2026 — official documentation for participating teams & delegations. Organised by Club Italia / UNAR / Mundialido.",
    "docs.en":"English (PDF)","docs.it":"Italiano (PDF)","docs.es":"Español (PDF)",
    "footer.tagline":"Football & eSports for integration. Katowice, Poland.","footer.contact":"Contact","footer.follow":"Follow us","footer.rights":"© 2026 Katowice Internationals Foundation. All rights reserved."
  },
  it: {
    "a11y.skip":"Vai al contenuto",
    "nav.about":"Chi siamo","nav.agenda":"Programma","nav.champions":"Albo d'Oro","nav.franek":"Franek","nav.rome":"Viaggio a Roma","nav.sponsors":"Sponsor","nav.donate":"Dona",
    "hero.kicker":"Katowice • Polonia • 27–28 giugno 2026",
    "hero.title":"World Cup Katowice Internationals 2026",
    "hero.subtitle":"Il torneo benefico annuale di calcio ed eSports dove talenti da oltre 28 Paesi giocano per una causa: l'integrazione attraverso lo sport.",
    "hero.cta_donate":"Dona ora","hero.cta_apply":"Vinci il viaggio a Roma",
    "about.kicker":"Chi siamo",
    "about.title":"Calcio ed eSports come veicolo di integrazione",
    "about.p1":"Dal 2018 il Katowice Internationals World Cup riunisce giocatori da ogni continente — rifugiati, migranti, lavoratori, studenti e gente del posto — attorno al gioco più universale del mondo. Quando il pallone rotola, colore della pelle, religione e lingua non contano più.",
    "about.p2":"Organizzato dalla Katowice Internationals Foundation, il torneo è molto più di calcio ed eSports: è una festa di diversità, amicizia e appartenenza nel cuore della Slesia.",
    "about.p3":"Nato nel 2018 dalla comunità internazionale della Slesia e sostenuto dalla Fondazione garageRasmus, il progetto è diventato una delle celebrazioni dell'integrazione più sentite della regione.",
    "about.stat_editions":"Edizioni","about.stat_countries":"Paesi","about.stat_sports":"Discipline","about.stat_since":"Uniamo le persone dal",
    "agenda.kicker":"Due giorni di calcio","agenda.title":"Programma dell'evento",
    "agenda.day1":"Sabato 27 giugno 2026","agenda.day2":"Domenica 28 giugno 2026",
    "ag.reg":"Registrazione squadre","ag.flag":"Sfilata delle bandiere","ag.opening":"Apertura ufficiale dell'evento","ag.matches":"Inizio delle partite","ag.end1":"Fine della prima giornata","ag.semi":"Semifinale","ag.final":"Finale World Cup 2026","ag.ceremony":"Premiazione e chiusura",
    "ag.extras":"Extra: Mini-giochi, Area bimbi, Panel di discussione, Stand sponsor, Area food e altro.",
    "champ.kicker":"Albo d'oro","champ.title":"Albo d'Oro",
    "champ.subtitle":"Otto edizioni, otto storie. Il podio di ogni Katowice Internationals World Cup.",
    "champ.year":"Anno","champ.first":"1º","champ.second":"2º","champ.third":"3º",
    "champ.ranking_title":"Classifica all-time — Top 10","champ.ranking_note":"Punti assegnati su tutte le edizioni dal 2018.",
    "nav.gallery":"Galleria","gallery.kicker":"Edizioni passate","gallery.title":"Galleria","gallery.subtitle":"Momenti dalle scorse edizioni del Katowice Internationals World Cup.",
    "franek.kicker":"Quest'anno giochiamo per qualcuno di speciale","franek.title":"Giochiamo per Franek",
    "franek.p1":"Franek è un bambino coraggioso che non può camminare né parlare, ma ha il cuore di un guerriero e un sorriso che illumina il cielo. Nato a Katowice a sole 28 settimane, da mamma polacca e papà gallese, ha già affrontato molte sfide difficili, e altre lo aspettano.",
    "franek.p2":"Franek ha bisogno di cure mediche costanti e fisioterapia per continuare a crescere, e tutto questo è estremamente costoso. Ogni donazione aiuta a dargli la qualità di vita migliore che merita.",
    "franek.cta":"Dona per Franek",
    "franek.note":"Le donazioni sono raccolte dalla Katowice Internationals Foundation. Il 50% di ogni donazione va a Franek; a fine evento pubblichiamo un resoconto e trasferiamo la sua quota.",
    "franek.pay":"Donazione sicura con Stripe — Apple Pay, carta, PayPal e altro.",
    "franek.alt1":"Franek con una maglia da calcio","franek.alt2":"Franek sorride all'aperto",
    "rome.kicker":"Il premio","rome.title":"I campioni volano a Roma",
    "rome.p1":"I vincitori del World Cup Katowice 2026 conquistano un posto all'Integration Cup 2026 a Ostia – Roma, dal 17 al 19 luglio 2026: l'atto finale del Mundialido, il più grande torneo di calcio per le comunità migranti.",
    "rome.p2":"Il viaggio è quasi interamente coperto dalla Katowice Internationals Foundation e dal nostro sponsor principale, Vicenti Pizzerie Krakow. I campioni pagano solo una quota simbolica di 100–200 PLN per un viaggio del valore di circa 5.000 €.",
    "rome.cov1":"Iscrizione squadra e giocatori","rome.cov2":"Voli andata/ritorno (solo zaino in cabina)","rome.cov3":"Alloggio (venerdì e sabato)","rome.cov4":"Pensione completa: cena di venerdì → colazione di domenica",
    "rome.flights_title":"Voli","rome.out":"Andata","rome.ret":"Ritorno",
    "apply.title":"Vuoi venire? Raccontaci chi sei.","apply.subtitle":"Compila il modulo e spiega perché vuoi rappresentarci a Roma. Il nostro team si riserva il diritto di scegliere la squadra che partirà.",
    "apply.name":"Nome e cognome","apply.email":"Email","apply.phone":"Telefono","apply.team":"Paese / Squadra","apply.role":"Ruolo",
    "apply.role_player":"Giocatore","apply.role_coach":"Allenatore","apply.role_manager":"Dirigente","apply.role_other":"Altro",
    "apply.motivation":"Perché vuoi andare a Roma con la squadra?","apply.fee_ack":"Capisco che è prevista una quota simbolica di partecipazione di 100–200 PLN.","apply.submit":"Invia la candidatura",
    "apply.sending":"Apertura dell'app email…","apply.thanks":"Grazie! La tua candidatura è pronta per essere inviata dalla tua app email.","apply.error":"Compila i campi obbligatori.",
    "spons.kicker":"Con il sostegno di","spons.title":"Sponsor e Partner",
    "spons.foundation":"Organizzatrice del torneo e motore di ogni causa benefica.",
    "spons.vicenti":"Sponsor principale del viaggio dei campioni a Roma. Pizza italiana, fatta a Cracovia dal 2018.",
    "docs.title":"Documenti ufficiali","docs.subtitle":"Integration Cup Roma 2026 — documentazione ufficiale per le squadre e le delegazioni partecipanti. Organizzata da Club Italia / UNAR / Mundialido.",
    "docs.en":"Inglese (PDF)","docs.it":"Italiano (PDF)","docs.es":"Spagnolo (PDF)",
    "footer.tagline":"Calcio ed eSports per l'integrazione. Katowice, Polonia.","footer.contact":"Contatti","footer.follow":"Seguici","footer.rights":"© 2026 Katowice Internationals Foundation. Tutti i diritti riservati."
  },
  pl: {
    "a11y.skip":"Przejdź do treści",
    "nav.about":"O nas","nav.agenda":"Program","nav.champions":"Mistrzowie","nav.franek":"Franek","nav.rome":"Wyjazd do Rzymu","nav.sponsors":"Sponsorzy","nav.donate":"Wesprzyj",
    "hero.kicker":"Katowice • Polska • 27–28 czerwca 2026",
    "hero.title":"World Cup Katowice Internationals 2026",
    "hero.subtitle":"Coroczny charytatywny turniej piłki nożnej i eSportu, w którym zawodnicy z ponad 28 krajów grają dla jednej sprawy: integracji poprzez sport.",
    "hero.cta_donate":"Wesprzyj teraz","hero.cta_apply":"Wygraj wyjazd do Rzymu",
    "about.kicker":"Kim jesteśmy",
    "about.title":"Piłka nożna i eSport jako narzędzie integracji",
    "about.p1":"Od 2018 roku Katowice Internationals World Cup łączy zawodników z każdego kontynentu — uchodźców, migrantów, pracowników, studentów i mieszkańców — wokół najbardziej uniwersalnej gry świata. Gdy piłka jest w grze, kolor skóry, religia i język przestają mieć znaczenie.",
    "about.p2":"Organizowany przez Katowice Internationals Foundation turniej to znacznie więcej niż piłka nożna i eSport: to święto różnorodności, przyjaźni i przynależności w sercu Śląska.",
    "about.p3":"Założony w 2018 roku przez międzynarodową społeczność Śląska i wspierany przez Fundację garageRasmus projekt stał się jednym z najbardziej poruszających świąt integracji w regionie.",
    "about.stat_editions":"Edycje","about.stat_countries":"Kraje","about.stat_sports":"Dyscypliny","about.stat_since":"Łączymy ludzi od",
    "agenda.kicker":"Dwa dni piłki nożnej","agenda.title":"Program wydarzenia",
    "agenda.day1":"Sobota, 27 czerwca 2026","agenda.day2":"Niedziela, 28 czerwca 2026",
    "ag.reg":"Rejestracja drużyn","ag.flag":"Parada flag","ag.opening":"Oficjalne otwarcie wydarzenia","ag.matches":"Początek meczów","ag.end1":"Koniec pierwszego dnia","ag.semi":"Półfinał","ag.final":"Finał World Cup 2026","ag.ceremony":"Ceremonia wręczenia nagród i zakończenie",
    "ag.extras":"Dodatkowo: mini-gry, kącik dla dzieci, panel dyskusyjny, stoiska sponsorów, strefa gastronomiczna i więcej.",
    "champ.kicker":"Galeria sław","champ.title":"Galeria Mistrzów",
    "champ.subtitle":"Osiem edycji, osiem historii. Podium każdego Katowice Internationals World Cup.",
    "champ.year":"Rok","champ.first":"1.","champ.second":"2.","champ.third":"3.",
    "champ.ranking_title":"Klasyfikacja wszech czasów — Top 10","champ.ranking_note":"Punkty przyznane we wszystkich edycjach od 2018 roku.",
    "nav.gallery":"Galeria","gallery.kicker":"Poprzednie edycje","gallery.title":"Galeria","gallery.subtitle":"Chwile z poprzednich edycji Katowice Internationals World Cup.",
    "franek.kicker":"W tym roku gramy dla kogoś wyjątkowego","franek.title":"Gramy dla Franka",
    "franek.p1":"Franek to dzielny chłopiec, który nie może chodzić ani mówić, ale ma serce wojownika i uśmiech, który rozświetla niebo. Urodził się w Katowicach w zaledwie 28. tygodniu, z mamy Polki i taty Walijczyka, i już zmierzył się z wieloma poważnymi wyzwaniami — kolejne są przed nim.",
    "franek.p2":"Franek potrzebuje stałej opieki medycznej i rehabilitacji, aby się rozwijać, a wszystko to jest bardzo kosztowne. Każda darowizna pomaga zapewnić mu lepszą jakość życia, na którą tak bardzo zasługuje.",
    "franek.cta":"Wesprzyj Franka",
    "franek.note":"Darowizny zbiera Katowice Internationals Foundation. 50% każdej darowizny trafia do Franka; po wydarzeniu publikujemy pełne sprawozdanie i przekazujemy jego część.",
    "franek.pay":"Bezpieczna darowizna przez Stripe — Apple Pay, karta, PayPal i więcej.",
    "franek.alt1":"Franek w koszulce piłkarskiej","franek.alt2":"Uśmiechnięty Franek na zewnątrz",
    "rome.kicker":"Nagroda","rome.title":"Mistrzowie lecą do Rzymu",
    "rome.p1":"Zwycięzcy World Cup Katowice 2026 zdobywają miejsce w Integration Cup 2026 w Ostii – Rzym, od 17 do 19 lipca 2026 — wielkim finale Mundialido, największego turnieju piłkarskiego dla społeczności migrantów.",
    "rome.p2":"Wyjazd jest niemal w całości pokryty przez Katowice Internationals Foundation oraz naszego głównego sponsora, Vicenti Pizzerie Krakow. Mistrzowie płacą jedynie symboliczną opłatę 100–200 PLN za podróż o wartości około 5000 €.",
    "rome.cov1":"Rejestracja drużyny i zawodników","rome.cov2":"Loty w obie strony (tylko plecak podręczny)","rome.cov3":"Zakwaterowanie (piątek i sobota)","rome.cov4":"Pełne wyżywienie: od kolacji w piątek do śniadania w niedzielę",
    "rome.flights_title":"Loty","rome.out":"Wylot","rome.ret":"Powrót",
    "apply.title":"Chcesz jechać? Powiedz nam, kim jesteś.","apply.subtitle":"Wypełnij formularz i napisz, dlaczego chcesz reprezentować nas w Rzymie. Nasz zespół zastrzega sobie prawo wyboru składu wyjazdowego.",
    "apply.name":"Imię i nazwisko","apply.email":"E-mail","apply.phone":"Telefon","apply.team":"Kraj / Drużyna","apply.role":"Rola",
    "apply.role_player":"Zawodnik","apply.role_coach":"Trener","apply.role_manager":"Menedżer","apply.role_other":"Inne",
    "apply.motivation":"Dlaczego chcesz pojechać do Rzymu z drużyną?","apply.fee_ack":"Rozumiem, że obowiązuje symboliczna opłata za udział w wysokości 100–200 PLN.","apply.submit":"Wyślij zgłoszenie",
    "apply.sending":"Otwieranie aplikacji e-mail…","apply.thanks":"Dziękujemy! Twoje zgłoszenie jest gotowe do wysłania w aplikacji e-mail.","apply.error":"Wypełnij wymagane pola.",
    "spons.kicker":"Przy wsparciu","spons.title":"Sponsorzy i Partnerzy",
    "spons.foundation":"Organizator turnieju i siła napędowa każdej akcji charytatywnej.",
    "spons.vicenti":"Główny sponsor wyjazdu mistrzów do Rzymu. Włoska pizza, robiona w Krakowie od 2018 roku.",
    "docs.title":"Dokumenty oficjalne","docs.subtitle":"Integration Cup Rzym 2026 — oficjalna dokumentacja dla uczestniczących drużyn i delegacji. Organizowane przez Club Italia / UNAR / Mundialido.",
    "docs.en":"Angielski (PDF)","docs.it":"Włoski (PDF)","docs.es":"Hiszpański (PDF)",
    "footer.tagline":"Piłka nożna i eSport dla integracji. Katowice, Polska.","footer.contact":"Kontakt","footer.follow":"Obserwuj nas","footer.rights":"© 2026 Katowice Internationals Foundation. Wszelkie prawa zastrzeżone."
  }
};

/* ---- LANGUAGE ---------------------------------------------- */
const langButtons = Array.from(document.querySelectorAll('.lang-switch button'));
function applyLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
    const k = el.getAttribute('data-i18n-alt');
    if (dict[k] != null) el.setAttribute('alt', dict[k]);
  });
  langButtons.forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
  try { localStorage.setItem('wc_lang', lang); } catch(e){}
}
langButtons.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

let initialLang = 'en';
try { const saved = localStorage.getItem('wc_lang'); if (saved && I18N[saved]) initialLang = saved; } catch(e){}
applyLang(initialLang);

/* ---- SOCIAL LINKS ----------------------------------------- */
document.querySelectorAll('[data-config]').forEach(a=>{
  const url = CONFIG.social[a.getAttribute('data-config')];
  if (url) { a.href = url; }
  else { a.addEventListener('click', e => e.preventDefault()); a.setAttribute('aria-disabled','true'); }
});

/* ---- STRIPE DONATE LINKS ---------------------------------- */
document.querySelectorAll('[data-stripe-donate]').forEach(a=>{
  if (CONFIG.stripeDonationUrl) a.href = CONFIG.stripeDonationUrl;
});

/* ---- MOBILE NAV ------------------------------------------- */
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav){
  navToggle.addEventListener('click', ()=>{
    const open = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    mainNav.classList.remove('open'); navToggle.classList.remove('open'); navToggle.setAttribute('aria-expanded','false');
  }));
}

/* ---- COUNTERS --------------------------------------------- */
const counters = document.querySelectorAll('.stat-num[data-count]');
if ('IntersectionObserver' in window && counters.length){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if (!en.isIntersecting) return;
      const el = en.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
      let n = 0; const step = Math.max(1, Math.round(target/40));
      const tick = ()=>{ n += step; if (n >= target){ el.textContent = target + suffix; } else { el.textContent = n + suffix; requestAnimationFrame(tick); } };
      tick(); io.unobserve(el);
    });
  }, { threshold: .4 });
  counters.forEach(c=>io.observe(c));
}

/* ---- GALLERY + LIGHTBOX ----------------------------------- */
(function(){
  const grid = document.getElementById('gallery-grid');
  const lb = document.getElementById('lightbox');
  if (!grid || !lb) return;
  const imgEl = document.getElementById('lb-img');
  const count = CONFIG.galleryCount || 0;
  const srcs = [];
  for (let i = 1; i <= count; i++){
    const n = String(i).padStart(2, '0');
    const src = `assets/img/gallery/gallery-${n}.jpg`;
    srcs.push(src);
    const btn = document.createElement('button');
    btn.className = 'g-item'; btn.type = 'button';
    btn.setAttribute('aria-label', 'Open photo ' + i);
    const img = document.createElement('img');
    img.src = src; img.loading = 'lazy';
    img.alt = 'Katowice Internationals World Cup — photo ' + i;
    btn.appendChild(img);
    btn.addEventListener('click', () => openLb(i - 1));
    grid.appendChild(btn);
  }
  let cur = 0;
  const show = () => { imgEl.src = srcs[cur]; };
  function openLb(i){ cur = i; show(); lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; }
  function closeLb(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; imgEl.src = ''; }
  function move(d){ cur = (cur + d + srcs.length) % srcs.length; show(); }
  document.getElementById('lb-close').addEventListener('click', closeLb);
  document.getElementById('lb-prev').addEventListener('click', () => move(-1));
  document.getElementById('lb-next').addEventListener('click', () => move(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft') move(-1);
    else if (e.key === 'ArrowRight') move(1);
  });
})();

/* ---- APPLICATION FORM (mailto, no backend) ---------------- */
const form = document.getElementById('apply-form');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const lang = document.documentElement.lang || 'en';
    const dict = I18N[lang] || I18N.en;
    const status = document.getElementById('form-status');
    const el = form.elements;
    const data = {
      name: el['name'].value.trim(),
      email: el['email'].value.trim(),
      phone: el['phone'].value.trim(),
      team: el['team'].value.trim(),
      role: el['role'].value,
      motivation: el['motivation'].value.trim(),
      fee: el['fee_ack'].checked
    };
    if (!data.name || !data.email || !data.motivation || !data.fee){
      status.textContent = dict["apply.error"]; status.className = 'form-status err'; return;
    }
    const subject = `Rome Trip application — ${data.name} (${data.team || 'team'})`;
    const body =
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCountry/Team: ${data.team}\nRole: ${data.role}\n\nWhy Rome:\n${data.motivation}\n\nAccepts symbolic fee (100–200 PLN): yes`;
    const href = `mailto:${CONFIG.applicationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = dict["apply.sending"]; status.className = 'form-status ok';
    window.location.href = href;
    setTimeout(()=>{ status.textContent = dict["apply.thanks"]; }, 800);
  });
}

/* ---- FOOTER YEAR (keep brand line current) ---------------- */
