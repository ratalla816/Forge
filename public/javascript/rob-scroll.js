
    // SPECIAL THANKS to GARY SIMON - "Vanilla JavaScript Parallax with just a Few Lines of Code" https://youtu.be/Dxm6EwvQIl8 \\
    window.addEventListener ('scroll', function (e) {

    const target = document.querySelectorAll('.scroll');
     // target.style.transform = 'translate3d(0px, 50px, 0px';
     // target.style.background = '#b3ff00';
     // console.log(target.style);
     // console.log(window.pageYOffset);
    var scrolled = window.pageYOffset;
       
    var index = 0, length = target.length; 
    for ( index; index < length; index++ ) {
        var pos = window.pageYOffset * target[index].dataset.rate;

    if(target[index].dataset.direction === 'vertical'){
        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    } else 
        { var posX = window.pageYOffset * target[index].dataset.ratex;
          var posY = window.pageYOffset * target[index].dataset.ratey;
          target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)'; } 
        }

        //  var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        //     if (ismobile){ bypass parallax effect } 
});

function clickCounter() {
    id = true; 
  if (typeof(Storage) !== "session") {
    if (localStorage.clickcount) {
      localStorage.clickcount = (localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}