/*import FoodModule from './modules/food-module.js'

const foodsSection = document.querySelector("#foods-section");

let htmlTxt ="";
FoodModule.getAllFoods().forEach( food => {
    htmlTxt += `
    <div class="column">
        <div class="card">
            <section class="card-image">
                <img src="images/${food.image}">
            </section>
            
            <section class="card-content">
            <h2 >${ food.title}</h3>
            </section>

            <section class="card-price">
                <h3 class="price-text">${food.price}</h3>
            </section>
        </div>
    </div>
    
    `;

});

foodsSection.innerHTML = htmlTxt;
*/