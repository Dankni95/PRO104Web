import DataModule from "./DataModule.js"
import PaintPercentageModule from './PaintPercentageModule.js'
import OnloadChartModule from "./ChartModule.js"


const CalculationModule = (function () { }());
function calculateTodaysTurnover(dynamicFranchise) {
    let lastTurnover = parseInt(DataModule.getAllData()[dynamicFranchise]?.salg);
    console.log(lastTurnover);
    let allPayments = 0;
    let allCustomersPayment = document.getElementsByClassName("customer-price");

    let array = [...allCustomersPayment]
    array.forEach(payment => {
        allPayments += parseInt(payment.innerText);
    });

    PaintPercentageModule.paintPercentageToSite(calculatePercentage(allPayments, lastTurnover));
    PaintPercentageModule.paintTurnoverToSite(calculateTurnover(allPayments, lastTurnover))

    return allPayments;
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
    OnloadChartModule.paintChart();

}


function calculatePercentage(todaysTurnover, previousTurnover) {
    let percentage = (todaysTurnover / previousTurnover) * 100
    return parseFloat(percentage.toFixed(2));

}

function calculateTurnover(todaysTurnover, previousTurnover) {
    let turnover = parseInt(todaysTurnover) + parseInt(previousTurnover);
    return parseInt(turnover);
}


export default {
    CalculationModule, calculateTodaysTurnover, calculateTodaysPizzaTurnover, calculateTodaysCustomerTurnover
};