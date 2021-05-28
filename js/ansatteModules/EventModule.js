import EmployeModule from './EmployeeData.js';


const EventModule = (window.onload = function data() {
}());

const selector = document.querySelector("#card-section");
const outputDiv = document.querySelector("#cardsId");
const modalDiv = document.querySelector('#modal-box');




    // Showing All Employees right away
const showAll = () => {
    const showAllFilter = EmployeModule.getAllEmployees();
    let showAllHtml = "";

    showAllFilter.forEach(employe => {
        showAllHtml += `
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
    outputDiv.innerHTML = showAllHtml;
    let modalBg = document.querySelector('.modal-bg');

    document.querySelectorAll('#section-btn-info').forEach(button => {
        button.addEventListener('click', (e) => {

            const foundEmployee = showAllFilter.find(employe => employe.name === e.target.name);
            modalBg.classList.add('bg-active');
            modalDiv.innerHTML = `
                <div class="modal-box">
                    <h1 class="modal-category">Avdeling: ${foundEmployee.category}</h1>
                    <h2>Arbeids Stilling: ${foundEmployee.title}</h2>
                    <h2>Navn: ${foundEmployee.name}</h2>
                    <p>Telefonnummer: ${foundEmployee.phone}</p>
                    <div class="p-wrapper">
                        <p style="font-style: italic;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, amet reprehenderit! Voluptate nam exercitationem recusandae cupiditate! Necessitatibus nemo fuga provident totam libero eaque quae debitis vel corrupti laudantium tempora, id quas quam officia consectetur quod quaerat incidunt sequi sit. Perspiciatis laudantium alias distinctio aperiam placeat numquam? Debitis dolorem expedita rerum maxime quod repudiandae delectus labore ullam, sed, rem, autem iusto dignissimos quasi iste! Dicta a, expedita rem eligendi est autem, deserunt accusantium labore, velit quaerat neque. Assumenda similique pariatur, ipsam modi quia hic suscipit unde obcaecati praesentium tempore, eum quasi vitae iusto totam recusandae? In ex placeat dolor soluta error?</p>
                    </div>
                    
                </div>
            `;


        })
    })

    modalBg.addEventListener('click', () => {
        modalBg.classList.remove('bg-active');
    })

}

showAll();



// Showing Employees
selector.addEventListener('change', (e) => {

    const filterCategory = EmployeModule.getAllEmployees().filter(item => item.category === e.target.value);
    const filterAll = EmployeModule.getAllEmployees().filter(item => item.all === e.target.value);

    let html = "";
    // Showing Employees based on chosen department
    filterCategory.forEach(employe => {
        html += `
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
    // Showing all employees based on the choice "Alle avdelinger"
    filterAll.forEach(employe => {
        html += `
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
    outputDiv.innerHTML = html;


    // Showing extended information on indidvidual employees
    let modalBg = document.querySelector('.modal-bg');

    document.querySelectorAll('#section-btn-info').forEach(button => {
        button.addEventListener('click', (e) => {

            const foundEmployee = filterCategory.find(employe => employe.name === e.target.name);
            modalBg.classList.add('bg-active');
            modalDiv.innerHTML = `
                <div class="modal-box">
                    <h1 class="modal-category">Avdeling: ${foundEmployee.category}</h1>
                    <h2>Arbeids Stilling: ${foundEmployee.title}</h2>
                    <h2>Navn: ${foundEmployee.name}</h2>
                    <p>Telefonnummer: ${foundEmployee.phone}</p>
                    <div class="p-wrapper">
                        <p style="font-style: italic;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, amet reprehenderit! Voluptate nam exercitationem recusandae cupiditate! Necessitatibus nemo fuga provident totam libero eaque quae debitis vel corrupti laudantium tempora, id quas quam officia consectetur quod quaerat incidunt sequi sit. Perspiciatis laudantium alias distinctio aperiam placeat numquam? Debitis dolorem expedita rerum maxime quod repudiandae delectus labore ullam, sed, rem, autem iusto dignissimos quasi iste! Dicta a, expedita rem eligendi est autem, deserunt accusantium labore, velit quaerat neque. Assumenda similique pariatur, ipsam modi quia hic suscipit unde obcaecati praesentium tempore, eum quasi vitae iusto totam recusandae? In ex placeat dolor soluta error?</p>
                    </div>
                    
                </div>
            `;


        })
    })

    document.querySelectorAll('#section-btn-info').forEach(button => {
        button.addEventListener('click', (e) => {

            const foundAllEmployee = filterAll.find(employe => employe.name === e.target.name);
            modalBg.classList.add('bg-active');
            console.log(foundAllEmployee)
            modalDiv.innerHTML = `
                <div class="modal-box">
                    <h1 class="modal-category">Avdeling: ${foundAllEmployee.category}</h1>
                    <h2>Arbeids Stilling: ${foundAllEmployee.title}</h2>
                    <h2>Navn: ${foundAllEmployee.name}</h2>
                    <p>Telefonnummer: ${foundAllEmployee.phone}</p>
                    <div class="p-wrapper">
                        <p style="font-style: italic;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, amet reprehenderit! Voluptate nam exercitationem recusandae cupiditate! Necessitatibus nemo fuga provident totam libero eaque quae debitis vel corrupti laudantium tempora, id quas quam officia consectetur quod quaerat incidunt sequi sit. Perspiciatis laudantium alias distinctio aperiam placeat numquam? Debitis dolorem expedita rerum maxime quod repudiandae delectus labore ullam, sed, rem, autem iusto dignissimos quasi iste! Dicta a, expedita rem eligendi est autem, deserunt accusantium labore, velit quaerat neque. Assumenda similique pariatur, ipsam modi quia hic suscipit unde obcaecati praesentium tempore, eum quasi vitae iusto totam recusandae? In ex placeat dolor soluta error?</p>
                    </div>
                    
                </div>
            `;


        })
    })

    modalBg.addEventListener('click', () => {
        modalBg.classList.remove('bg-active');
    })
});








export default {EventModule, showAll};



