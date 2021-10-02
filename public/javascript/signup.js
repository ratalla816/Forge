async function signupFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name-input-signup').value.trim();
    const username = document.querySelector('#username-input-signup').value.trim();
    const email = document.querySelector('#email-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();

    if (name && username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({ name, username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) 
        { document.location.replace('/'); } 
        else { alert(response.statusText); }
    } else {
        alert('Please fill out all fields')
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);