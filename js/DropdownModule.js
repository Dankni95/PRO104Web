const DropdownModule = (function () {
    document.getElementById("activate").addEventListener("click", function (e) {
        activateDropdownMenu();
    }, false);


    function activateDropdownMenu() {
        let dropdown = document.getElementsByClassName("dropdown")[0];

        if (dropdown.className === "dropdown") {
            dropdown.className = "dropdown is-active"
        } else {
            dropdown.className = "dropdown"
        }

    }
    const getDropdownSelection = () => DropdownSelection
    return { getDropdownSelection }

}());


export default { DropdownModule };