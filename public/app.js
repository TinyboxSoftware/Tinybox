// import { gsap } from '../node_modules/gsap';

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

// do initial load
// const initTl = gsap.timeline({});
// initTl.fromTo('small', {opacity: 0, y: -10}, {opacity: 1, y: 0, duration: 0.4});
// initTl.fromTo('h1', {opacity: 0, y: -10}, {opacity: 1, y: 0, duration: 0.4});
// initTl.fromTo('#datetime', {opacity: 0, y: 5}, {opacity: 1, y: 0, duration: 0.8}, '<0.4')


setInterval(() => {
  const dateString = getDateString();
  datetimeEl.innerText = dateString;
}, 1000);
