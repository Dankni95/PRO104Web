import CustomersModule from "./CustomersModule.js"
import CalculationModule from "./CalculationModule.js"

const OnloadModule = (window.onload = function data() {
    let onloadFranchise = document.getElementById("selected").innerText

    if (onloadFranchise === "Lambertseter") {
        CustomersModule.setDataInCustomersMainPanelFrogner("Lambertseter");
        CalculationModule.calculateTodaysTurnover("Lambertseter");
        CalculationModule.calculateTodaysPizzaTurnover("Lambertseter");
        CalculationModule.calculateTodaysCustomerTurnover("Lambertseter");
        console.log("yo");
    }
}());

export default OnloadModule;