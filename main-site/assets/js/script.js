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

if (window.location.search.indexOf("?sub=old") !== -1) {
    targetDiv.style.display = "block";
  }

  if (window.location.search.indexOf("?sub=new") !== -1) {
    targetDiv.style.display = "block";
  }
  