// Completed by Derimar Gray on 9/22, updated by Rob Atalla on 9/23 @ 1338

async function signupFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name-input-signup').value.trim();
    const email = document.querySelector('#email-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) 
        { document.location.replace('/dashboard'); } 
        else { alert(response.statusText); }
    }}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);