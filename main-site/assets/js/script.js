
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

$(document).ready(function() {
  var url = window.location.href;
  if (url.endsWith("?sub=new")) {
    $("#SuccessAlert").show();
  } else {
    $("#SuccessAlert").hide();
  }
});

$(document).ready(function() {
  var url = window.location.href;
  if (url.endsWith("?sub=old")) {
    $("#WarningAlert").show();
  } else {
    $("#WarningAlert").hide();
  }
});
  

/* Close */

var closebtns = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}