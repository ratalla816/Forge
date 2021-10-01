async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/splash');
  } else {
    if (response.status === 404) {
      alert("You aren't logged in");
    } else {
      alert("Something went wrong.");
    }
  }
}

document.querySelector('#logout-link').addEventListener('click', logout);