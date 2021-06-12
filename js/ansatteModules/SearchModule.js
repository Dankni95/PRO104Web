import EmployeModule from './EmployeeData.js'
const searchEmployee = document.querySelector('.search-input');
const outputDiv = document.querySelector("#cardsId");
const modalDiv = document.querySelector('#modal-box');
const modalBg = document.querySelector('.modal-bg');
const SearchModule = (function () { }());

//Denne søke funksjonen har en bug som jeg ikke klarer å finne ut av.. Dette ser dere ved å søke på "geir" for eksempel. Da ser dere at det er en ny geir som er lagt til som en ansatt. 

//*********function to refresh and add all employes after deleting words in search input*********//  
function showAllEmployees() {
    const showAll = EmployeModule.getAllEmployees();
        showAll.forEach(employe => {
            outputDiv.innerHTML += `
                <div class="cardo" >
                    <div class="cardo-content-wrapper">
                        <div class="image-wrapper">
                            <img class="card-image" src="./images/ansatte/${employe.image}" alt="Ansatte's profil bilde">
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
//*********Getting extended information from employees by clicking the "Mer informasjon*********//  
    document.querySelectorAll('#section-btn-info').forEach(button => {
        button.addEventListener('click', (e) => {
           
            const showModalByBtn = EmployeModule.getAllEmployees().find( employe => employe.name === e.target.name);
            console.log(showModalByBtn)
            modalBg.classList.add('bg-active');
            modalDiv.innerHTML = `
                <div class="modal-box">
                    <h1 class="modal-category">Avdeling: ${showModalByBtn.category}</h1>
                    <h2>Arbeids Stilling: ${showModalByBtn.title}</h2>
                    <h2>Navn: ${showModalByBtn.name}</h2>
                    <p>Telefonnummer: ${showModalByBtn.phone}</p>
                    <div class="p-wrapper">
                        <p style="font-style: italic;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, amet reprehenderit! Voluptate nam exercitationem recusandae cupiditate! Necessitatibus nemo fuga provident totam libero eaque quae debitis vel corrupti laudantium tempora, id quas quam officia consectetur quod quaerat incidunt sequi sit. Perspiciatis laudantium alias distinctio aperiam placeat numquam? Debitis dolorem expedita rerum maxime quod repudiandae delectus labore ullam, sed, rem, autem iusto dignissimos quasi iste! Dicta a, expedita rem eligendi est autem, deserunt accusantium labore, velit quaerat neque. Assumenda similique pariatur, ipsam modi quia hic suscipit unde obcaecati praesentium tempore, eum quasi vitae iusto totam recusandae? In ex placeat dolor soluta error?</p>
                    </div>
                    
                </div>
            `;
        })
    })   
}


//*********Search for employees*********// 
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
//*********Getting extended information from employees by clicking the "Mer informasjon*********//
    document.querySelectorAll('#section-btn-info').forEach(button => {
        button.addEventListener('click', (e) => {
           
            const showModalByBtn = EmployeModule.getAllEmployees().find( employe => employe.name === e.target.name);
            console.log(showModalByBtn)
            modalBg.classList.add('bg-active');
                modalDiv.innerHTML = `
                    <div class="modal-box">
                        <h1 class="modal-category">Avdeling: ${showModalByBtn.category}</h1>
                        <h2>Arbeids Stilling: ${showModalByBtn.title}</h2>
                        <h2>Navn: ${showModalByBtn.name}</h2>
                        <p>Telefonnummer: ${showModalByBtn.phone}</p>
                        <div class="p-wrapper">
                            <p style="font-style: italic;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, amet reprehenderit! Voluptate nam exercitationem recusandae cupiditate! Necessitatibus nemo fuga provident totam libero eaque quae debitis vel corrupti laudantium tempora, id quas quam officia consectetur quod quaerat incidunt sequi sit. Perspiciatis laudantium alias distinctio aperiam placeat numquam? Debitis dolorem expedita rerum maxime quod repudiandae delectus labore ullam, sed, rem, autem iusto dignissimos quasi iste! Dicta a, expedita rem eligendi est autem, deserunt accusantium labore, velit quaerat neque. Assumenda similique pariatur, ipsam modi quia hic suscipit unde obcaecati praesentium tempore, eum quasi vitae iusto totam recusandae? In ex placeat dolor soluta error?</p>
                        </div>
                        
                    </div>
                `;
        })
    })
//*********If the search input is empty*********// 
    function showNameArray(nameArray) {
        const html = !nameArray.length ? `
            <div class="cardo" >
                    <div class="cardo-content-wrapper">
                        <div class="image-wrapper">
                            <img class="card-image" src="./PRO104Web/images/ansatte/${employe.image}" alt="Ansatte's profil bilde">
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
