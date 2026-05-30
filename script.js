const projects = {
  "silent-room": {
    date: "Silent Room Archive, May 2047",
    title: "Silent Room Archive",
    subtitle: "Temporary exhibition graphic system",
    meta: "Client: Sample Museum<br>Category: Exhibition<br>Design: Seesun Sohot",
    description:
      "A dummy exhibition project organized around plain labels, folded sheets, and a strict typographic hierarchy. The system keeps the room quiet while making each work title easy to scan."
  },
  "white-index": {
    date: "White Index 2047, June 2047",
    title: "White Index 2047",
    subtitle: "Publication and wall text direction",
    meta: "Client: Index Hall<br>Category: Exhibition<br>Design: Seesun Sohot",
    description:
      "A compact index for a fictional group show. The visual language uses wide margins, oversized numbers, and a sequence of repeated typographic gestures."
  },
  "soft-display": {
    date: "Soft Display Notes, July 2047",
    title: "Soft Display Notes",
    subtitle: "Spatial captions and printed matter",
    meta: "Client: Dummy Gallery<br>Category: Exhibition<br>Design: Seesun Sohot",
    description:
      "A quiet display kit with captions, handouts, and small posters. Each item shares the same black-and-white frame so the information sits cleanly in the space."
  },
  "paper-hall": {
    date: "Paper Hall Studies, August 2047",
    title: "Paper Hall Studies",
    subtitle: "Poster and signage studies",
    meta: "Client: Paper Hall<br>Category: Exhibition<br>Design: Seesun Sohot",
    description:
      "A set of dummy studies for signage and posters, built from simple type scales and repeated horizontal rules."
  },
  "annual-reader": {
    date: "Annual Reader System, May 2048",
    title: "Annual Reader System",
    subtitle: "Editorial identity and book design",
    meta: "Client: Annual Office<br>Category: Graphic<br>Design: Seesun Sohot",
    description:
      "A fictional reader designed as a clean archive of essays, captions, indexes, and image plates. The work focuses on pace, page rhythm, and generous negative space."
  },
  "city-poster": {
    date: "City Poster Sequence, September 2048",
    title: "City Poster Sequence",
    subtitle: "Outdoor poster campaign",
    meta: "Client: City Bureau<br>Category: Graphic<br>Design: Seesun Sohot",
    description:
      "A poster sequence using bold type, simple alignments, and repeated date structures. The dummy campaign is made to feel direct and public."
  },
  "museum-fold": {
    date: "Museum Fold Series, October 2048",
    title: "Museum Fold Series",
    subtitle: "Folded guide and information cards",
    meta: "Client: Museum Sample<br>Category: Graphic<br>Design: Seesun Sohot",
    description:
      "A family of folded guides that turn dense information into a calm reading order. The system uses a narrow set of typographic rules across multiple sizes."
  },
  "plain-forms": {
    date: "Plain Forms Identity, November 2048",
    title: "Plain Forms Identity",
    subtitle: "Identity system for a design program",
    meta: "Client: Plain Forms<br>Category: Graphic<br>Design: Seesun Sohot",
    description:
      "A dummy identity project built around plain forms, sharp spacing, and direct typography. Applications include posters, name tags, and a simple website index."
  },
  "desk-calendar": {
    date: "Desk Calendar Drafts, December 2048",
    title: "Desk Calendar Drafts",
    subtitle: "Calendar layout and print tests",
    meta: "Client: Sample Workshop<br>Category: Graphic<br>Design: Seesun Sohot",
    description:
      "A calendar study where numbers, notes, and blank space form a steady daily rhythm. The result is intentionally reduced and practical."
  },
  "warm-serif": {
    date: "Warm Serif Experiments, January 2049",
    title: "Warm Serif Experiments",
    subtitle: "Custom lettering sketches",
    meta: "Client: Self-initiated<br>Category: Lettering<br>Design: Seesun Sohot",
    description:
      "A set of lettering experiments that compare warm serif shapes with neutral layout systems. The work is presented as sketches, specimens, and poster tests."
  },
  "sign-paint": {
    date: "Sign Paint Practice, February 2049",
    title: "Sign Paint Practice",
    subtitle: "Lettering for temporary signage",
    meta: "Client: Practice Archive<br>Category: Lettering<br>Design: Seesun Sohot",
    description:
      "A dummy sign-painting practice archive using high-contrast strokes and simple spacing rules. The project studies how handmade letters behave inside strict layouts."
  },
  "mono-note": {
    date: "Mono Note Letterforms, March 2049",
    title: "Mono Note Letterforms",
    subtitle: "Monospaced lettering study",
    meta: "Client: Type Note<br>Category: Lettering<br>Design: Seesun Sohot",
    description:
      "A lettering study based on monospaced rhythm, small optical corrections, and repeated word specimens."
  },
  "festival-type": {
    date: "Festival Type Study, April 2049",
    title: "Festival Type Study",
    subtitle: "Display lettering for event graphics",
    meta: "Client: Dummy Festival<br>Category: Lettering<br>Design: Seesun Sohot",
    description:
      "A display lettering project for a fictional festival. The work includes title treatments, schedule graphics, and a few compact social layouts."
  },
  pantheon: {
    date: "Pantheon, May 2049",
    title: "Pantheon",
    subtitle: "Display font project",
    meta: "Client: Self-initiated<br>Category: Font<br>Design: Seesun Sohot",
    description:
      "A dummy font project page for Pantheon. The project presents letter specimens, display settings, poster tests, and simple type-driven layouts for portfolio indexing.",
    image: "images/mood.png",
    imageLink: "https://www.behance.net/gallery/145367157/Pantheon"
  },
  "sample-grotesk": {
    date: "Sample Grotesk, June 2049",
    title: "Sample Grotesk",
    subtitle: "Neutral sans type study",
    meta: "Client: Dummy Type Lab<br>Category: Font<br>Design: Seesun Sohot",
    description:
      "A dummy grotesk type study focused on restrained proportions, compact spacing, and a small specimen system.",
    image: "images/mood.png"
  },
  "index-serif": {
    date: "Index Serif, July 2049",
    title: "Index Serif",
    subtitle: "Serif type specimen draft",
    meta: "Client: Dummy Archive<br>Category: Font<br>Design: Seesun Sohot",
    description:
      "A dummy serif specimen with title pages, captions, and large display samples arranged in a strict black-and-white layout.",
    image: "images/mood.png"
  }
};

const panel = document.querySelector(".project-panel");
const scrim = document.querySelector(".panel-scrim");
const closeButton = document.querySelector(".close-panel");
const dateEl = document.querySelector("#panel-date");
const titleEl = document.querySelector("#panel-title");
const subtitleEl = document.querySelector("#panel-subtitle");
const metaEl = document.querySelector("#panel-meta");
const descriptionEl = document.querySelector("#panel-description");
const imageEl = document.querySelector("#panel-image");
const imageLinkEl = document.querySelector("#panel-image-link");
const projectButtons = document.querySelectorAll("[data-project]");
const themeButtons = document.querySelectorAll("[data-theme-button]");
const introTitle = document.querySelector("#intro-title");
const drawingCanvas = document.querySelector("#drawing-canvas");
const blurTargets = document.querySelectorAll(".intro h1, .instagram-link, .index-list");
const staticLensTargets = document.querySelectorAll(
  ".instagram-link, #panel-date, .close-panel, .project-description p:last-child"
);
const introLines = [
  "Seesun Sohot",
  "Graphic Designer",
  "Exhibition, Type",
  "Lettering & Visuals"
];
let introTypingTimer = null;
let apocalypseClickCount = 0;
let apocalypseStarted = false;
let isDrawing = false;
let lastPoint = null;

function setTheme(theme) {
  const nextTheme = theme === "night" ? "night" : "day";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
}

setTheme(localStorage.getItem("theme") || "day");

function getCanvasContext() {
  return drawingCanvas ? drawingCanvas.getContext("2d") : null;
}

function resizeDrawingCanvas() {
  const context = getCanvasContext();
  if (!context) return;

  const rect = drawingCanvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  drawingCanvas.width = Math.round(rect.width * scale);
  drawingCanvas.height = Math.round(rect.height * scale);
  context.setTransform(scale, 0, 0, scale, 0, 0);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 2;
  context.strokeStyle = "#000000";
}

function getCanvasPoint(event) {
  const rect = drawingCanvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function startDrawing(event) {
  const context = getCanvasContext();
  if (!context) return;

  event.preventDefault();
  isDrawing = true;
  lastPoint = getCanvasPoint(event);
  if (event.pointerId && drawingCanvas.setPointerCapture) {
    try {
      drawingCanvas.setPointerCapture(event.pointerId);
    } catch {
      /* Mouse fallback can draw without pointer capture. */
    }
  }
}

function draw(event) {
  const context = getCanvasContext();
  if (!context || !isDrawing || !lastPoint) return;

  event.preventDefault();
  const point = getCanvasPoint(event);
  context.strokeStyle = "#000000";
  context.beginPath();
  context.moveTo(lastPoint.x, lastPoint.y);
  context.lineTo(point.x, point.y);
  context.stroke();
  lastPoint = point;
}

function stopDrawing() {
  isDrawing = false;
  lastPoint = null;
}

function startMouseDrawing(event) {
  startDrawing({
    clientX: event.clientX,
    clientY: event.clientY,
    pointerId: 1,
    preventDefault: () => event.preventDefault()
  });
}

function mouseDraw(event) {
  draw({
    clientX: event.clientX,
    clientY: event.clientY,
    preventDefault: () => event.preventDefault()
  });
}

function appendCharacterSpans(parent, text, className) {
  text.split("").forEach((character) => {
    const span = document.createElement("span");
    span.className = className;
    span.textContent = character === " " ? "\u00a0" : character;
    parent.append(span);
  });
}

function wrapTextNodeCharacters(root, className) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.trim()) {
      textNodes.push(node);
    }
  }

  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    appendCharacterSpans(fragment, node.nodeValue, className);
    node.replaceWith(fragment);
  });
}

function wrapLensTargets(targets) {
  targets.forEach((target) => {
    if (!target || target.dataset.lensWrapped === "true") return;
    wrapTextNodeCharacters(target, "lensable");
    target.dataset.lensWrapped = "true";
  });
}

function clearLensWrappedState(targets) {
  targets.forEach((target) => {
    if (target) {
      target.dataset.lensWrapped = "false";
    }
  });
}

function typeIntro() {
  if (!introTitle) return;

  window.clearTimeout(introTypingTimer);
  introTitle.textContent = "";
  introTitle.classList.add("is-typing");

  const fullText = introLines.join("\n");
  let characterIndex = 0;

  function typeNextCharacter() {
    const typedText = fullText.slice(0, characterIndex);
    const parts = typedText.split("\n");

    introTitle.replaceChildren();
    parts.forEach((part, index) => {
      appendCharacterSpans(introTitle, part, "intro-char");
      if (index < parts.length - 1) {
        introTitle.append(document.createElement("br"));
      }
    });

    if (characterIndex < fullText.length) {
      characterIndex += 1;
      introTypingTimer = window.setTimeout(typeNextCharacter, 34);
    } else {
      introTitle.classList.remove("is-typing");
    }
  }

  typeNextCharacter();
}

function updateScrollBlur() {
  const blurAmount = Math.min(window.scrollY / 120, 1.2);
  document.documentElement.style.setProperty("--scroll-blur", `${blurAmount}px`);

  blurTargets.forEach((target) => {
    const targetTop = target.getBoundingClientRect().top;
    target.classList.toggle("scroll-blur-zone", window.scrollY > 0 && targetTop < 10);
  });
}

function updateTextLens(event) {
  const radius = 10;

  document.querySelectorAll(".intro-char, .lensable").forEach((character) => {
    const rect = character.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const distance = Math.hypot(event.clientX - x, event.clientY - y);

    character.classList.toggle("is-lensed", distance <= radius);
  });
}

function createFallingLetters() {
  const overlay = document.querySelector(".apocalypse-overlay");
  if (!overlay) return;

  const ignoredTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!parent || ignoredTags.has(parent.tagName) || parent.closest(".apocalypse-overlay")) {
        return NodeFilter.FILTER_REJECT;
      }

      if (!node.nodeValue.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  const maxLetters = 720;
  let letterCount = 0;

  textNodes.forEach((node) => {
    const text = node.nodeValue;

    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];

      if (character.trim() === "" || letterCount >= maxLetters) continue;

      const range = document.createRange();
      range.setStart(node, index);
      range.setEnd(node, index + 1);

      const rect = range.getBoundingClientRect();
      range.detach();

      if (!rect.width || !rect.height) continue;

      const letter = document.createElement("span");
      const row = Math.floor(letterCount / 52);
      const pileX = (letterCount % 52) * 18 + Math.random() * 8;
      const pileY = window.innerHeight - rect.top - 18 - row * 10 - Math.random() * 5;
      const blastX = (Math.random() - 0.5) * 220;
      const blastY = -80 - Math.random() * 260;
      const font = window.getComputedStyle(node.parentElement).font;

      letter.className = "falling-letter";
      letter.textContent = character;
      letter.style.setProperty("--start-x", `${rect.left}px`);
      letter.style.setProperty("--start-y", `${rect.top}px`);
      letter.style.setProperty("--blast-x", `${blastX}px`);
      letter.style.setProperty("--blast-y", `${blastY}px`);
      letter.style.setProperty("--blast-rot", `${(Math.random() - 0.5) * 420}deg`);
      letter.style.setProperty("--fall-x", `${pileX - rect.left}px`);
      letter.style.setProperty("--fall-y", `${pileY}px`);
      letter.style.setProperty("--fall-rot", `${(Math.random() - 0.5) * 90}deg`);
      letter.style.setProperty("--fall-delay", `${Math.random() * 360}ms`);
      letter.style.setProperty("--fall-duration", `${1300 + Math.random() * 1100}ms`);
      letter.style.setProperty("--fall-font", font);

      overlay.append(letter);
      letterCount += 1;
    }
  });
}

function startApocalypse() {
  if (apocalypseStarted) return;

  apocalypseStarted = true;
  createFallingLetters();
  document.body.classList.add("is-apocalypse");
}

typeIntro();
updateScrollBlur();
wrapLensTargets(staticLensTargets);
resizeDrawingCanvas();

function openProject(projectKey) {
  const project = projects[projectKey];
  if (!project) return;

  dateEl.textContent = project.date;
  titleEl.textContent = project.title;
  subtitleEl.textContent = project.subtitle;
  metaEl.innerHTML = project.meta;
  descriptionEl.textContent = project.description;
  imageEl.src = project.image || "images/mood.png";

  if (project.imageLink) {
    imageLinkEl.href = project.imageLink;
    imageLinkEl.classList.remove("is-disabled");
    imageLinkEl.setAttribute("aria-label", `Open ${project.title} on Behance`);
  } else {
    imageLinkEl.removeAttribute("href");
    imageLinkEl.classList.add("is-disabled");
    imageLinkEl.setAttribute("aria-label", project.title);
  }

  const dynamicLensTargets = [dateEl, titleEl, subtitleEl, metaEl, descriptionEl];
  clearLensWrappedState(dynamicLensTargets);
  wrapLensTargets(dynamicLensTargets);

  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  scrim.hidden = false;
  closeButton.focus({ preventScroll: true });
}

function closeProject() {
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("panel-open");
  scrim.hidden = true;
}

projectButtons.forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

introTitle.addEventListener("click", typeIntro);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeButton));
});

if (drawingCanvas) {
  drawingCanvas.addEventListener("pointerdown", startDrawing);
  drawingCanvas.addEventListener("pointermove", draw);
  drawingCanvas.addEventListener("pointerup", stopDrawing);
  drawingCanvas.addEventListener("pointercancel", stopDrawing);
  drawingCanvas.addEventListener("pointerleave", stopDrawing);
  drawingCanvas.addEventListener("mousedown", startMouseDrawing);
  drawingCanvas.addEventListener("mousemove", mouseDraw);
  window.addEventListener("mouseup", stopDrawing);
}

window.addEventListener("scroll", updateScrollBlur, { passive: true });
window.addEventListener("resize", resizeDrawingCanvas);
window.addEventListener("mousemove", updateTextLens);
window.addEventListener("click", (event) => {
  if (event.target.closest(".drawing-board")) return;

  apocalypseClickCount += 1;

  if (apocalypseClickCount >= 10) {
    startApocalypse();
  }
});
window.addEventListener("mouseleave", () => {
  document.querySelectorAll(".is-lensed").forEach((character) => {
    character.classList.remove("is-lensed");
  });
});
closeButton.addEventListener("click", closeProject);
scrim.addEventListener("click", closeProject);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && panel.classList.contains("is-open")) {
    closeProject();
  }
});
