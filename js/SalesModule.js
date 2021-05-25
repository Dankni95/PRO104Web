import DataModule from "./DataModule.js"
import CustomersModule from "./CustomersModule.js"


const SalesModule = (function () {
    let franchise = document.getElementById("selected");
    const turnover = document.getElementById("turnover");
    const pizzaSold = document.getElementById("pizza-sold");
    const customers = document.getElementById("customers");

    const changeFranchise = new MutationObserver(function () {
        console.log(franchise.innerText);
        switch (franchise.innerText) {
            case "Lambertseter":
                changeToLambertseterFranchise();
                CustomersModule.setDataInCustomersMainPanelLambertseter();
                break;
            case "Frogner":
                changeToFrognerFranchise();
                CustomersModule.setDataInCustomersMainPanelFrogner()
                break;
            case "Grønland":
                changeToGrønlandFranchise();
                CustomersModule.setDataInCustomersMainPanelGrønland();
                break;
            case "Grünnerløkka":
                changeToGrünnerløkkaFranchise();
                CustomersModule.setDataInCustomersMainPanelGrünnerløkka();
                break;
            default:
            let error = new Error ("something went wrong! Please contact the IT department")
            alert(error)
        }
    });

    function changeToLambertseterFranchise() {


        turnover.innerText = DataModule.getAllData().Lambertseter.salg + `,-`
        pizzaSold.innerText = DataModule.getAllData().Lambertseter.pizzas
        customers.innerText = DataModule.getAllData().Lambertseter.kunder

    }

    function changeToFrognerFranchise() {
        turnover.innerText = DataModule.getAllData().Frogner.salg + `,-`
        pizzaSold.innerText = DataModule.getAllData().Frogner.pizzas
        customers.innerText = DataModule.getAllData().Frogner.kunder
    }
    function changeToGrønlandFranchise() {
        turnover.innerText = DataModule.getAllData().Grønland.salg + `,-`
        pizzaSold.innerText = DataModule.getAllData().Grønland.pizzas
        customers.innerText = DataModule.getAllData().Grønland.kunder

    }
    function changeToGrünnerløkkaFranchise() {
        turnover.innerText = DataModule.getAllData().Grünnerløkka.salg + `,-`
        pizzaSold.innerText = DataModule.getAllData().Grünnerløkka.pizzas
        customers.innerText = DataModule.getAllData().Grünnerløkka.kunder

    }




    changeFranchise.observe(franchise, { subtree: true, childList: true });
}());


export default { SalesModule }