import EmployeModule from './EmployeModule.js'

const searchEmployee = document.querySelector('.search-input');
const outputDiv = document.querySelector("#cardsId");

// function to refresh and add all employes after deleting words in search input
function showAllEmployees() {
    const showAll = EmployeModule.getAllEmployees();
    showAll.forEach( employe => {
        outputDiv.innerHTML += `
            <div class="cardo" >
                <div class="cardo-content-wrapper">
                    <div class="image-wrapper">
                        <img class="card-image" src="/images/ansatte/${employe.image}" alt="Ansatte's profil bilde">
                    </div>
                    <h2 class="name-title">${employe.name}</h2>
                    <p class="card-phone">${employe.phone}</p>
                    <p class="card-job-title">${employe.title}</p>
                    <p class="card-job-title">${employe.category}</p>
                    <button name="${employe.name}" style="margin-top: 15px;" id="section-btn-info" class="section-btn">Mer informasjon</button>
                </div>
            </div>
       `;
    })
}

// Search for employees
searchEmployee.addEventListener('input', () => {
    const newSearch = searchEmployee.value;
    const employeeName = EmployeModule.getAllEmployees().filter( item => item.name);
    let outPutDiv = document.querySelector('#cardsId');
   employeeName.forEach( employe => {
       console.log("hei")
       if(newSearch === employe.name.toLowerCase() || newSearch === employe.name.toUpperCase()) {
           outPutDiv.innerHTML = "";
           outPutDiv.innerHTML = `
            <div class="cardo" >
                <div class="cardo-content-wrapper">
                    <div class="image-wrapper">
                        <img class="card-image" src="/images/ansatte/${employe.image}" alt="Ansatte's profil bilde">
                    </div>
                    <h2 class="name-title">${employe.name}</h2>
                    <p class="card-phone">${employe.phone}</p>
                    <p class="card-job-title">${employe.title}</p>
                    <p class="card-job-title">${employe.category}</p>
                    <button name="${employe.name}" style="margin-top: 15px;" id="section-btn-info" class="section-btn">Mer informasjon</button>
                </div>
            </div>
           `;
           
       } else if( newSearch === "") {
            outPutDiv.innerHTML = "";
            showAllEmployees();
       }
   })

  
})