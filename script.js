let time = 0;
let intervalId;
let isPaused = false;

function startTimer() {
  const inputMinutes = document.getElementById("minutes").value;
  time = inputMinutes * 60;
  intervalId = setInterval(updateTimer, 1000);
  document.getElementById("pause").disabled = false
  document.getElementById("stop").disabled = false
}

function updateTimer() {
  if (!isPaused) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
    document.getElementById("timer").innerHTML = `${minutes}`;
    time--;
    if (time < 0) {
      clearInterval(intervalId);
      document.getElementById("timer").innerHTML = "Time's Up!";
    }
  }
}

function pauseTimer() {
  if (isPaused) {
    document.getElementById("pause").innerHTML = "Pause";
    intervalId = setInterval(updateTimer, 1000);
    isPaused = false;
  } else {
    document.getElementById("pause").innerHTML = "Unpause";
    clearInterval(intervalId);
    isPaused = true;
  }
}

function stopTimer() {
  clearInterval(intervalId);
  time = 0;
  document.getElementById("timer").innerHTML = "0:00";
  isPaused = false;
}
