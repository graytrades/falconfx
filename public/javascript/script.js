// ------------------- Display Page Funtion start ---------------------

// Displays the needed page
function show(elementID) {
    //Find the requested page and alert if it's not found
    const ele = document.getElementById(elementID);
    if (!ele) {
        alert('no such element');
        return;
    }
    // Get all pages by looping through and hiding the rest
    const pages = document.getElementsByClassName('display');
    for (let i = 0; i < pages.length; i++){
        pages[i].style.display = 'none';
    }
    // Then show the requested page
    ele.style.display = 'block';
}

// Navigation button hover style
function change(elementID) {
    //Find the requested page and alert if it's not found
    const nav = document.getElementById(elementID);
    if (!nav) {
        alert('no such element');
        return;
    }
    // Get all pages by looping through and hiding the rest
    const btn = document.getElementsByClassName('side-nav-wrapper');
    for (let i = 0; i < btn.length; i++){
        btn[i].style.color = '#eaeaea';
        btn[i].style.background = 'transparent';
    }
    // Then show the requested page
    nav.style.color = '#eaeaea';
    nav.style.background = '#2f3fe2';
}

// ------------------- Display Page Funtion Funtion end ---------------------