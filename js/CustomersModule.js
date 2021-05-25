import DataModule from "./DataModule.js"


const CustomersModule = (function () {




}());


function setDataInCustomersMainPanelLambertseter() {

    alert("JUPP")

    return { setDataInCustomersMainPanel };

}

function setDataInCustomersMainPanelFrogner() {
    
    const tableContent = document.getElementById("table-content1");

    console.log(tableContent.childNodes.innerHTML);

    let test = `<tr>
    <th class="customer-icon"><img src="/images/pizza-california.png" alt="pizza icon"></th>
    <th id="customer-name">Lars lolipop</th>
    <th id="customer-meny">Pepperoni pizza</th>
    <th>
    <th id="customer-price">500</th>
    <th><img id="customer-status" src="/images/avventer-icon.svg" alt="waiting icon"></th>
</tr>`

    tableContent.innerHTML += test;


    return { setDataInCustomersMainPanelFrogner };

}
function setDataInCustomersMainPanelGrünnerløkka() {

    alert("JUPP")

    return { setDataInCustomersMainPanelGrünnerløkka };

}
function setDataInCustomersMainPanelGrønland() {

    alert("JUPP")

    return { setDataInCustomersMainPanelGrønland };

}
export default {
    CustomersModule, setDataInCustomersMainPanelLambertseter,
    setDataInCustomersMainPanelFrogner, setDataInCustomersMainPanelGrønland,
    setDataInCustomersMainPanelGrünnerløkka
};