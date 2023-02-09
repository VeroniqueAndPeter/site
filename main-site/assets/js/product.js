document.addEventListener("DOMContentLoaded", function() {
    var productList = document.querySelector(".product-list");
    var leftBtn = document.querySelector("#left-btn");
    var rightBtn = document.querySelector("#right-btn");
  
    function scrollLeft() {
      productList.style.left = "-100%";
    }
  
    function scrollRight() {
      productList.style.left = "0";
    }
  
    leftBtn.addEventListener("click", scrollLeft);
    rightBtn.addEventListener("click", scrollRight);
  });
  
  
  