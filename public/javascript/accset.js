// ------------------- User account settings display start ---------------------

// Displays the needed page
function show(elementID) {
    //Find the requested page and alert if it's not found
    const ele = document.getElementById(elementID);
    if (!ele) {
        alert('no such element');
        return;
    }
    // Get all pages by looping through and hiding the rest
    const pages = document.getElementsByClassName('container-body');
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
    const btn = document.getElementsByClassName('navigation-btn');
    for (let i = 0; i < btn.length; i++){
        btn[i].style.color = '#eaeaea';
        btn[i].style.background = 'transparent';
    }
    // Then show the requested page
    nav.style.color = '#eaeaea';
    nav.style.background = '#2f3fe2';
}

// ------------------- User account settings display end ---------------------





// ------------------- Fund pqge copy button script start ---------------------

let copyTokenBtn = document.getElementById('copy_token');
copyTokenBtn.addEventListener('click', function() {
    let apiToken = document.getElementById('api_token').innerText;
    let copyTokenTooltip = document.getElementById('copy_token_tooltip');
    const el = document.createElement('input');
    
    el.value = apiToken;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);    
    copyTokenTooltip.innerHTML = "Copied ✓";  
});
copyTokenBtn.addEventListener('mouseout', function() {
    let copyTokenTooltip = document.getElementById('copy_token_tooltip');
    copyTokenTooltip.innerHTML = "Copy to clipboard";
})

// ------------------- Fund sub-page copy button script end ---------------------





// ------------------- Fund sub-page choose file script start ---------------------

const impFile = document.getElementById("impFile");
const previewContainer = document.getElementById("image-preview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
impFile.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";
        reader.addEventListener("load", function(){
            previewImage.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    }else{
        previewDefaultText.style.display = "block";
        previewImage.style.display = "none";
        previewImage.setAttribute("src", "");
    }
});

// ------------------- Fund sub-page choose file script end ---------------------