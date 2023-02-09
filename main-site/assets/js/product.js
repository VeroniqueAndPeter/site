document.addEventListener("DOMContentLoaded", function() {
    var productList = document.querySelector(".product-list");

    function scrollLeft() {
        productList.style.left = "-100%";
    }

    function scrollRight() {
        productList.style.left = "0";
    }

    document.querySelector("#left-btn").addEventListener("click", scrollLeft);

    document.querySelector("#right-btn").addEventListener("click", scrollRight);
});