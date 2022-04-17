import { gsap } from "gsap";

// set themes
const siteContainerEl = document.querySelector("div.site-container");
const themePref = localStorage.getItem("theme");

if (themePref && themePref === "night") {
  siteContainerEl.classList.add("theme__night");
} else {
  siteContainerEl.classList.add("theme__day");
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  siteContainerEl.classList.add("theme__night");
} else {
  siteContainerEl.classList.add("theme__day");
}

const initTl = gsap.timeline({});
initTl.fromTo(
  "small",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 0.4 }
);
initTl.fromTo(
  "h1",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 0.4 }
);
initTl.fromTo(
  "#datetime",
  { opacity: 0, y: 5 },
  { opacity: 1, y: 0, duration: 0.8 },
  "<0.4"
);
