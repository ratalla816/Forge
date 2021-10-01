
// const home = document.getElementById('home');
// const people = document.getElementById('people');
// /*const containerPeople = document.getElementById('container-people');*/


// home.addEventListener('click', () => {
// 	containerHome.classList.add("hidden");
// });

// people.addEventListener('click', () => {
// 	containerPeople.classList.remove("active");
// });



type="image">
            $(document).ready(function () {
                $("nav-middle").click(
                  function (e) {
                    $("nav-middle > home").removeClass(
                      "active");
                    $("nav-middle > home").css(
                      "color", "");
 
                    $(this).addClass("active");
                    $(this).css("color", "blue");
                });
            });