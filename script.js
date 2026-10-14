/* =====================================================================
   ✏️  EDIT EVERYTHING HERE
   All names, dates, captions and notes live in this one object.
   Change the text between the quotes. Keep the quotes and commas.
   Photos: drop your own files into /images using the same file names
   (or change the file names below to match yours).
   ===================================================================== */
const CONFIG = {
  hisName: "Samay",          // his name (shown on the cover)
  yourName: "Pranjal",       // your name (letter signature, cover)
  age: "25th",
  birthday: "15 October",    // shown on the cover and the Make a Wish page

  passcode: "1205",          // 4 digits
  lock: {
    eyebrow: "a little love note for",
    title: "my favourite person",
    hint: "Hint: a date that matters to us",
    wrongMessages: [
      "Nope, try again cutie",
      "Hmm, not quite, my love",
      "Think harder, birthday boy",
      "So close… or not 😜",
    ],
    rightMessage: "Welcome in, birthday boy ♡",
  },

  music: {
    src: "music/song.mp3",
    missingMessage: "Add our song as music/song.mp3 🎵",
  },

  /* BOOK */
  pageFlipSound: true,       // soft paper rustle on every page turn (true / false)
  pageFlipVolume: 0.35,      // 0 = silent, 1 = loud
  bookPlate: "this book belongs to",  // shown inside the front cover
  closedBookHint: "tap to open",       // under the closed book

  /* 1. COVER */
  cover: {
    eyebrow: "a scrapbook for",
    line1: "Happy",
    line2: "Birthday,",
    photo: "images/IMG_9798.jpg",
    caption: "my favourite face",
    tapPrompt: "tap to open",
    from: "made with love, by Pranjal",
  },

  /* 2. HOW WE MET */
  howWeMet: {
    title: "How We Met",
    photo: "images/IMG_5853.jpg",
    photoCaption: "the day it all started",
    date: "2nd July 2019",
    place: "Smaash arcade, Mumbai",
    story:
      "Who knew a Smaash get away would lead us to become best friendsssss",
  },

  /* 3. TIMELINE (5 or 6 items work best; "text" is an optional short note, leave "" for none) */
  timeline: {
    title: "Our Timeline",
    subtitle: "little moments, big feelings",
    items: [
      { date: "9th November 2021", title: "You felt it first", text: "", photo: "images/C1325375-51D7-4A6E-B819-D724C47C7FA5.jpg" },
      { date: "8th December 2021", title: "And I felt it back", text: "", photo: "images/IMG_8462.jpg" },
      { date: "12th May 2022", title: "We made it official", text: "", photo: "images/IMG_2847.jpg" },
      { date: "4th July 2025", title: "I told my parents", text: "", photo: "images/IMG_5558.jpg" },
      { date: "21st December 2025", title: "You told yours", text: "", photo: "images/IMG_0012.jpg" },
      { date: "26th December 2025", title: "Our families met", text: "", photo: "images/IMG_7585.jpg" },
    ],
  },

  /* 4. PHOTO WALL (6 to 8 photos) */
  photoWall: {
    title: "Photo Wall",
    subtitle: "tap a photo to see it big",
    photos: [
      { src: "images/IMG_7010.jpg",  caption: "October 2022" },
      { src: "images/IMG_7250.jpg", caption: "October 2022" },
      { src: "images/IMG_3805.jpg", caption: "December 2023" },
      { src: "images/IMG_3907.jpg", caption: "December 2023" },
      { src: "images/IMG_1042.jpg", caption: "October 2024" },
      { src: "images/IMG_5089.jpg", caption: "June 2025" },
      { src: "images/IMG_9986.jpg", caption: "December 2025" },
      { src: "images/lp_image.jpg", caption: "♡" },
    ],
  },

  /* 5. 25 REASONS (keep exactly 25) */
  reasons: {
    title: "25 Reasons I Love You",
    subtitle: "one for every year of you",
    shuffleLabel: "shuffle",
    placeholder: "tap a number below, or shuffle ↓",
    allFound: "You found all 25! (there are way more though) ♡",
    list: [
      "You make London to Mumbai feel like next door.",
      "You plan your whole day around our time difference without ever complaining.",
      "Your good morning text is the first thing I look for.",
      "You still make me laugh through the laggiest video calls.",
      "You never let the distance become an excuse.",
      "You remember the tiny things I tell you, even from another country.",
      "You make London feel like a place I already know.",
      "You send me random photos just because they reminded you of me.",
      "You've been my person since that day at Smaash in 2019.",
      "You chose me on 12th May 2022, and you keep choosing me every day.",
      "You were brave enough to tell your family about us.",
      "You make our future feel like a plan, not just a wish.",
      "Your voice notes can fix my worst days.",
      "You're patient with me when missing you makes me cranky.",
      "Every goodbye with you is worth the next hello.",
      "You believe in me more than I believe in myself.",
      "You're my favourite notification.",
      "You're kind, even when nobody is watching.",
      "You make a plate of sushi feel like a celebration.",
      "You'll always be my Moteeee.",
      "You hold my hand even through a screen.",
      "Falling asleep on call with you is my favourite kind of quiet.",
      "You make me want to be a better person.",
      "You turned \"long distance\" into \"so worth it\".",
      "Because 25 looks really good on you, and I can't wait to celebrate the next one in the same city.",
    ],
  },

  /* 6. OUR FAVOURITE THINGS ("note" is optional, leave "" for none) */
  favorites: {
    title: "Our Favourite Things",
    subtitle: "admit one: you & me",
    items: [
      { icon: "🎵", label: "Our song", value: "Befikar", note: "" },
      { icon: "🍣", label: "Our food", value: "Sushi", note: "" },
      { icon: "📍", label: "Our place", value: "Kubo Cafe, Bangalore", note: "" },
      { icon: "🎬", label: "Our movie", value: "Ready", note: "" },
      { icon: "😂", label: "Inside joke", value: "Moteeee", note: "" },
    ],
  },

  /* 7. OPEN WHEN */
  openWhen: {
    title: "Open When…",
    subtitle: "tap an envelope to open it",
    prefix: "Open when ",
    items: [
      {
        label: "you miss me",
        note: [
          "Close your eyes and think of our last hug. I'm still holding on, I promise.",
          "Now go call me, I probably miss you more.",
        ],
      },
      {
        label: "you're stressed",
        note: [
          "Breathe in for four, out for four. You've handled every hard thing so far, and you'll handle this too.",
          "And when it's done, I'm taking you for ice cream.",
        ],
      },
      {
        label: "you can't sleep",
        note: [
          "Imagine me rambling about something random next to you. Boring, right? Perfect for sleeping.",
          "Goodnight, my love. Dream of us.",
        ],
      },
      {
        label: "you need a smile",
        note: [
          "Remember the pigeon? Exactly. You're smiling now.",
          "Also, you're cute. That's just a fact.",
        ],
      },
    ],
  },

  /* 8. THE LETTER (each item in the list is one paragraph) */
  letter: {
    date: "Your 25th birthday",
    greeting: "My love,",
    paragraphs: [
      "Happy 25th birthday, Jahaaaan! No matter how many kilometres sit between us, I wanted to give you something you can open anytime and feel me right there with you.",
      "Since the day we met, you've made my world softer and brighter. You make me laugh when I don't want to, you listen when I ramble, and you love me in all the small, quiet ways that matter most.",
      "I'm so proud of the person you are and the person you're becoming.",
      "Thank you for being my safe place, my best friend and my favourite adventure. I can't wait for all the birthdays still to come, side by side.",
      "I love you, today and every day after.",
    ],
    signOff: "Forever yours,",
    signature: "Pranjal",
  },

  /* 9. MAKE A WISH */
  wish: {
    title: "Make a Wish",
    prompt: "close your eyes, make a wish, then tap the cake (or blow!)",
    micLabel: "blow into mic",
    micListening: "listening… blow!",
    micUnavailable: "No mic here, just tap the cake 🎂",
    relightLabel: "light them again",
    doneMessage: "May all your wishes come true",
  },

  /* 10. FINAL PAGE */
  final: {
    line1: "Happy Birthday,",
    line2: "I love you",
    photo: "images/IMG_4391.jpg",
    caption: "here's to forever",
    message: "Thank you for every single day with you. This is just page one of everything still to come.",
    restartLabel: "read it again",
  },
};

/* =====================================================================
   You shouldn't need to edit anything below this line.
   ===================================================================== */

(() => {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) document.documentElement.classList.add("reduce-motion");

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const getPath = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), CONFIG);
  const vibrate = (ms) => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };

  // localStorage can throw (private mode, blocked storage) — never let that break the page.
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem("scrapbook:" + key);
        return v ? JSON.parse(v) : fallback;
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem("scrapbook:" + key, JSON.stringify(value)); } catch (e) {}
    },
  };

  /* ---------------- toast ---------------- */
  const toastEl = $("#toast");
  let toastTimer;
  function toast(msg, ms = 2600) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), ms);
  }

  /* ---------------- images: lazy + graceful fallback ---------------- */
  function placeholderFor(img) {
    const ph = document.createElement("div");
    ph.className = "ph";
    const file = (img.dataset.src || img.getAttribute("src") || "").split("/").pop();
    ph.textContent = "📷 " + (file || "your photo");
    return ph;
  }
  function loadImg(img) {
    if (!img || !img.dataset.src) return;
    img.decoding = "async";
    img.onload = () => { img.classList.add("is-loaded"); img.removeAttribute("data-src"); };
    img.onerror = () => { img.replaceWith(placeholderFor(img)); };
    img.src = img.dataset.src;
  }
  function hydratePage(page) {
    if (page) $$("img[data-src]", page).forEach(loadImg);
  }
  function lazyImg(src, alt = "") {
    return `<img data-src="${esc(src)}" alt="${esc(alt)}" />`;
  }

  /* ---------------- bind simple text + images from CONFIG ---------------- */
  $$("[data-text]").forEach((el) => {
    const v = getPath(el.dataset.text);
    if (v != null) el.textContent = v;
  });
  $$("img[data-img]").forEach((img) => {
    const src = getPath(img.dataset.img);
    if (src) img.dataset.src = src;
    const cap = img.closest("figure")?.querySelector("figcaption");
    img.alt = cap ? cap.textContent : "";
  });
  document.title = `Happy ${CONFIG.age} Birthday, ${CONFIG.hisName}`;

  /* ---------------- render dynamic sections ---------------- */
  const heartSvg = '<svg aria-hidden="true"><use href="#s-heart"/></svg>';

  // Timeline
  $("#timeline").innerHTML = CONFIG.timeline.items
    .map((it, i) => `
      <li class="tl">
        <span class="tl__dot">${heartSvg}</span>
        <div class="tl__card" style="--r:${i % 2 ? 0.8 : -0.8}deg">
          <figure class="polaroid">${lazyImg(it.photo, it.title)}</figure>
          <div>
            <span class="tl__date">${esc(it.date)}</span>
            <h3 class="tl__title">${esc(it.title)}</h3>
            ${it.text ? `<p class="tl__text">${esc(it.text)}</p>` : ""}
          </div>
        </div>
      </li>`)
    .join("");

  // Photo wall
  const wallRot = [-6, 4, -3, 7, -5, 3, 6, -4];
  const wallDy = [0, 16, -4, 12, 6, -6, 14, 2];
  $("#wall").innerHTML = CONFIG.photoWall.photos
    .map((p, i) => `
      <button class="wall__item" data-photo="${i}" style="--r:${wallRot[i % 8]}deg;--dy:${wallDy[i % 8]}px" aria-label="Open photo: ${esc(p.caption)}">
        <span class="polaroid">
          <span class="wall__pin"></span>
          ${lazyImg(p.src, p.caption)}
          <span class="wall__cap hand">${esc(p.caption)}</span>
        </span>
      </button>`)
    .join("");

  // Favourite things
  const ticketColors = ["var(--blush)", "#fffdf8", "var(--sage)", "var(--butter)"];
  $("#tickets").innerHTML = CONFIG.favorites.items
    .map((t, i) => `
      <div class="ticket" style="--tc:${ticketColors[i % 4]};--r:${i % 2 ? 0.8 : -0.8}deg">
        <div class="ticket__stub">
          <span class="ticket__icon" aria-hidden="true">${esc(t.icon)}</span>
          <span>No.${String(i + 1).padStart(2, "0")}</span>
        </div>
        <div class="ticket__main">
          <p class="ticket__label">${esc(t.label)}</p>
          <p class="ticket__value">${esc(t.value)}</p>
          ${t.note ? `<p class="ticket__note">${esc(t.note)}</p>` : ""}
        </div>
      </div>`)
    .join("");

  /* =====================================================================
     LOCK SCREEN
     ===================================================================== */
  const lockEl = $("#lock");
  const appEl = $("#app");
  const dotsEl = $("#lockDots");
  const lockMsg = $("#lockMsg");
  const dots = $$("span", dotsEl);
  let code = "";
  let lockBusy = false;
  let wrongCount = 0;

  function renderDots() {
    dots.forEach((d, i) => d.classList.toggle("is-filled", i < code.length));
  }
  function pressKey(k) {
    if (lockBusy) return;
    if (k === "del") {
      code = code.slice(0, -1);
    } else if (code.length < 4) {
      code += k;
      vibrate(8);
    }
    renderDots();
    if (code.length === 4) {
      lockBusy = true;
      // Still inside the tap: browsers only allow audio to start from a real tap,
      // so the music and the page-flip sound get unlocked right here.
      unlockAudio();
      if (code === String(CONFIG.passcode)) playMusic({ quiet: true });
      setTimeout(checkCode, 160);
    }
  }
  function checkCode() {
    if (code === String(CONFIG.passcode)) {
      dotsEl.classList.add("is-right");
      lockMsg.textContent = CONFIG.lock.rightMessage;
      vibrate([20, 40, 20]);
      const r = dotsEl.getBoundingClientRect();
      confetti.burst({ x: r.left + r.width / 2, y: r.top + r.height / 2, count: 60, hearts: true, spread: 1.2 });
      setTimeout(unlock, reduceMotion ? 300 : 1100);
    } else {
      const msgs = CONFIG.lock.wrongMessages;
      lockMsg.textContent = msgs[wrongCount++ % msgs.length];
      dotsEl.classList.add("is-wrong");
      vibrate(180);
      setTimeout(() => {
        dotsEl.classList.remove("is-wrong");
        code = "";
        renderDots();
        lockBusy = false;
      }, 520);
    }
  }
  function unlock() {
    // the closed book is already rendered underneath; the lock simply fades away
    appEl.hidden = false;
    lockEl.classList.add("is-leaving");
    setTimeout(() => {
      lockEl.hidden = true;
      coverLeaf.focus({ preventScroll: true });
    }, 600);
  }

  $("#keypad").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-key]");
    if (btn) pressKey(btn.dataset.key);
  });

  /* =====================================================================
     BOOK: real page turns (CSS 3D, no library)
     Each page becomes a "leaf" with a front (the page) and a back (paper,
     doodle, title). Turning rotates the leaf 180° around the spine, so it
     ends up on the left: as the left-hand page of an open book on big
     screens, and as the growing stack of page edges on phones.
     ===================================================================== */
  const book = $("#book");
  const pages = $$(".page", book);
  const total = pages.length;
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const pageCount = $("#pageCount");
  const pageLabel = $("#pageLabel");
  const navDots = $("#navDots");
  navDots.innerHTML = pages.map(() => "<span></span>").join("");
  const navDotEls = $$("span", navDots);

  const FLIP_MS = 900;
  const STAGGER_MS = 90; // gap between leaves when riffling several pages at once
  const backDoodles = ["s-heart-outline", "s-loop", "s-sparkle", "s-arrow", "s-flower", "s-squiggle", "s-star"];

  const inner = document.createElement("div");
  inner.className = "book__inner";
  inner.innerHTML = `
    <div class="book__board" aria-hidden="true"></div>
    <div class="book__edges book__edges--left" aria-hidden="true"></div>
    <div class="book__edges book__edges--right" aria-hidden="true"></div>
    <div class="book__crease" aria-hidden="true"></div>
    <div class="book__sweep" aria-hidden="true"></div>`;
  const sweep = $(".book__sweep", inner);

  const leaves = pages.map((page, i) => {
    const leaf = document.createElement("div");
    leaf.className = "leaf";
    const front = document.createElement("div");
    front.className = "leaf__face leaf__front";
    const back = document.createElement("div");
    back.className = "leaf__face leaf__back";
    back.setAttribute("aria-hidden", "true");
    // Once this leaf is turned it becomes the LEFT page, opposite page i + 1.
    // So its back carries that page's title and number, like a chapter title page.
    const opposite = pages[i + 1];
    back.innerHTML = opposite ? `
      <svg class="leaf__doodle" style="--r:${(i % 2 ? 8 : -8)}deg"><use href="#${backDoodles[i % backDoodles.length]}"/></svg>
      <p class="leaf__title script">${esc(opposite.dataset.title || "")}</p>
      <p class="leaf__num type">— ${i + 2} —</p>` : "";
    front.appendChild(page);
    leaf.append(front, back);
    inner.appendChild(leaf);
    return leaf;
  });

  /* The hard front cover: its own leaf on top of everything. Front = the closed
     book; back = the inside of the cover ("this book belongs to ..."), which
     becomes the left page once the book is open. */
  const coverNum = parseInt(CONFIG.age, 10) || CONFIG.age;
  const coverLeaf = document.createElement("div");
  coverLeaf.className = "leaf leaf--cover";
  coverLeaf.tabIndex = 0;
  coverLeaf.setAttribute("role", "button");
  coverLeaf.setAttribute("aria-label", `Open the book: ${CONFIG.hisName}, ${coverNum}`);
  coverLeaf.innerHTML = `
    <div class="leaf__face leaf__front hardcover">
      <div class="hardcover__frame">
        <svg class="hardcover__heart" aria-hidden="true"><use href="#s-heart"/></svg>
        <p class="hardcover__name gold script">${esc(CONFIG.hisName)}</p>
        <span class="hardcover__rule" aria-hidden="true"></span>
        <p class="hardcover__num gold">${esc(coverNum)}</p>
      </div>
    </div>
    <div class="leaf__face leaf__back endpaper" aria-hidden="true">
      <div class="book__plate">
        <span class="type">${esc(CONFIG.bookPlate)}</span>
        <span class="script">${esc(CONFIG.hisName)}</span>
        <svg><use href="#s-heart"/></svg>
      </div>
    </div>`;
  inner.appendChild(coverLeaf);
  inner.classList.add("is-closed"); // the book starts closed
  book.appendChild(inner);

  const COVER_MS = 1200;
  let current = 0;
  let flipping = false;
  let bookOpen = false;

  function layoutLeaves(moving = new Set()) {
    const lo = Math.min(...[current, ...moving]) - 2;
    const hi = Math.max(...[current, ...moving]) + 1;
    leaves.forEach((leaf, i) => {
      const turned = i < current;
      if (!moving.has(leaf)) {
        leaf.classList.toggle("is-turned", turned);
        // turned stack: newest on top. unturned stack: lowest page number on top.
        leaf.style.zIndex = turned ? i + 2 : total * 2 - i;
      }
      leaf.classList.toggle("is-far", !moving.has(leaf) && (i < lo || i > hi));
    });
    // page-edge stacks: thicker on the left as he reads on, thinner as he goes back
    inner.style.setProperty("--el", Math.min(current * 1.6, 18) + "px");
    inner.style.setProperty("--er", Math.min((total - 1 - current) * 1.2, 12) + "px");
    inner.classList.toggle("is-opened", current > 0);
    // front cover: closed = on top of the right-hand pile; open = bottom of the left pile
    if (!coverLeaf.classList.contains("is-moving")) {
      coverLeaf.classList.toggle("is-turned", bookOpen);
      coverLeaf.style.zIndex = bookOpen ? 1 : total * 2 + 5;
    }
  }

  function updateChrome() {
    pageCount.textContent = `${current + 1} / ${total}`;
    pageLabel.textContent = pages[current].dataset.title || "";
    navDotEls.forEach((d, i) => d.classList.toggle("is-on", i === current));
    prevBtn.disabled = !bookOpen; // on page 1, "back" closes the book
    prevBtn.setAttribute("aria-label", bookOpen && current === 0 ? "Close the book" : "Previous page");
    nextBtn.disabled = current === total - 1;
    leaves.forEach((leaf, i) => {
      const hide = !bookOpen || i !== current;
      leaf.inert = hide;
      leaf.setAttribute("aria-hidden", hide);
    });
    coverLeaf.inert = bookOpen;
    appEl.classList.toggle("is-closed", !bookOpen);
    // load images for this page and its neighbours only
    [current - 1, current, current + 1].forEach((i) => hydratePage(pages[i]));
  }

  /* Open / close the hard cover: swings 180° around the spine; on big screens
     the whole book also slides so the open spread ends up centred. */
  function swingCover(open) {
    if (flipping || bookOpen === open || (!open && current !== 0)) return;
    flipping = true;
    bookOpen = open;
    stopMic();
    paperSound();
    if (!open) appEl.classList.add("is-closed"); // hide arrows/counter/dots right away
    appEl.classList.add("is-swinging");          // hide "tap to open" while the cover moves
    inner.classList.toggle("is-closed", !open);   // starts the slide

    const done = () => {
      coverLeaf.classList.remove("is-moving", "cover-opening", "cover-closing");
      appEl.classList.remove("is-swinging");
      layoutLeaves();
      updateChrome();                              // shows arrows/counter/dots after opening
      flipping = false;
      if (!open) coverLeaf.focus({ preventScroll: true });
    };

    if (reduceMotion) {
      // simple fade instead of the 3D swing
      layoutLeaves();
      const shown = open ? leaves[0] : coverLeaf;
      const fade = shown.animate ? shown.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: "ease" }) : null;
      fade ? (fade.onfinish = done) : done();
      return;
    }

    coverLeaf.classList.remove("is-turned");
    coverLeaf.style.zIndex = 3000;
    coverLeaf.classList.add("is-moving", open ? "cover-opening" : "cover-closing");
    let finished = false;
    const finish = () => { if (!finished) { finished = true; coverLeaf.removeEventListener("animationend", onEnd); done(); } };
    const onEnd = (e) => { if (e.target === coverLeaf) finish(); };
    coverLeaf.addEventListener("animationend", onEnd);
    setTimeout(finish, COVER_MS + 400); // safety net
  }
  const openBook = () => swingCover(true);
  const closeBook = () => swingCover(false);
  coverLeaf.addEventListener("click", () => { if (!bookOpen) openBook(); });
  coverLeaf.addEventListener("keydown", (e) => {
    if (!bookOpen && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openBook(); }
  });

  function goTo(to, instant = false) {
    if (to < 0 || to >= total || flipping) return; // one flip at a time
    if (!bookOpen && !instant) return;
    if (to === current && !instant) return;
    stopMic();
    hydratePage(pages[to]);

    if (instant || to === current) {
      current = to;
      layoutLeaves();
      updateChrome();
      return;
    }

    const forward = to > current;
    // leaves that physically turn: forward = the ones we pass; back = the ones we bring back
    const movers = forward
      ? leaves.slice(current, to)
      : leaves.slice(to, current).reverse();

    flipping = true;
    current = to;
    updateChrome();

    if (reduceMotion) {
      // gentle cross-fade, no 3D
      layoutLeaves();
      const shown = leaves[to];
      const fade = shown.animate ? shown.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: "ease" }) : null;
      const done = () => { flipping = false; };
      fade ? (fade.onfinish = done) : done();
      return;
    }

    const movingSet = new Set(movers);
    movers.forEach((leaf, k) => {
      const i = leaves.indexOf(leaf);
      // Before it lifts, a leaf keeps its place in its pile (right pile: lowest page on
      // top; left pile: highest page on top). Once it passes the spine it lands on top
      // of whatever has already landed.
      leaf.style.zIndex = 1000 + (forward ? total - i : i);
      setTimeout(() => { if (leaf.classList.contains("is-moving")) leaf.style.zIndex = 2000 + k; },
        k * STAGGER_MS + FLIP_MS / 2);
      leaf.style.setProperty("--delay", k * STAGGER_MS + "ms");
      leaf.classList.remove("turn-fwd", "turn-back");
      leaf.classList.add("is-moving", forward ? "turn-fwd" : "turn-back");
      if (k < 4) setTimeout(paperSound, k * STAGGER_MS);
    });
    layoutLeaves(movingSet);

    sweep.classList.remove("sweep-fwd", "sweep-back");
    void sweep.offsetWidth;
    sweep.classList.add(forward ? "sweep-fwd" : "sweep-back");

    let left = movers.length;
    let finished = false;
    const finishAll = () => {
      if (finished) return;
      finished = true;
      movers.forEach((leaf) => leaf.classList.remove("is-moving", "turn-fwd", "turn-back"));
      sweep.classList.remove("sweep-fwd", "sweep-back");
      layoutLeaves();
      flipping = false;
    };
    movers.forEach((leaf) => {
      const onEnd = (e) => {
        if (e.target !== leaf) return;
        leaf.removeEventListener("animationend", onEnd);
        // lock the final position immediately so nothing snaps back
        leaf.classList.toggle("is-turned", forward);
        if (--left === 0) finishAll();
      };
      leaf.addEventListener("animationend", onEnd);
    });
    setTimeout(finishAll, FLIP_MS + STAGGER_MS * movers.length + 400); // safety net
  }

  /* soft paper rustle, synthesised (no audio file needed) */
  let audioCtx = null;
  let noiseBuf = null;
  function unlockAudio() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
    } catch (e) {}
  }
  function paperSound() {
    if (!CONFIG.pageFlipSound || !audioCtx || audioCtx.state !== "running") return;
    try {
      const ctx = audioCtx;
      const dur = 0.42;
      if (!noiseBuf) {
        noiseBuf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
        const d = noiseBuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) {
          // crinkly noise: mostly soft, with the odd sharper crackle
          d[i] = (Math.random() * 2 - 1) * (Math.random() < 0.015 ? 1 : 0.35);
        }
      }
      const t = ctx.currentTime;
      const src = ctx.createBufferSource();
      src.buffer = noiseBuf;
      src.playbackRate.value = 0.9 + Math.random() * 0.25;
      const band = ctx.createBiquadFilter();
      band.type = "bandpass";
      band.Q.value = 0.7;
      band.frequency.setValueAtTime(4200, t);
      band.frequency.exponentialRampToValueAtTime(1300, t + dur);
      const gain = ctx.createGain();
      const vol = Math.max(0, Math.min(1, +CONFIG.pageFlipVolume || 0)) * 0.5;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(vol * 0.55, t + 0.05);
      gain.gain.linearRampToValueAtTime(vol * 0.25, t + 0.2);
      gain.gain.linearRampToValueAtTime(vol, t + 0.3);   // the "flap" as it lands
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(band).connect(gain).connect(ctx.destination);
      src.start(t);
      src.stop(t + dur);
    } catch (e) {}
  }
  // any later tap also (re)unlocks audio, e.g. on iOS after the app was backgrounded
  document.addEventListener("pointerdown", unlockAudio, { passive: true });

  const next = () => (bookOpen ? goTo(current + 1) : openBook());
  const prev = () => (bookOpen && current === 0 ? closeBook() : goTo(current - 1));
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  $("#coverOpen").addEventListener("click", next);
  // tapping anywhere on the cover also opens the book
  pages[0].addEventListener("click", (e) => { if (!e.target.closest("button")) next(); });
  $("#restartBtn").addEventListener("click", () => {
    $$(".page__scroll", book).forEach((s) => (s.scrollTop = 0));
    goTo(0);
  });

  /* ---------- swipe (pointer events, ignores vertical scrolling) ---------- */
  function addSwipe(el, onLeft, onRight) {
    let sx = 0, sy = 0, st = 0, tracking = false;
    let swallowClick = false;
    el.addEventListener("pointerdown", (e) => {
      if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0)) return;
      tracking = true;
      swallowClick = false;
      sx = e.clientX; sy = e.clientY; st = performance.now();
    });
    el.addEventListener("pointerup", (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      const fast = performance.now() - st < 300;
      if ((Math.abs(dx) > 50 || (fast && Math.abs(dx) > 30)) && Math.abs(dx) > Math.abs(dy) * 1.3) {
        swallowClick = true;
        dx < 0 ? onLeft() : onRight();
      }
    });
    el.addEventListener("pointercancel", () => { tracking = false; });
    // a swipe shouldn't also count as a tap on whatever was under the finger
    el.addEventListener("click", (e) => {
      if (swallowClick) { e.stopPropagation(); e.preventDefault(); swallowClick = false; }
    }, true);
  }
  addSwipe(book, next, prev);

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", (e) => {
    if (!lockEl.hidden && !lockEl.classList.contains("is-leaving")) {
      if (/^[0-9]$/.test(e.key)) pressKey(e.key);
      else if (e.key === "Backspace") pressKey("del");
      return;
    }
    if (!lightbox.hidden) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") stepLightbox(1);
      else if (e.key === "ArrowLeft") stepLightbox(-1);
      return;
    }
    if (!noteModal.hidden) {
      if (e.key === "Escape") closeNote();
      return;
    }
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });

  /* =====================================================================
     4. PHOTO WALL LIGHTBOX
     ===================================================================== */
  const lightbox = $("#lightbox");
  const lbCard = $(".lightbox__card", lightbox);
  const lbCap = $("#lbCap");
  let lbIndex = 0;
  let lastFocus = null;

  function showLightboxPhoto(i) {
    const photos = CONFIG.photoWall.photos;
    lbIndex = (i + photos.length) % photos.length;
    const p = photos[lbIndex];
    // rebuild the <img> each time so a missing file can swap to a placeholder cleanly
    const old = lbCard.querySelector("img, .ph");
    const img = document.createElement("img");
    img.id = "lbImg";
    img.alt = p.caption;
    img.onerror = () => img.replaceWith(placeholderFor(img));
    img.src = p.src;
    old.replaceWith(img);
    lbCap.textContent = p.caption;
  }
  function openLightbox(i) {
    lastFocus = document.activeElement;
    showLightboxPhoto(i);
    lightbox.hidden = false;
    $("#lbClose").focus({ preventScroll: true });
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lastFocus && lastFocus.focus({ preventScroll: true });
  }
  function stepLightbox(d) { showLightboxPhoto(lbIndex + d); }

  $("#wall").addEventListener("click", (e) => {
    const item = e.target.closest("[data-photo]");
    if (item) openLightbox(+item.dataset.photo);
  });
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
  $("#lbNext").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  addSwipe(lightbox, () => stepLightbox(1), () => stepLightbox(-1));

  /* =====================================================================
     5. 25 REASONS
     ===================================================================== */
  const reasonsEl = $("#reasons");
  const reasonViewer = $("#reasonViewer");
  const reasonNum = $("#reasonNum");
  const reasonText = $("#reasonText");
  const reasonCount = $("#reasonCount");
  const reasonList = CONFIG.reasons.list;
  const readReasons = new Set(store.get("reasons", []));
  let celebratedAll = readReasons.size >= reasonList.length;

  reasonsEl.innerHTML = reasonList
    .map((_, i) => {
      const r = ((i * 37) % 7) - 3; // deterministic little tilt
      return `<button class="reason${readReasons.has(i) ? " is-read" : ""}" data-reason="${i}" style="--r:${r}deg" aria-label="Reason ${i + 1}">${i + 1}</button>`;
    })
    .join("");
  reasonText.textContent = CONFIG.reasons.placeholder;

  function updateReasonCount() {
    reasonCount.textContent = `${readReasons.size} / ${reasonList.length} found`;
  }
  function showReason(i) {
    readReasons.add(i);
    store.set("reasons", [...readReasons]);
    $$(".reason", reasonsEl).forEach((b, j) => {
      b.classList.toggle("is-active", j === i);
      if (readReasons.has(j)) b.classList.add("is-read");
    });
    reasonNum.textContent = `Reason no. ${i + 1}`;
    reasonText.textContent = reasonList[i];
    reasonViewer.classList.remove("is-new");
    void reasonViewer.offsetWidth; // restart animation
    reasonViewer.classList.add("is-new");
    updateReasonCount();
    if (!celebratedAll && readReasons.size >= reasonList.length) {
      celebratedAll = true;
      toast(CONFIG.reasons.allFound, 3500);
      confetti.burst({ count: 90, hearts: true });
    }
  }
  reasonsEl.addEventListener("click", (e) => {
    const b = e.target.closest("[data-reason]");
    if (!b) return;
    showReason(+b.dataset.reason);
    reasonViewer.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
  });
  $("#reasonShuffle").addEventListener("click", () => {
    const unread = reasonList.map((_, i) => i).filter((i) => !readReasons.has(i));
    const pool = unread.length ? unread : reasonList.map((_, i) => i);
    showReason(pool[Math.floor(Math.random() * pool.length)]);
  });
  updateReasonCount();

  /* =====================================================================
     7. OPEN WHEN (envelopes + note modal)
     ===================================================================== */
  const envColors = ["var(--kraft)", "#efc4be", "var(--sage)", "var(--butter)"];
  const openedEnv = new Set(store.get("envelopes", []));
  $("#envelopes").innerHTML = CONFIG.openWhen.items
    .map((it, i) => `
      <button class="env-wrap${openedEnv.has(i) ? " is-open" : ""}" data-env="${i}" style="--ec:${envColors[i % 4]};--r:${[-3, 2, 3, -2][i % 4]}deg">
        <span class="env" aria-hidden="true">
          <span class="env__back"></span>
          <span class="env__letter"></span>
          <span class="env__front"></span>
          <span class="env__flap"></span>
          <span class="env__seal">${heartSvg}</span>
        </span>
        <span class="env__label"><small>${esc(CONFIG.openWhen.prefix)}</small>${esc(it.label)}</span>
      </button>`)
    .join("");

  const noteModal = $("#noteModal");
  function openNote(title, paragraphs) {
    lastFocus = document.activeElement;
    $("#noteTitle").textContent = title;
    $("#noteBody").innerHTML = [].concat(paragraphs).map((p) => `<p>${esc(p)}</p>`).join("");
    noteModal.hidden = false;
    $(".note-modal__paper", noteModal).scrollTop = 0;
    $("#noteClose").focus({ preventScroll: true });
  }
  function closeNote() {
    noteModal.hidden = true;
    lastFocus && lastFocus.focus({ preventScroll: true });
  }
  $("#noteClose").addEventListener("click", closeNote);
  noteModal.addEventListener("click", (e) => { if (e.target === noteModal) closeNote(); });

  $("#envelopes").addEventListener("click", (e) => {
    const env = e.target.closest("[data-env]");
    if (!env) return;
    const i = +env.dataset.env;
    const it = CONFIG.openWhen.items[i];
    const wasOpen = env.classList.contains("is-open");
    env.classList.add("is-open");
    openedEnv.add(i);
    store.set("envelopes", [...openedEnv]);
    setTimeout(() => openNote(CONFIG.openWhen.prefix + it.label, it.note), wasOpen || reduceMotion ? 0 : 750);
  });

  /* =====================================================================
     8. LETTER
     ===================================================================== */
  $("#letterBody").innerHTML = CONFIG.letter.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");

  /* =====================================================================
     9. MAKE A WISH (tap, or blow into the mic)
     ===================================================================== */
  const cake = $("#cake");
  const micBtn = $("#micBtn");
  const micLabel = $("span", micBtn);
  const relightBtn = $("#relightBtn");
  const wishDone = $("#wishDone");
  const wishPrompt = $("#wishPrompt");
  let mic = null; // { stream, ctx, raf }

  function blowOut() {
    if (cake.classList.contains("is-out")) {
      cake.classList.remove("is-wobble");
      void cake.offsetWidth;
      cake.classList.add("is-wobble");
      return;
    }
    stopMic();
    cake.classList.add("is-out");
    cake.setAttribute("aria-label", "Candles blown out");
    wishPrompt.hidden = true;
    wishDone.hidden = false;
    relightBtn.hidden = false;
    micBtn.hidden = true;
    vibrate([30, 50, 30]);
    const r = cake.getBoundingClientRect();
    setTimeout(() => {
      confetti.burst({ x: r.left + r.width / 2, y: r.top + 40, count: 140, spread: 1.6 });
      confetti.burst({ count: 60, hearts: true });
    }, 250);
  }
  function relight() {
    cake.classList.remove("is-out");
    cake.setAttribute("aria-label", "Tap to blow out the candles");
    wishPrompt.hidden = false;
    wishDone.hidden = true;
    relightBtn.hidden = true;
    micBtn.hidden = false;
  }
  async function startMic() {
    if (mic) { stopMic(); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !(window.AudioContext || window.webkitAudioContext)) {
      toast(CONFIG.wish.micUnavailable);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false } });
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const src = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      src.connect(analyser);
      const buf = new Uint8Array(analyser.fftSize);
      mic = { stream, ctx, raf: 0 };
      micBtn.classList.add("is-listening");
      micLabel.textContent = CONFIG.wish.micListening;
      let loud = 0;
      const tick = () => {
        analyser.getByteTimeDomainData(buf);
        let sum = 0;
        for (let i = 0; i < buf.length; i++) { const v = (buf[i] - 128) / 128; sum += v * v; }
        const rms = Math.sqrt(sum / buf.length);
        loud = rms > 0.16 ? loud + 1 : Math.max(0, loud - 1);
        if (loud > 10) { blowOut(); return; } // ~0.2s of sustained blowing
        if (mic) mic.raf = requestAnimationFrame(tick);
      };
      tick();
    } catch (err) {
      toast(CONFIG.wish.micUnavailable);
      stopMic();
    }
  }
  function stopMic() {
    if (!mic) return;
    cancelAnimationFrame(mic.raf);
    mic.stream.getTracks().forEach((t) => t.stop());
    mic.ctx.close && mic.ctx.close();
    mic = null;
    micBtn.classList.remove("is-listening");
    micLabel.textContent = CONFIG.wish.micLabel;
  }
  cake.addEventListener("click", blowOut);
  micBtn.addEventListener("click", startMic);
  relightBtn.addEventListener("click", relight);

  /* =====================================================================
     MUSIC (never autoplays)
     ===================================================================== */
  const audio = $("#bgMusic");
  const musicBtn = $("#musicBtn");
  const musicUse = $("use", musicBtn);
  function setMusicUI(playing) {
    musicBtn.setAttribute("aria-pressed", playing);
    musicBtn.setAttribute("aria-label", playing ? "Pause music" : "Play music");
    musicUse.setAttribute("href", playing ? "#s-pause" : "#s-music");
  }
  let musicQuiet = false;
  // quiet = started automatically after the passcode: if the song file is missing,
  // fail silently instead of showing a message during the surprise
  function playMusic({ quiet = false } = {}) {
    musicQuiet = quiet;
    if (!audio.getAttribute("src")) audio.src = CONFIG.music.src;
    const p = audio.play();
    if (p && p.then) {
      p.then(() => setMusicUI(true)).catch(() => {
        setMusicUI(false);
        if (!quiet) toast(CONFIG.music.missingMessage);
      });
    } else {
      setMusicUI(!audio.paused);
    }
  }
  musicBtn.addEventListener("click", () => {
    if (audio.paused) {
      playMusic();
    } else {
      audio.pause();
      setMusicUI(false);
    }
  });
  audio.addEventListener("error", () => {
    setMusicUI(false);
    if (!musicQuiet) toast(CONFIG.music.missingMessage);
  });

  /* =====================================================================
     FLOATING HEARTS (light: 10 elements, CSS-only animation)
     ===================================================================== */
  if (!reduceMotion) {
    const colors = ["#e8a3a0", "#cc5e52", "#f4c86a", "#faf4e9"];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
      const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttribute("class", "floaty");
      s.innerHTML = `<use href="#${i % 3 === 2 ? "s-sparkle" : "s-heart"}"/>`;
      s.style.cssText = [
        `--x:${Math.round(Math.random() * 92)}%`,
        `--s:${10 + Math.round(Math.random() * 12)}px`,
        `--d:${14 + Math.random() * 12}s`,
        `--delay:${-Math.random() * 20}s`,
        `--drift:${Math.round(Math.random() * 60 - 30)}px`,
        `--o:${(0.2 + Math.random() * 0.25).toFixed(2)}`,
        `--c:${colors[i % colors.length]}`,
      ].join(";");
      frag.appendChild(s);
    }
    $("#floaties").appendChild(frag);
  }

  /* =====================================================================
     CONFETTI (tiny canvas engine — no library)
     ===================================================================== */
  const confetti = (() => {
    const canvas = $("#confetti");
    const ctx = canvas.getContext("2d");
    const colors = ["#cc5e52", "#722525", "#f4c86a", "#e8a3a0", "#faf4e9", "#8fc3d9"];
    let parts = [];
    let raf = 0;
    let w = 0, h = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function heart(x, y, s) {
      ctx.beginPath();
      ctx.moveTo(x, y + s * 0.3);
      ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.3);
      ctx.bezierCurveTo(x - s * 0.5, y + s * 0.6, x, y + s * 0.8, x, y + s);
      ctx.bezierCurveTo(x, y + s * 0.8, x + s * 0.5, y + s * 0.6, x + s * 0.5, y + s * 0.3);
      ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.3);
      ctx.fill();
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      parts = parts.filter((p) => p.life > 0 && p.y < h + 30);
      for (const p of parts) {
        p.vy += 0.14; p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 1;
        ctx.save();
        ctx.globalAlpha = Math.min(1, p.life / 40);
        ctx.fillStyle = p.c;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        if (p.heart) heart(0, -p.s / 2, p.s);
        else ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        ctx.restore();
      }
      if (parts.length) raf = requestAnimationFrame(frame);
      else { raf = 0; ctx.clearRect(0, 0, w, h); }
    }
    function burst({ x, y, count = 80, hearts = false, spread = 1 } = {}) {
      if (reduceMotion) return;
      if (!w) resize();
      x = x ?? w / 2;
      y = y ?? h * 0.35;
      for (let i = 0; i < count; i++) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * spread;
        const v = 4 + Math.random() * 7;
        parts.push({
          x, y,
          vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          s: hearts && Math.random() < 0.6 ? 10 + Math.random() * 8 : 6 + Math.random() * 6,
          heart: hearts && Math.random() < 0.6,
          rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
          c: colors[(Math.random() * colors.length) | 0],
          life: 110 + Math.random() * 60,
        });
      }
      if (!raf) raf = requestAnimationFrame(frame);
    }
    window.addEventListener("resize", resize);
    return { burst };
  })();

  /* ---------------- start ---------------- */
  // preload the first two pages' photos while the lock screen is showing
  hydratePage(pages[0]);
  hydratePage(pages[1]);
  goTo(0, true);
})();
