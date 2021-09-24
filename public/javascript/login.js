// Completed by Derimar Gray on 9/22, updated by Rob Atalla on 9/23 @ 1340

async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', { method: 'post', body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) { document.location.replace('/dashboard'); } 
      else { alert(response.statusText); }
    }}
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);