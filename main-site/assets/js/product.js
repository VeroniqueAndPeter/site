

// Get the product list element
const productList = document.querySelector(".product-list");

// Get the left and right buttons
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");

// Set the initial position of the product list to 0
productList.style.left = "0";

// Function to scroll the product list to the left
function scrollLeft() {
  productList.style.left = "-100%";
}

// Function to scroll the product list to the right
function scrollRight() {
  productList.style.left = "0";
}

// Attach the scrollLeft function to the left button
leftBtn.addEventListener("click", scrollLeft);

// Attach the scrollRight function to the right button
rightBtn.addEventListener("click", scrollRight);


