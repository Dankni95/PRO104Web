import CustomersModule from "./CustomersModule.js"
import CalculationModule from "./CalculationModule.js"
import OnloadChartModule from "./ChartModule.js"


const RouteModule = (function () {}());
            
    function test(selected){
        let previousSelection = document.getElementById("selected").innerText;
    
        if (selected.trim() === previousSelection) {
            // do nothing if franchise already selected ... 
            //or else it randomzises the customers while clicking same franchise
            //over and over
        }else{
            switch (selected) {
                case "Lambertseter":
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected);
                    CalculationModule.calculateTodaysPizzaTurnover(selected);
                    CalculationModule.calculateTodaysCustomerTurnover(selected);
                    OnloadChartModule.updateChart(selected)
                    break;
                case "Frogner":
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected);
                    CalculationModule.calculateTodaysPizzaTurnover(selected)
                    CalculationModule.calculateTodaysCustomerTurnover(selected)
                    OnloadChartModule.updateChart(selected)
                    break;
                case "Grønland":
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected)
                    CalculationModule.calculateTodaysPizzaTurnover(selected)
                    CalculationModule.calculateTodaysCustomerTurnover(selected)
                    OnloadChartModule.updateChart(selected)
                    break;
                case "Grünnerløkka":
                    CustomersModule.setDataInCustomersMainPanelFrogner(selected);
                    CalculationModule.calculateTodaysTurnover(selected)
                    CalculationModule.calculateTodaysPizzaTurnover(selected)
                    CalculationModule.calculateTodaysCustomerTurnover(selected)
                    OnloadChartModule.updateChart(selected)
                    break;
                default:
                    let error = new Error("something went wrong! Please contact the IT department")
                    alert(error)
            }
        }
    }

export default { RouteModule, test }