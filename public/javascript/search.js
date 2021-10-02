// for future development
const searchButton = document.getElementById('searchButton');

const searchClick = async (event) => {    
    const searchField = document.getElementById('search').value;

    console.log('search field', searchField);
    console.log('button clicked')
    await fetch(`/api/users/`, {
        method: 'GET',
        searchField,
        headers: { 'Content-Type': 'application/json' },
    })
};

searchButton.addEventListener('click', searchClick);
