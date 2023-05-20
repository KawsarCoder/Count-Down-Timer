cowntDown = () => {
  const timerElement = document.getElementById("timer");

  let timeLeft = 9;

  let countDownInterval = setInterval(() => {
    timerElement.textContent = timeLeft;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countDownInterval);
      timerElement.textContent = "Time's Up!!!";
    }
  }, 1000);
};

cowntDown();
