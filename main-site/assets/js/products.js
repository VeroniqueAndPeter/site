
let url = window.location.href;
let timer = 3;
let countdown = document.getElementById("countdown");

if (url.endsWith("/?pid=12345678")) {
  window.setInterval(function () {
    timer--;
    countdown.innerHTML = timer;
    if (timer === 0) {
      window.location.href = "https://www.example.com/product";
    }
  }, 1000);
} else if (url.endsWith("/?pid=87654321")) {
  window.setInterval(function () {
    timer--;
    countdown.innerHTML = timer;
    if (timer === 0) {
      window.location.href = "https://www.example.com/example";
    }
  }, 1000);
} else if (url === "https://www.example.com/") {
  window.setInterval(function () {
    timer--;
    countdown.innerHTML = timer;
    if (timer === 0) {
      window.location.href = "https://www.example.com";
    }
  }, 1000);
} else {
  window.setInterval(function () {
    timer--;
    countdown.innerHTML = timer;
    if (timer === 0) {
      window.location.href = "https://www.example.com";
    }
  }, 1000);
}
