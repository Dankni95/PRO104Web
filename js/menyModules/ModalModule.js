const ModalModule = (function () { }());
let doughType = document.getElementById("pizza-dough");
let cheeseType = document.getElementById("pizza-cheese");
let sauceType = document.getElementById("pizza-sauce");
let priceInput = document.getElementById("price-number");
let successNotification = document.getElementById("success-save");
let errorNotificaiton = document.getElementById("danger-error");


function setPreExistingValues(element) {
    let card = element.parentNode
    let dough = card.children[0].firstChild.nextSibling.innerText
    let price = card.children[2].firstChild.nextSibling.innerText.match(/\d+/)[0];
    let cheese = card.children[0].children[1].innerText;
    let sauce = card.children[0].children[2].innerText;



    //preset value 
    priceInput.value = price;

    // preset option
    for (let i = 0; i < doughType.options.length; i++) {
        if (doughType.options[i].value === dough) {
            doughType.options[i].selected = true;
        }
    }
    for (let i = 0; i < cheeseType.options.length; i++) {
        if (cheeseType.options[i].value === cheese) {
            cheeseType.options[i].selected = true;
        }
    }

    for (let i = 0; i < sauceType.options.length; i++) {
        if (sauceType.options[i].value === sauce) {
            sauceType.options[i].selected = true;
        }
    }

}

function setUpdatedValues(element) {
    let card = element.parentNode
    let dough = card.children[0].firstChild.nextSibling
    let price = card.children[2].firstChild.nextSibling;
    let cheese = card.children[0].children[1];
    let sauce = card.children[0].children[2];

    dough.innerText = doughType.value;
    price.innerText = `${priceInput.value}  kr`;
    cheese.innerText = cheeseType.value;
    sauce.innerText = sauceType.value;

}

function showSuccessMessage(element){
    successNotification.className = "notification"
    document.getElementById("notification-text").innerHTML = "Endringene på <strong>" +element.parentNode.parentNode.children[2].lastChild.previousSibling.innerText + "</strong> er lagret";
    setTimeout(() => { successNotification.classList = "notification is-hidden"; }, 3000);
}

function showErrorMessage(){
    errorNotificaiton.className = "notification"
    document.getElementById("error-text").innerHTML = "Denne funksjonen er ikke implementert. Vennligst kontakt IT service-desk med spørsmål";
    setTimeout(() => { errorNotificaiton.classList = "notification is-hidden"; }, 3500);
}


export default { ModalModule, setPreExistingValues, setUpdatedValues, showSuccessMessage, showErrorMessage };
