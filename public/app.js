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


// to date stuff in footer
const datetimeEl = document.querySelector("#datetime");
const getDateString = () => {
  const now = new Date();
  // time
  const hours = `${
    now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`
  }`;
  const minutes = `${
    now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`
  }`;
  const seconds = `${
    now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`
  }`;
  // date
  const date = `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
  const dateString = `${hours}:${minutes}:${seconds} - ${date}`;
  return dateString;
};

const initDateString = getDateString();
datetimeEl.innerHTML = initDateString;

setInterval(() => {
  const dateString = getDateString();
  datetimeEl.innerText = dateString;
}, 1000);
