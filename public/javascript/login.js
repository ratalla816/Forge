// Completed by Derimar Gray on 9/22, updated by Rob Atalla on 9/23 @ 1340

const signInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-input-login').value.trim();
    const email = document.querySelector('#email-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', { method: 'post', body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) { document.location.replace('/'); } 
      else { alert(response.statusText); }
    }}
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);