document.addEventListener("DOMContentLoaded", function() {
    var url = new URL(window.location.href);
    var pid = url.searchParams.get("pid");
  
    if (pid === "12345678") {
      setTimeout(function() {
        window.location.href = "https://www.amazon.com/?example=1";
      }, 3000);
  
      var count = document.querySelector("#countdown");
      var countDown = 3;
      var interval = setInterval(function() {
        countDown--;
        count.innerHTML = countDown;
        if (countDown <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    } else if (pid === "87654321") {
      setTimeout(function() {
        window.location.href = "https://www.amazon.com/?example=2";
      }, 3000);
  
      var count = document.querySelector("#countdown");
      var countDown = 3;
      var interval = setInterval(function() {
        countDown--;
        count.innerHTML = countDown;
        if (countDown <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    } else if (!pid) {
      setTimeout(function() {
        window.location.href = "https://veroniqueandpetervandamme.com/?error=true";
      }, 3000);
  
      var count = document.querySelector("#countdown");
      var countDown = 3;
      var interval = setInterval(function() {
        countDown--;
        count.innerHTML = countDown;
        if (countDown <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      setTimeout(function() {
        window.location.href = "https://veroniqueandpetervandamme.com/?error=true";
      }, 3000);
  
      var count = document.querySelector("#countdown");
      var countDown = 3;
      var interval = setInterval(function() {
        countDown--;
        count.innerHTML = countDown;
        if (countDown <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  });
  