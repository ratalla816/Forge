async function profile() {
    const response = await fetch('/api/users/profile', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/profile');
    }// } else {
    //     alert("Sorry, something went wrong")
    // }
}
document.querySelector('#profile-link').addEventListener('click', profile);