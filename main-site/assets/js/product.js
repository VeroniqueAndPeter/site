document.addEventListener("DOMContentLoaded", function() {
    var productList = document.querySelector(".product-list");
    var leftBtn = document.querySelector("#left-btn");
    var rightBtn = document.querySelector("#right-btn");
  
    function scrollLeft() {
      productList.scrollLeft -= 100;
    }
  
    function scrollRight() {
      productList.scrollLeft += 100;
    }
  
    leftBtn.addEventListener("click", scrollLeft);
    rightBtn.addEventListener("click", scrollRight);
  });
  
  
  
  
  
  