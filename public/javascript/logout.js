// Completed by Derimar Gray on 9/22, updated by Rob Atalla on 9/23 @ 1335

async function logout() {
    
  const response = await fetch('/api/users/logout', { method: 'post', headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) { document.location.replace('/'); } 
    else { alert(response.statusText); }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);