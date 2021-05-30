import CustomersModule from "../salgModules/CustomersModule.js"
import CalculationModule from "../salgModules/CalculationModule.js"
import OnloadChartModule from "../salgModules/ChartModule.js"
import SoldPizzaModule from "../salgModules/SoldPizzaModule.js"


const RouteModule = (function () {}());
            
    function changeRoute(selected){
        let previousSelection = document.getElementById("selected").innerText;
    
        console.log(previousSelection, selected);
        if (selected.trim() === previousSelection) {
            // do nothing if franchise already selected ... 
            //or else it randomzises the customers while clicking same franchise
            //over and over
        }else{
            switch (selected) {
                case "Lambertseter":
                    SoldPizzaModule.clearSidepanelPizzas();
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected);
                    CalculationModule.calculateTodaysPizzaTurnover(selected);
                    CalculationModule.calculateTodaysCustomerTurnover(selected);
                    OnloadChartModule.updateChart(selected)
                    SoldPizzaModule.writeToPizzaRightPanel()
                    break;
                case "Frogner":
                    SoldPizzaModule.clearSidepanelPizzas();
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected);
                    CalculationModule.calculateTodaysPizzaTurnover(selected)
                    CalculationModule.calculateTodaysCustomerTurnover(selected)
                    OnloadChartModule.updateChart(selected)
                    SoldPizzaModule.writeToPizzaRightPanel()
                    break;
                case "Grønland":
                    SoldPizzaModule.clearSidepanelPizzas();
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected)
                    CalculationModule.calculateTodaysPizzaTurnover(selected)
                    CalculationModule.calculateTodaysCustomerTurnover(selected)
                    OnloadChartModule.updateChart(selected)
                    SoldPizzaModule.writeToPizzaRightPanel()
                    break;
                case "Grünnerløkka":
                    SoldPizzaModule.clearSidepanelPizzas();
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected)
                    CalculationModule.calculateTodaysPizzaTurnover(selected)
                    CalculationModule.calculateTodaysCustomerTurnover(selected)
                    OnloadChartModule.updateChart(selected)
                    SoldPizzaModule.writeToPizzaRightPanel()
                    break;
                default:
                    let error = new Error("something went wrong! Please contact the IT department")
                    alert(error)
            }
        }
    }

export default { RouteModule, changeRoute }