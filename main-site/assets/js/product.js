

let productList = document.querySelector('.product-list');
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');

window.onload = function() {
    if (leftBtn) {
        leftBtn.addEventListener("click", function() {
        productList.scrollLeft -= 200;
    });
    }

    if (rightBtn) {
        rightBtn.addEventListener("click", function() {
            productList.scrollLeft += 200;
        });
    }
};