import DataModule from "./DataModule.js"
import CustomersModule from "./CustomersModule.js"
import CalculationModule from "./CalculationModule.js"


const RouteModule = (function () {
    let franchise = document.getElementById("selected");
    const turnover = document.getElementById("turnover");
    const pizzaSold = document.getElementById("pizza-sold");
    const customers = document.getElementById("customers");


    const changeFranchise = new MutationObserver(function () {


        switch (franchise.innerText) {
            case "Lambertseter":
                CustomersModule.setDataInCustomersMainPanelFrogner(franchise.innerText);
                CalculationModule.calculateTodaysTurnover(franchise.innerText);
                CalculationModule.calculateTodaysPizzaTurnover(franchise.innerText);
                CalculationModule.calculateTodaysCustomerTurnover(franchise.innerText);
                break;
            case "Frogner":
                CustomersModule.setDataInCustomersMainPanelFrogner(franchise.innerText);
                CalculationModule.calculateTodaysTurnover(franchise.innerText);
                CalculationModule.calculateTodaysPizzaTurnover(franchise.innerText)
                CalculationModule.calculateTodaysCustomerTurnover(franchise.innerText)
                break;
            case "Grønland":
                CustomersModule.setDataInCustomersMainPanelFrogner(franchise.innerText);
                CalculationModule.calculateTodaysTurnover(franchise.innerText)
                CalculationModule.calculateTodaysPizzaTurnover(franchise.innerText)
                CalculationModule.calculateTodaysCustomerTurnover(franchise.innerText)
                break;
            case "Grünnerløkka":
                CustomersModule.setDataInCustomersMainPanelFrogner(franchise.innerText);
                CalculationModule.calculateTodaysTurnover(franchise.innerText)
                CalculationModule.calculateTodaysPizzaTurnover(franchise.innerText)
                CalculationModule.calculateTodaysCustomerTurnover(franchise.innerText)
                break;
            default:
                let error = new Error("something went wrong! Please contact the IT department")
                alert(error)
        }
    });


    changeFranchise.observe(franchise, { subtree: true, childList: true });
}());


export default { RouteModule }