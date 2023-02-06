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

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

/*let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
  if (targetDiv.style.display === "none") {
  } else {
  }
});*/

let targetDiv = document.getElementById("sticky-header");


if (window.location.search.indexOf("/?sub=old") !== -1) {
    targetDiv.style.display = "block";
  }

  if (window.location.search.indexOf("/?sub=new") !== -1) {
    targetDiv.style.display = "block";
  }
  