let totalTime = 30 * 60; // 30 minutes in seconds

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const timer = setInterval(() => {
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;

  if (totalTime <= 0) {
    clearInterval(timer);
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
  }

  totalTime--;
}, 1000);
