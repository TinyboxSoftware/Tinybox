// set themes
const siteContainerEl = document.querySelector("div.site-container");
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
  } else {
    siteContainerEl.classList.add("theme__day");
  }
}

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
