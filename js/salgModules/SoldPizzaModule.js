
// This was overcomplicated and half-working, i am not statisfied
// with the outcome of this module, but do not have time to fix it more.

const SoldPizzaModule = (function () { }());
const sidepanel = document.getElementsByClassName("sidepanel-content")[0];

function writeToPizzaRightPanel() {
    let allCustomers = document.getElementsByClassName("activated");
    let customerArray = [...allCustomers];

    let allPizzas = [];
    customerArray.forEach(element => {
        let pizzaMenu = element.getElementsByClassName("customer-meny")[0];
        allPizzas.push(pizzaMenu.innerText)
    });

    for (let i = 0; i < 4; i++) {
        let icons = allCustomers[i].getElementsByClassName("customer-icon")[0].firstChild.src
        let count = countAllCustomersPizzas(allPizzas);

        let pizzaCount = count[allPizzas[i]];
        let pizzaName = allPizzas[i];
        sidepanel.innerHTML += `<div class="columns">
                <img class="sidepanel-content-icon" src="./${icons}" alt="placeholder icon">
                <h1 class="column">${pizzaCount}  ${pizzaName} solgt!</h1>
            </div>`;
    }
}

function countAllCustomersPizzas(allPizzas) {
    let pizzaCount = {};
    for (let i = 0; i < allPizzas.length; i++) {

        if (!pizzaCount.hasOwnProperty(allPizzas[i])) {
            pizzaCount[allPizzas[i]] = 1;
        }
        else {
            pizzaCount[allPizzas[i]]++;
        }
    }
    return pizzaCount;
}


function clearSidepanelPizzas() {
    sidepanel.innerHTML = null;
}

export default { SoldPizzaModule, writeToPizzaRightPanel, clearSidepanelPizzas };
