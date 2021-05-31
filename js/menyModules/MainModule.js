import ModalModule from "./ModalModule.js"

const MainModule = (function () { }());

function addEventsToButtons() {

    //modal

    const editDish = document.getElementsByTagName('BUTTON');
    const modalBackground = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal');
    const saveButton = document.getElementById('save-button');
    const featureAlert = document.getElementById('horizontal-id');
    const modalCloseX = document.getElementById('modalCloseX');

    //Adds is-active to the modal class.
    for (var i = 0; i < editDish.length; i++) {
        if (editDish[i].className === 'button active') {
            editDish[i].addEventListener('click', function (el) {
                modal.classList.add('is-active');
                ModalModule.setPreExistingValues(el.target.parentNode.parentNode);


                //Makes save button lock the item
                saveButton.addEventListener('click', function () {
                    ModalModule.setUpdatedValues(el.target.parentNode.parentNode);
                    ModalModule.showSuccessMessage(el.target.parentNode)
                    modal.classList.remove('is-active');
                });
            });
        }
    };

    //Removes is-active from the modal class when clicked on background.'
    modalBackground.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });

    //Removes is-active from the modal class when clicked on X.'
    modalCloseX.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });

    //Alert notification for non-implemented feature.
    featureAlert.addEventListener('click', () => {
        ModalModule.showErrorMessage();
    });
}

export default { MainModule, addEventsToButtons };

