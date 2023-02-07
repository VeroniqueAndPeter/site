
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
  
// get the current URL
var currentURL = window.location.href;

// check if the URL ends with "/?sub=new"
if (currentURL.endsWith("/?sub=old")) {
  // show the div element
  document.getElementById("WarningAlert").style.display = "block";

  // update the URL without reloading the page
  history.pushState({}, "", currentURL.replace("/?sub=old", ""));
}


/* Close */

var closebtns = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

(function() {
    var IE = /*@cc_on!@*/false;
    if (!IE) { return; }
    if (document.compatMode && document.compatMode == 'BackCompat') {
        if (document.getElementById("af-form-218847364")) {
            document.getElementById("af-form-218847364").className = 'af-form af-quirksMode';
        }
        if (document.getElementById("af-body-218847364")) {
            document.getElementById("af-body-218847364").className = "af-body inline af-quirksMode";
        }
        if (document.getElementById("af-header-218847364")) {
            document.getElementById("af-header-218847364").className = "af-header af-quirksMode";
        }
        if (document.getElementById("af-footer-218847364")) {
            document.getElementById("af-footer-218847364").className = "af-footer af-quirksMode";
        }
    }
})();
