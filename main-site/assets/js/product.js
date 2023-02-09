document.addEventListener("DOMContentLoaded", function() {
    var productList = document.querySelector(".product-list");
    var products = document.querySelectorAll(".product");
    var leftBtn = document.querySelector("#left-btn");
    var rightBtn = document.querySelector("#right-btn");
    
    var currentIndex = 0;
    
    products.forEach(function(product, index) {
        if (index < 4) {
            product.style.display = "inline-block";
        } else {
            product.style.display = "none";
        }
    });
    
    leftBtn.addEventListener("click", function() {
        if (currentIndex == 0) return;
        
        currentIndex--;
        updateProducts();
    });
    
    rightBtn.addEventListener("click", function() {
        if (currentIndex == Math.floor(products.length / 4) - 1) return;
        
        currentIndex++;
        updateProducts();
    });
    
    function updateProducts() {
        products.forEach(function(product, index) {
            if (index >= currentIndex * 4 && index < currentIndex * 4 + 4) {
                product.style.display = "inline-block";
            } else {
                product.style.display = "none";
            }
        });
    }
});
