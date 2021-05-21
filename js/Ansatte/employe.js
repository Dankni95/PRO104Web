import EmployeModule from './EmployeModule.js'

const cardSectionDiv = document.querySelector("#card-section");




cardSectionDiv.addEventListener("click", function() {
    var options = cardSectionDiv.querySelectorAll("option");
    var count = options.length;
    if(typeof(count) === "undefined" || count < 2)
    {
        department();
    }
});


cardSectionDiv.addEventListener("change", function() {
    if(cardSectionDiv.value === "add") {
        department();
    }
})

const department = () => {
    const filterCategory = EmployeModule.getAllEmployees().filter( card => card.category === cardSectionDiv.value)
    if(filterCategory.length !== 0) {
        console.log(filterCategory.length)
    }
    console.log("Added")
}




