document.querySelector("#left-btn").addEventListener("click", function() {
    function scrollLeft() {
    productList.style.left = "-100%";
    }
  });
  
  document.querySelector("#right-btn").addEventListener("click", function() {
    function scrollRight() {
        productList.style.left = "0";
    }
  });
  