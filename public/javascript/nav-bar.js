
const home = document.getElementById('home');
const containerHome = document.getElementById('container-icon');
/*const containerPeople = document.getElementById('container-people');*/


const people = document.getElementById('people');

home.addEventListener('click', () => {
	containerHome.classList.add("active");
});

people.addEventListener('click', () => {
	containerPeople.classList.remove("active");
});

// async function loginFormHandler(event) {
//     event.preventDefault();

// if (click)
// const sign
// }}