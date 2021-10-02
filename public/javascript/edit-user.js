async function updateFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="user-name"]').value;
  const username = document.querySelector('input[name="user-username"]').value;
  const email = document.querySelector('input[name="user-email"]').value;
  const password = document.querySelector('input[name="user-password"]').value;
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          name,
          username,
          email, 
          password 
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/admin/');
    } else {
      alert("Sorry, something went wrong");
    }
}

document.querySelector('#edit-user-form').addEventListener('submit', updateFormHandler);