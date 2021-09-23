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