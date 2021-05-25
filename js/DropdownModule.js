const DropdownModule = (function () {
    document.getElementById("activate").addEventListener("mouseenter", function (e) {
        activateDropdownMenu();
    }, false);

    document.getElementById("activate").addEventListener("mouseleave", function (e) {
        activateDropdownMenu();
    }, false);



}());

function activateDropdownMenu() {
    let dropdown = document.getElementsByClassName("dropdown")[0];

    if (dropdown.className === "dropdown") {
        dropdown.className = "dropdown is-active"
    } else {
        dropdown.className = "dropdown"
    }

    return { activateDropdownMenu }
}


export default { DropdownModule, activateDropdownMenu };