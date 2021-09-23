const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

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

 /* hiding and showing the dropdown content */
function dl() {
    console.log("test");
    document.getElementById("myDropdown").classList.add("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            } else {
                openDropdown.classList.contains('dropdown-content');
            }
        }
    }
}

document.getElementById("myDropdown").addEventListener('click',function(event){
    event.stopPropagation();
});