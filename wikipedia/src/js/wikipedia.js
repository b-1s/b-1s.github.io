var t=setInterval(runFunction,500);
localStorage.setItem("theme", "dark");

const isLightMode = localStorage.getItem("theme") === "light";

function runFunction() {
    /*searchBarValue = document.querySelector("#searchbar").value;
    searchQuery = document.querySelector("#searchquery");
    searchQuery.innerHTML = "Query: " + searchBarValue;*/
    search_articles();
}
function search_articles() {
    let input = document.getElementById('header-search-bar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('header-search-item');
    let searchItems = document.getElementById('header-search-items');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        } else if (input.length == 0) {
            x[i].style.display="none";
            searchItems.style.display="none";
        } else {
            x[i].style.display="list-item";   
            searchItems.style.display="initial";              
        }
    }
}
var body = document.body;

function lightMode() {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", "light");
}

if (isLightMode) {
    body.classList.toggle("light-mode");
}