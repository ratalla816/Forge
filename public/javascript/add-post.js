async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
    const post_body = document.querySelector('input[name="post-body"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url,
        post_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/admin');
    } else {
      alert("Please fill out required fields");
    }
  }
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);