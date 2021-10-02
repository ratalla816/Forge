// Dropdown for future development

/* hiding and showing the dropdown content */
 function dl() {
    console.log("test");
    document.getElementById("myDropdown").classList.add("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            } else {
                openDropdown.classList.contains('dropdown-content');
            }
        }
    }
}

document.getElementById("myDropdown").addEventListener('click',function(event){
    event.stopPropagation();
});