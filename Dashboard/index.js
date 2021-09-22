// const parallax = document.getElementById ("parallax");

// window.addEventListener ("scroll", function ()
// { let offset = window.pageYOffset;
// //   console.log ('Offset: ' + offset);
//     console.log('offset * 0.7' + offset * 0.7);
//     parallax.style.backgroundPositionY = offset * 0.7 + "px"; 
// })


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

 $('#middle-panel').stellar({
    scrollProperty: 'transform'
  });

  // <script src="https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.2/jquery.stellar.min.js" 
//         integrity="sha512-PNXCBnFH9wShbV+mYnrfo0Gf3iSREgBWmYAoMIfc+Z83vVq3Nu4yxBk6j+BZ40ZIhtW3WlTQdBvW3AYLAnlgpA==" 
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>

 