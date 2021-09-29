async function profile() {
    const response = await fetch('/api/users/profile', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/profile');
    }
}
document.querySelector('#profile-link').addEventListener('click', profile);