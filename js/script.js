let countDown = new Date("Feb 16 , 2023 08:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDown - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hero__lt-days").innerHTML = days;
  document.getElementById("hero__lt-hours").innerHTML = hours;
  document.getElementById("hero__lt-minutes").innerHTML = minutes;
  document.getElementById("hero__lt-seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hero__lt-days").innerHTML = "00";
    document.getElementById("hero__lt-hours").innerHTML = "00";
    document.getElementById("hero__lt-minutes").innerHTML = "00";
    document.getElementById("hero__lt-seconds").innerHTML = "00";
    document.getElementById("write").innerHTML = "REGISTRATION CLOSED";
    document.getElementById("hero__countdown").innerHTML = "";
    document.getElementById("close").style.display = "none";
  }
}, 1000);
