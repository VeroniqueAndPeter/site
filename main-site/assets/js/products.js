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
    } else if (pid === "18567945") {
      setTimeout(function() {
        window.location.href = "https://www.amazon.com/Little-Trees-Freshener-Black-10-Pack/dp/B00F3H79LS?th=1&linkCode=li2&tag=veroniqueandp-20&linkId=eaf08bed97ec6b4bef5365cc0395c721&language=en_US&ref_=as_li_ss_il";
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
  