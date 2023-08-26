var t=setInterval(runFunction,500);

function runFunction() {
    /*searchBarValue = document.querySelector("#searchbar").value;
    searchQuery = document.querySelector("#searchquery");
    searchQuery.innerHTML = "Query: " + searchBarValue;*/
    search_animal();
}
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}