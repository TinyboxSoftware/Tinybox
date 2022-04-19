// set themes
const siteContainerEl = document.querySelector("div.site-container");
const siteThemeBtnEl = document.querySelector('button#theme');
const themePref = localStorage.getItem("theme");

if (themePref && themePref === "night") {
  siteContainerEl.classList.add("theme__night");
} else {
  siteContainerEl.classList.add("theme__day");
}

if (!themePref) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    siteContainerEl.classList.add("theme__night");
    localStorage.setItem('theme', 'night');
  } else {
    siteContainerEl.classList.add("theme__day");
    localStorage.setItem('theme', 'day');
  }
}

siteThemeBtnEl.addEventListener('click',(event) => {
  event.preventDefault();
  const currTheme = localStorage.getItem('theme');
  console.log('doing things')
  if(currTheme === 'night'){
    localStorage.setItem('theme', 'day');
    siteContainerEl.classList.add('theme__day');
    siteContainerEl.classList.remove('theme__night');
  } else {
    localStorage.setItem('theme', 'night');
    siteContainerEl.classList.add('theme__night')
    siteContainerEl.classList.remove('theme__day');
  }
})
