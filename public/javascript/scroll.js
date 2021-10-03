
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function stickyBar() {
    if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky")
    } else {
      nav.classList.remove("sticky");
    }
  }
