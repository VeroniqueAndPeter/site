let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var errorButton = document.getElementById("error-button");
errorButton.addEventListener("click", function() {
  alert("An error has occurred.");
});


const input1 = document.getElementById("awf_field-115331925");
const input2 = document.getElementById("awf_field-115331926");
const submitButton = document.getElementById("submit");

input1.addEventListener("input", updateButton);
input2.addEventListener("input", updateButton);

function updateButton() {
  submitButton.disabled = !input1.value || !input2.value;
}

updateButton();
