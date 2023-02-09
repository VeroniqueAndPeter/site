document.addEventListener("DOMContentLoaded", function() {
    var productList = document.querySelector(".product-list");
    var leftBtn = document.querySelector("#left-btn");
    var rightBtn = document.querySelector("#right-btn");
    
    leftBtn.addEventListener("click", function() {
        productList.style.left = "0";
    });
    
    rightBtn.addEventListener("click", function() {
        productList.style.left = "-100%";
    });

    leftBtn.addEventListener("click", scrollLeft);
    rightBtn.addEventListener("click", scrollRight);
});