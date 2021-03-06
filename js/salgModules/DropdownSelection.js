import DropdownModule from "../salgModules/DropdownModule.js"
import RouteModule from "../salgModules/RouteModule.js"


const DropdownSelection = (function () {
    let selected = document.getElementById("selected");
    let dropdown = document.getElementsByClassName("dropdown")[0];
    let dropdownMenu = document.getElementById("dropdown-menu");


    document.getElementById("dropdown-content").addEventListener("click", function (e) {
        RouteModule.changeRoute(e.target.innerText);
        selected.innerHTML = e.target.innerText;
        dropdown.className = "dropdown";
        let array = [...dropdownMenu.children];

        array.forEach(element => {
            element.className = "dropdown-item"
        });
        e.target.className = "dropdown-item is-active"

    }, false);

    document.getElementById("dropdown-content").addEventListener("mouseleave", function () {
        DropdownModule.activateDropdownMenu();
    }, false);
}());


export default { DropdownSelection };