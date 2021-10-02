async function userFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="user-name"]').value;
  const username = document.querySelector('input[name="user-username"]').value;
  const email = document.querySelector('input[name="user-email"]').value;
  const password = document.querySelector('input[name="user-password"]').value;

  const response = await fetch(`/api/users`, {
    method: 'POST',
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
    document.location.replace('/adminpage');
  } else {
    alert("Something went wrong");
  }
}

document.querySelector('#user-update-form').addEventListener('submit', userFormHandler);