import EmployeModule from './EmployeModule.js'


const selector = document.querySelector("#card-section");
const outputDiv = document.querySelector("#cardsId");
const options = document.querySelectorAll('option');
const lambertseter = document.getElementById("lamb");




selector.addEventListener('change', (e) => {
    const filterCategory = EmployeModule.getAllEmployees().filter(item => item.category === e.target.value);

            let html = "";
            console.log(filterCategory)
            filterCategory.forEach( employe => {
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
                        <button style="margin-top: 15px;" class="section-btn">Mer informasjon</button>
                    </div>
                </div>
    
                `;
            })
            outputDiv.innerHTML = html;
    
    
   
    
  
    
    
})






