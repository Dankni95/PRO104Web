
import DataModule from "../globalModules/DataModule.js"
import MainModule from "./MainModule.js"


const MenyModule = (function () { writeMenuItems() }());

function writeMenuItems() {
    const foodsSection = document.getElementById("food-container");
    let secondSection = document.getElementById("second-food-container");

    let allPizzas = getWholeMenu();
    let wholeMenu = [...allPizzas];

    let count = 0;
    wholeMenu.forEach(menu => {
        if (count > 2) {


            secondSection.innerHTML += `
            <div class="column is-5-desktop">
            <div class="card">
            <div class="tags has-addons">
            <span id="pizza-type" class="tag">${menu[1].bunn}</span>
            <span id="cheese-type" class="tag">${menu[2].ostetype}</span>
        <div id="sauce-type" class="tag">${menu[3].saus}
        </div>
        </div>
            <div class="card-image px-6">
            <img src="./images/${menu[5].bilde}" alt="">
            </div>
            <div class="card-content">
            <p class="price">${menu[4].pris} kr</p>
            <h1 class="title is-size-5">${menu[0].navn}</h1>
            </div>
            <footer class="card-footer">
            <p class="card-footer-item">
            <button class="button active">Rediger matrett</button>
            </p>
            </footer>
            </div>`;
            MainModule.addEventsToButtons();
        } else {
            count++
            foodsSection.innerHTML += `
            <div class="column is-5-desktop">
            <div class="card">
            <div class="tags has-addons">
            <span id="pizza-type" class="tag">${menu[1].bunn}</span>
            <span id="cheese-type" class="tag">${menu[2].ostetype}</span>
          <div id="sauce-type" class="tag has-addons">${menu[3].saus}
          </div>
          </div>
                <div class="card-image px-6">
                    <img src="./images/${menu[5].bilde}" alt="pizza-icon">
                </div>
                <div class="card-content">
                    <p class="price">${menu[4].pris} kr</p>
                    <h1 class="title is-size-5">${menu[0].navn}</h1>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <button class="button active">Rediger matrett</button>
                    </p>
                </footer>
            </div>
        </div>
        `;
            MainModule.addEventsToButtons();
        }

    });

    return { writeMenuItems };
}

function getWholeMenu() {

    let object = DataModule.getAllData().globalMeny.meny;
    let allPizzas = [];

    for (let name in object) {
        allPizzas.push(object[name]);
    }
    return allPizzas;
}


export default {
    MenyModule, writeMenuItems
};