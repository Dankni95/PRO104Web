

const PaintPercentageModule = (function () { }());
const lastTurnoverContent = document.getElementById("turnover");
const lastPizzaSoldContent = document.getElementById("pizza-sold");
const lastCustomersContent = document.getElementById("customers");

const salesTurnoverPercentage = document.getElementById("sales-percentage");
const pizzaTurnoverPercentage = document.getElementById("pizza-percentage");
const customerTurnoverPercentage = document.getElementById("customer-percentage");

function paintPercentageToSite(percentage) {
    salesTurnoverPercentage.innerText = percentage + `%`;
}
function paintPizzaPercentageToSite(percentage) {
    pizzaTurnoverPercentage.innerText = percentage + `%`;
}

function paintCustomerPercentageToSite(percentage) {
    customerTurnoverPercentage.innerText = percentage + `%`;
}

function paintTurnoverToSite(turnoverTotal) {
    lastTurnoverContent.innerText = turnoverTotal + `,-`;
}

function paintPizzaTurnoverToSite(turnoverTotal) {
    lastPizzaSoldContent.innerText = turnoverTotal;
}

function paintCustomerTurnoverToSite(turnoverTotal) {
    lastCustomersContent.innerText = turnoverTotal;
}

export default {
    PaintPercentageModule, paintPercentageToSite,
    paintTurnoverToSite, paintPizzaPercentageToSite: paintPizzaPercentageToSite,
    paintPizzaTurnoverToSite, paintCustomerPercentageToSite,
    paintCustomerTurnoverToSite
};