import CalculationModule from "../salgModules/CalculationModule.js"
import DataModule from "../globalModules/DataModule.js"


// Since all customers menus including prices are randomized when clicking different franchises
// the graphs values move everytime new franchise is generated, at least the prices stay consistent when
// on screen :)


const ChartModule = (function() {}());
let onloadPieChart = document.getElementsByClassName("mypiechart")[0];

function updateChart(dynamicFranchise) {
    let previousTurnover = parseInt(DataModule.getAllData()[dynamicFranchise]?.salg);
    let todaysTurnover = CalculationModule.calculateTodaysTurnover(dynamicFranchise);
    return todaysTurnover + previousTurnover;

}

function paintChart() {
    onloadPieChart.innerHTML = `
    <pie-chart id="pieChart">
                        <pchart-element name=" Lambertseter " value="${updateChart("Lambertseter")
        }" colour="#00A676">
                        <pchart-element name=" Frogner " value="${updateChart("Frogner")
        }" colour="#ffffff">
                            <pchart-element name=" Grønland " value="${updateChart("Grønland")
        }" colour="#008DD5">
                                <pchart-element name=" Grünnerløkka " value="${updateChart("Grünnerløkka")
        }" colour="#EA7C69">
                    </pie-chart>`
}

export default { ChartModule, updateChart, paintChart }


