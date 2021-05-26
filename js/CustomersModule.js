import DataModule from "./DataModule.js"


const CustomersModule = (function () { }());

function setDataInCustomersMainPanelFrogner(dynamicFranchise) {
    const tableTitle = document.getElementsByClassName("table-title")[0].parentNode;
    let object = DataModule.getAllData()[dynamicFranchise]?.dagensKunder.navn;
    
    
    clearBeforeWritingNewCustomers(tableTitle);
    for (const name in object) {
        let newContentTable = document.createElement("tr");
        newContentTable.className = "activated"

        let insertedNode = tableTitle.insertBefore(newContentTable, null)

        let randomPizzaMenu = generateRandomCustomerMenu();

        insertedNode.innerHTML += `<tr>
        <th class="customer-icon"><img src="/images/${randomPizzaMenu[5].bilde}" alt="pizza icon"></th>
        <th class="customer-name">${name}</th>
        <th class="customer-meny">${randomPizzaMenu[0].navn}</th>
        <th>
        <th class="customer-price">${randomPizzaMenu[4].pris}</th>
        <th><img class="customer-status" src="/images/${object[name][1].status}-icon.svg" alt="waiting icon"></th>
        </tr>`;
    }

    return { setDataInCustomersMainPanelFrogner };
}

function generateRandomCustomerMenu() {
    let object = DataModule.getAllData().globalMeny.meny;
    let allPizzas = [];

    for (let name in object) {
        allPizzas.push(object[name]);
    }

    return allPizzas[[allPizzas.length * Math.random() << 0]];
}

function clearBeforeWritingNewCustomers(tableTitle){
    let clearAllCustomers = tableTitle.getElementsByClassName('activated');

    if (clearAllCustomers.length > 0) {
        let array = [...clearAllCustomers]
        array.forEach(n => n.remove());
    }

}

export default {
    CustomersModule, setDataInCustomersMainPanelFrogner
};