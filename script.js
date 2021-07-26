const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");
const monthsEl = document.getElementById("months");

const endTime = "1 Jan 2022";

function countdown() {
  const endDate = new Date(endTime);
  const currDate = new Date();
  const totalSeconds = (endDate - currDate) / 1000;

  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 86400) % 30;
  const months = Math.floor(totalSeconds / 86400 / 30);

  secondsEl.innerHTML = formatTime(seconds);
  minutesEl.innerHTML = formatTime(minutes);
  hoursEl.innerHTML = formatTime(hours);
  daysEl.innerHTML = formatTime(days);
  monthsEl.innerHTML = formatTime(months);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
