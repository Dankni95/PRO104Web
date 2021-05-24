import EmployeModule from './EmployeModule.js'

const selector = document.querySelector("#card-section");
const outputDiv = document.querySelector("#cardsId");
const options = document.querySelectorAll('option');


selector.addEventListener('change', () => {
    const filterCategory = EmployeModule.getAllEmployees();
    for(let i = 0; filterCategory.length; i++) {
        console.log(filterCategory[i])
    }
    console.log(filterCategory)
    if(filterCategory.category === selector.value) {
        let html = "";

        filterCategory.forEach( employe => {
            html += `
            <div class="cardo" >
                <div class="cardo-content-wrapper">
                    <div class="image-wrapper">
                        <img class="card-image" src="/images/ansatte/${employe.image}" alt="Ansatte's profil bilde">
                    </div>
                    <h2 class="name-title">${employe.name}</h2>
                    <p class="card-phone">+47 90 90 90 09</p>
                    <p class="card-job-title">Admin</p>
                    <p class="card-job-title">${employe.category}</p>
                    <button style="margin-top: 15px;" class="section-btn">Mer informasjon</button>
                </div>
            </div>

            `;
        })
        outputDiv.innerHTML = html;
    }
  
    
    
})






