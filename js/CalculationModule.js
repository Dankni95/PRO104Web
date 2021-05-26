import DataModule from "./DataModule.js"
import PaintPercentageModule from './PaintPercentageModule.js'



const CalculationModule = (function () { }());


function calculateTodaysTurnover(dynamicFranchise) {
    let lastTurnover = parseInt(DataModule.getAllData()[dynamicFranchise]?.salg);
    let allPayments = 0;
    let allCustomersPayment = document.getElementsByClassName("customer-price");

    let array = [...allCustomersPayment]
    array.forEach(payment => {
        allPayments += parseInt(payment.innerText);
    });

    PaintPercentageModule.paintPercentageToSite(calculatePercentage(allPayments, lastTurnover));
    PaintPercentageModule.paintTurnoverToSite(calculateTurnover(allPayments, lastTurnover))


}
function calculateTodaysPizzaTurnover(dynamicFranchise) {
    let lastTurnover = parseInt(DataModule.getAllData()[dynamicFranchise]?.pizzas);
    let allCustomersPayment = document.getElementsByClassName("customer-price");

    let array = [...allCustomersPayment]
    let allPayments = array.length;
    PaintPercentageModule.paintPizzaPercentageToSite(calculatePercentage(allPayments, lastTurnover));
    PaintPercentageModule.paintPizzaTurnoverToSite(calculateTurnover(allPayments, lastTurnover));

}

function calculateTodaysCustomerTurnover(dynamicFranchise) {
    let lastTurnover = parseInt(DataModule.getAllData()[dynamicFranchise]?.kunder);
    let allCustomersPayment = document.getElementsByClassName("customer-price");

    let array = [...allCustomersPayment]
    let allPayments = array.length;

    PaintPercentageModule.paintCustomerTurnoverToSite(calculateTurnover(allPayments, lastTurnover));
    PaintPercentageModule.paintCustomerPercentageToSite(calculatePercentage(allPayments, lastTurnover));

}


function calculatePercentage(todaysTurnover, previousTurnover) {
    let percentage = (todaysTurnover / previousTurnover) * 100
    console.log(percentage);
    return parseFloat(percentage.toFixed(2));

}

function calculateTurnover(todaysTurnover, previousTurnover) {
    let turnover = todaysTurnover + previousTurnover;
    return parseInt(turnover);
}




export default {
    CalculationModule, calculateTodaysTurnover, calculateTodaysPizzaTurnover, calculateTodaysCustomerTurnover
};