async function userFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('textarea[name="name"]').value.trim();
  
    const user_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (name) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
            user_id,
            name
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('#user-link').addEventListener('submit', userFormHandler);