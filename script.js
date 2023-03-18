const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

const newYear = "5 nov 2023";

function countdown(){

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);

    }
 function formatTime(time){
     return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
const pink = document.querySelector(".button_rosa");
const white = document.querySelector(".button_branco");
const yellow = document.querySelector(".button_amarelo");
const blue = document.querySelector(".button_azul");
const body = document.querySelector("body");

const cookie = Object.fromEntries(
  document.cookie.split("; ").map((e) => e.split("="))
);

if (cookie.hasOwnProperty("")) {
  document.cookie = background=white;;
} else {
  body.style.background = cookie.background;
}

pink.onclick = () => {
  document.cookie = background=pink;;
  body.style.background = "#ffb6c1";
};
white.onclick = () => {
  document.cookie = background=white;;
  body.style.background = "white";
};
yellow.onclick = () => {
  document.cookie = background=yellow;;
  body.style.background = "#dfd880";
};
blue.onclick = () => {
  document.cookie = background=blue;;
  body.style.background = "#b7d5e5";
};