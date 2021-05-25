const DropdownSelection = (function () {
    let selected = document.getElementById("selected");
    let dropdown = document.getElementsByClassName("dropdown")[0];
    let dropdownMenu = document.getElementById("dropdown-menu");

    
    const DropdownSelection = document.getElementById("dropdown-content").addEventListener("click", function (e) {
        selected.innerHTML = e.target.innerHTML;
        dropdown.className = "dropdown";
        
        let array = [ ...dropdownMenu.children ];

        array.forEach(element => {
            element.className = "dropdown-item"
        });
        e.target.className = "dropdown-item is-active"

    }, false);


}());


export default { DropdownSelection };