import { gsap } from "gsap";

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
