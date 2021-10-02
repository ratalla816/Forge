async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        user_id: id
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
  
  document.querySelector('#delete-user').addEventListener('click', deleteFormHandler);