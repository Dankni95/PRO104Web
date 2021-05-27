import CustomersModule from "./CustomersModule.js"
import CalculationModule from "./CalculationModule.js"
import OnloadChartModule from "./ChartModule.js"
import SoldPizzaModule from "./SoldPizzaModule.js"


const OnloadModule = (window.onload = function data() {
    let onloadFranchise = document.getElementById("selected").innerText

    if (onloadFranchise === "Lambertseter") {
        SoldPizzaModule.clearSidepanelPizzas()
        CustomersModule.setDataInCustomersMainPanelFrogner("Lambertseter");
        CalculationModule.calculateTodaysTurnover("Lambertseter");
        CalculationModule.calculateTodaysPizzaTurnover("Lambertseter");
        CalculationModule.calculateTodaysCustomerTurnover("Lambertseter");
        OnloadChartModule.updateChart("Lambertseter");
        SoldPizzaModule.writeToPizzaRightPanel()
    }
}());

export default OnloadModule;