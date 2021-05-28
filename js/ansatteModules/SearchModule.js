import EmployeModule from './EmployeeData.js'

const SearchModule = (function () { }());

const searchEmployee = document.querySelector('.search-input');
const outputDiv = document.querySelector("#cardsId");

// function to refresh and add all employes after deleting words in search input
function showAllEmployees() {
    const showAll = EmployeModule.getAllEmployees();
    showAll.forEach(employe => {
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
searchEmployee.addEventListener('input', (e) => {
    let nameArray = [];
    let search = searchEmployee.value;

    if (e.target.value) {
        nameArray = EmployeModule.getAllEmployees().filter(name => name.name.toLowerCase().includes(e.target.value));
        nameArray = nameArray.map(employe => `
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
            `);

    } else if (search === "") {
        showAllEmployees();
    }

    showNameArray(nameArray)

    function showNameArray(nameArray) {
        const html = !nameArray.length ? `
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
           ` : nameArray.join('');
        outputDiv.innerHTML = html;
    }
})

export default { SearchModule };
