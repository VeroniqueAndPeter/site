/* Automotive  */

document.addEventListener("DOMContentLoaded", function() {
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


 /*     Baby/Children       */
document.addEventListener("DOMContentLoaded", function() {
    var products1 = document.querySelectorAll(".product1");
    var leftBtn1 = document.querySelector("#left-btn-2");
    var rightBtn1 = document.querySelector("#right-btn-2");
    
    var currentIndex1 = 0;
    
    products1.forEach(function(product1, index) {
        if (index < 4) {
            product1.style.display = "inline-block";
        } else {
            product1.style.display = "none";
        }
    });
    
    leftBtn1.addEventListener("click", function() {
        if (currentIndex1 == 0) return;
        
        currentIndex1--;
        updateProducts();
    });
    
    rightBtn1.addEventListener("click", function() {
        if (currentIndex1 == Math.floor(products1.length / 4) - 1) return;
        
        currentIndex1++;
        updateProducts();
    });
    
    function updateProducts() {
        products1.forEach(function(product1, index) {
            if (index >= currentIndex1 * 4 && index < currentIndex1 * 4 + 4) {
                product1.style.display = "inline-block";
            } else {
                product1.style.display = "none";
            }
        });
    }
});

/* beauty */

document.addEventListener("DOMContentLoaded", function() {
    var products2 = document.querySelectorAll(".product2");
    var leftBtn2 = document.querySelector("#left-btn-3");
    var rightBtn2 = document.querySelector("#right-btn-3");
    
    var currentIndex2 = 0;
    
    products2.forEach(function(product2, index) {
        if (index < 4) {
            product2.style.display = "inline-block";
        } else {
            product2.style.display = "none";
        }
    });
    
    leftBtn2.addEventListener("click", function() {
        if (currentIndex2 == 0) return;
        
        currentIndex2--;
        updateProducts();
    });
    
    rightBtn2.addEventListener("click", function() {
        if (currentIndex2 == Math.floor(products2.length / 4) - 1) return;
        
        currentIndex2++;
        updateProducts();
    });
    
    function updateProducts() {
        products2.forEach(function(product2, index) {
            if (index >= currentIndex2 * 4 && index < currentIndex2 * 4 + 4) {
                product2.style.display = "inline-block";
            } else {
                product2.style.display = "none";
            }
        });
    }
});

/* electronics */

document.addEventListener("DOMContentLoaded", function() {
    var products3 = document.querySelectorAll(".product3");
    var leftBtn3 = document.querySelector("#left-btn-4");
    var rightBtn3 = document.querySelector("#right-btn-4");
    
    var currentIndex3 = 0;
    
    products3.forEach(function(product3, index) {
        if (index < 4) {
            product3.style.display = "inline-block";
        } else {
            product3.style.display = "none";
        }
    });
    
    leftBtn3.addEventListener("click", function() {
        if (currentIndex3 == 0) return;
        
        currentIndex3--;
        updateProducts();
    });
    
    rightBtn3.addEventListener("click", function() {
        if (currentIndex3 == Math.floor(products3.length / 4) - 1) return;
        
        currentIndex3++;
        updateProducts();
    });
    
    function updateProducts() {
        products3.forEach(function(product3, index) {
            if (index >= currentIndex3 * 4 && index < currentIndex3 * 4 + 4) {
                product3.style.display = "inline-block";
            } else {
                product3.style.display = "none";
            }
        });
    }
});

/* sports */

document.addEventListener("DOMContentLoaded", function() {
    var products4 = document.querySelectorAll(".product4");
    var leftBtn4 = document.querySelector("#left-btn-5");
    var rightBtn4 = document.querySelector("#right-btn-5");
    
    var currentIndex4 = 0;
    
    products4.forEach(function(product4, index) {
        if (index < 4) {
            product4.style.display = "inline-block";
        } else {
            product4.style.display = "none";
        }
    });
    
    leftBtn4.addEventListener("click", function() {
        if (currentIndex4 == 0) return;
        
        currentIndex4--;
        updateProducts();
    });
    
    rightBtn4.addEventListener("click", function() {
        if (currentIndex4 == Math.floor(products4.length / 4) - 1) return;
        
        currentIndex4++;
        updateProducts();
    });
    
    function updateProducts() {
        products4.forEach(function(product4, index) {
            if (index >= currentIndex4 * 4 && index < currentIndex4 * 4 + 4) {
                product4.style.display = "inline-block";
            } else {
                product4.style.display = "none";
            }
        });
    }
});

/* household */

document.addEventListener("DOMContentLoaded", function() {
    var products5 = document.querySelectorAll(".product5");
    var leftBtn5 = document.querySelector("#left-btn-6");
    var rightBtn5 = document.querySelector("#right-btn-6");
    
    var currentIndex5 = 0;
    
    products5.forEach(function(product5, index) {
        if (index < 4) {
            product5.style.display = "inline-block";
        } else {
            product5.style.display = "none";
        }
    });
    
    leftBtn5.addEventListener("click", function() {
        if (currentIndex5 == 0) return;
        
        currentIndex5--;
        updateProducts();
    });
    
    rightBtn5.addEventListener("click", function() {
        if (currentIndex5 == Math.floor(products5.length / 4) - 1) return;
        
        currentIndex5++;
        updateProducts();
    });
    
    function updateProducts() {
        products5.forEach(function(product5, index) {
            if (index >= currentIndex5 * 4 && index < currentIndex5 * 4 + 4) {
                product5.style.display = "inline-block";
            } else {
                product5.style.display = "none";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var products6 = document.querySelectorAll(".product6");
    var leftBtn6 = document.querySelector("#left-btn-7");
    var rightBtn6 = document.querySelector("#right-btn-7");
    
    var currentIndex6 = 0;
    
    products6.forEach(function(product6, index) {
        if (index < 4) {
            product6.style.display = "inline-block";
        } else {
            product6.style.display = "none";
        }
    });
    
    leftBtn6.addEventListener("click", function() {
        if (currentIndex6 == 0) return;
        
        currentIndex6--;
        updateProducts();
    });
    
    rightBtn6.addEventListener("click", function() {
        if (currentIndex6 == Math.floor(products6.length / 4) - 1) return;
        
        currentIndex6++;
        updateProducts();
    });
    
    function updateProducts() {
        products6.forEach(function(product6, index) {
            if (index >= currentIndex6 * 4 && index < currentIndex6 * 4 + 4) {
                product6.style.display = "inline-block";
            } else {
                product6.style.display = "none";
            }
        });
    }
});