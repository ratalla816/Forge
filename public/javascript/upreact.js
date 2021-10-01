async function upreactClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/posts/upreact', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log('added a reaction');
    
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#upreact-btn').addEventListener('click', upreactClickHandler);