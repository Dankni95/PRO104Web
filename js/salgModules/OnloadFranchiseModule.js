import CustomersModule from "../salgModules/CustomersModule.js"
import CalculationModule from "../salgModules/CalculationModule.js"
import OnloadChartModule from "../salgModules/ChartModule.js"
import SoldPizzaModule from "../salgModules/SoldPizzaModule.js"


const OnloadModule = (function() {
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