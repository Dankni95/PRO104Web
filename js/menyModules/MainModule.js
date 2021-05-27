import DataModule from "../globalModules/DataModule.js";
const MainModule = (function data() {



}());

function addEventsToButtons() {

    //modal

    const editDish = document.getElementsByTagName('BUTTON');
    const modalBackground = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal');
    const saveButton = document.getElementById('save-button');
    const featureAlert = document.getElementById('horizontal-id');

    //Adds is-active to the modal class.
    for (var i = 0; i < editDish.length; i++) {
        if (editDish[i].className === 'button active') {
            editDish[i].addEventListener('click', function (e) {
                modal.classList.add('is-active');
            });
        }
    };

    //Removes is-active from the modal class when clicked on background.'
    modalBackground.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });


    //Makes save button lock the item
    saveButton.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });

    featureAlert.addEventListener('click', () => {
        alert("Denne funksjonen er enda ikke implementert, vennligst kontakt systemansvarlig for mer informasjon. ");
    });
}




export default {MainModule, addEventsToButtons};



/*
const editDish = document.getElementById('kake');
console.log(editDish.innerHTML);
const modalBg = document.querySelector('.modal-background');
const modal = document.getElementsByClassName('modal')[0];

editDish.addEventListener('click', () => {
    modal.className = "modal is-active"
});
*/