const parallax = document.getElementById ("parallax");

window.addEventListener ("scroll", function ()
{ let offset = window.pageYOffset;
//   console.log ('Offset: ' + offset);
    console.log('offset * 0.7' + offset * 0.7);
    parallax.style.backgroundPositionY = offset * 0.7 + "px"; 
})


function myFunction() {
    var element = document.body;
    var container = document.getElementsByClassName('container');
    var left = document.getElementsByClassName('left-panel');
    var middle = document.getElementsByClassName('middle-panel');
    var middle = document.getElementsByClassName('right-panel');
    element.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    left.classList.toggle("dark-mode");
    middle.classList.toggle("dark-mode");
    right.classList.toggle("dark-mode");
 }

 

 