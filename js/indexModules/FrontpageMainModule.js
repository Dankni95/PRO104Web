import DateModule from "../globalModules/DateModule.js";

const FrontpageMainModule = (function () {

}());

DateModule.updateDate();
/*********************************HTML DOM ETC*****************************************/
const errorMsg = document.getElementById("error-msg");
const errorMsg2 = document.getElementById("error-msg2");
const errorMsg3 = document.getElementById("error-msg3");
const sortingBtn = document.getElementById("sortingBtn");
const closeModalBackgroundAdd = document.getElementById("modal-background-closeAdd");
const modalBackgroundCloseEdit = document.getElementById("modal-background-closeEdit");
const taskDisplayed = document.getElementById("taskDisplayed");
const modalClose = document.getElementById("closeModal");
const modalCloseEdit = document.getElementById("modalCloseEdit");
const modalAdd = document.getElementById("modalAdd");
const output = document.getElementsByClassName("columnPosition")[0];
const saveAdd = document.getElementsByClassName("saveAdd")[0];
const headlineChooseBtn = document.getElementsByClassName("headlineChooseBtn")[0];
const addButton = document.getElementsByClassName("addBtn")[0];
const editButton = document.getElementsByClassName("editBtn")[0];

var onmouseoutPriority = document.getElementsByClassName("onmouseoutPriority")[0]; /*Some DOM's need to be var in this project*/
var getBack = document.getElementsByClassName("getBack")[0];
var saveEdit = document.getElementsByClassName("saveEdit")[0];
var textField = document.getElementById("text-field");
var headlineTxt = document.getElementById("headline-txt");
var textFieldEdit = document.getElementById("text-field-edit");
var headlineTxtEdit = document.getElementById("headline-txt-edit");
var priorityOrganize = document.getElementById("priority-organize");
var priority = document.getElementById("priority");

const blinkOnAdded = document.getElementsByClassName("columnColor"); //Note that these dont use [0]. Have own for loop. 
const blinkOnHeadline = document.getElementsByClassName("headLineAnimation"); //This is not an class in .css file, but simply an 'id' in template literals. 
const blinkOnTxt = document.getElementsByClassName("txtAnimation");
//const trashAnimation = document.getElementsByClassName("columns");


var regretAndGetBack = document.getElementById("regretAndGetBack");

sortingBtn.addEventListener('click', sortingOnClick);
const organizeClick = document.getElementsByClassName("organizeClick")[0];


/*************************ENTER KEY ON BUTTONS*********************************/
const enterKey1 = document.getElementById('button-save-enter');
const enterKey2 = document.getElementById('headline-txt');
const enterKey3 = document.getElementById('sortingBtn');
const enterKey4 = document.getElementById('editBtnEnterKey');
enterKey1.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        handleInput()
    }
})
enterKey2.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        handleInput()
    }
})

enterKey3.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        handleInput()
    }
})
enterKey4.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        handleInput()
    }
})




/*************************MODAL OPEN/CLOSE*********************************/

closeModalBackgroundAdd.addEventListener("click", function () {
    modalsClose();
});

modalBackgroundCloseEdit.addEventListener("click", function () {
    modalsClose();
});


addButton.addEventListener("click", function () {
    openModalCreate();
});

editButton.addEventListener("click", function () {
    renderModal();
});

modalClose.addEventListener("click", function (e) {
    modalsClose();
});

modalCloseEdit.addEventListener("click", function (e) {
    modalsClose();
});




function openModalCreate() {
    modalAdd.classList.toggle("is-active");
    errorMsg.innerHTML = "";
}


function renderModal() {
    const renderB = document.getElementById("render-b");
    const headLines = document.getElementById("headline-choose");
    renderB.classList.toggle("is-active");
    errorMsg2.innerHTML = "";

    /** Prevents duplicate dropdown menu options**/
    let allHeadlinesArr = headLines.children
    let array = [...allHeadlinesArr]
    array.forEach(element => {
        element.remove();
    });

    /*Using "option" on diffrent array. Need to put the dropdown array chooser inside function*/
    for (let i = taskArray.length - 1; i >= 0; i--) {
        let optMenu = taskArray[i].headline;
        let elem = document.createElement("option");
        elem.textContent = optMenu;
        elem.value = optMenu;
        selectEdit.appendChild(elem);
    }
    selectWhatToChange();
}



function modalsClose() {
    let modalAdd = document.getElementById("modalAdd");
    modalAdd.classList.remove("is-active");
    let renderB = document.getElementById("render-b");
    renderB.classList.remove("is-active");

    textField.value = textField.defaultValue; //Get placeholder for txtbox on reload and remove previous user input visually. 
    headlineTxt.value = headlineTxt.defaultValue;
    textFieldEdit.value = textFieldEdit.defaultValue;
    headlineTxtEdit.value = headlineTxtEdit.defaultValue;
    //var headlineTxt = document.getElementById("headline-txt").value = ""; DONT USE THIS SYNTAX. Bugs up when using syntax above. 

    document.getElementById('priority').selectedIndex = 0; /**Dropdown menu always display default value after modal close/open**/
}

/********************CONSTANT, NOT-DISPLAYABLE ARRAY FOR DEFAULT VALUES********************/
const optionsArray =
    [
        {
            importance: "Kritisk!",
            colorTxt: "#FF6F5A",
            prioritizeOrder: 1,
            icon: "fas fa-exclamation-circle"

        },
        {
            importance: "Moderat",
            colorTxt: "violet",
            prioritizeOrder: 2,
            icon: "fas fa-cogs"
        },
        {
            importance: "Uformelt",
            colorTxt: "yellow",
            prioritizeOrder: 3,
            icon: "fas fa-briefcase"

        }

    ];


/***********************GET DATA FROM ARRAY FIELD FOR DROP DOWN MENUS*****************/
const select = document.getElementById("priority");
const selectOrg = document.getElementById("priority-organize");
const selectEdit = document.getElementById("headline-choose");

//Check what importance option user have selected in the drop down menu. Theese options are generated from the strings of .importance index in optionsArray   
for (let i = 0; i < optionsArray.length; i++) {
    let optMenu = optionsArray[i].importance;
    let elem = document.createElement("option");
    elem.textContent = optMenu;
    elem.value = optMenu;
    select.appendChild(elem);
}

//Needed a separate for loop for organizing different tasks
for (let i = 0; i < optionsArray.length; i++) {
    let optMenu = optionsArray[i].importance;
    let elem = document.createElement("option");
    elem.textContent = optMenu;
    elem.value = optMenu;
    selectOrg.appendChild(elem);
}



/***********************ARRAY COLUMN DATA*****************/
const taskArray = [

    {
        optionChoice: "Kritisk!",
        colorChoice: "#FF6F5A",
        task: "Pizzaovn 2 på Lambertseter delvis i ustand. Dette skylles en vikar som kom til skade for å etterlate plastrester i ovnen. I forbindelse med at han glemte å ta av plasten på grandiosaen han skulle steke på vareopptellingen sist mandag morgen.",
        headline: "Vedlikeholdsbehov pizzaovn",
        prioritizeChoice: 1,
        iconSign: "fas fa-exclamation-circle"

    },
    {
        optionChoice: "Moderat",
        colorChoice: "violet",
        task: "Delivery bil nummer 4 skal på EU kontroll 1.juni!",
        headline: "EU kontroll",
        prioritizeChoice: 2,
        iconSign: "fas fa-cogs"
    },
    {
        optionChoice: "Kritisk!",
        colorChoice: "#FF6F5A",
        task: "Lambertseter er helt tomme for fersk gjær. Det har skjedd en alvorlig feil med bestillingen av gjær. Dette er heller ikke mulig å oppdrive i matbutikkene i nærheten.",
        headline: "Lambertseter helt tomme for gjær",
        prioritizeChoice: 1,
        iconSign: "fas fa-exclamation-circle"
    },
    {
        optionChoice: "Uformelt",
        colorChoice: "yellow",
        task: "Send gjerne en hilsen til vår kjære daglig leder på avdeling Lambertseter, til uka. Ønsker du å sende en blomst, så ryktes det at han er veldig glad i tulipaner :D",
        headline: "Daniel har bursdag på onsdag!",
        prioritizeChoice: 3,
        iconSign: "fas fa-briefcase"
    },
    { headline: "Velg en overskift:" } //Because of the duplicate fix, we need to do this for adding default value/option in editing dropdown menu. This would be deleted in html

];




/***********************ADD TO ARRAY*****************/
saveAdd.addEventListener("click", function () {
    addToArry();
});





function addToArry() {
    errorMsg.innerHTML = "";
    var textField = document.getElementById("text-field").value; //Saved as var for deleting old user input
    var headlineTxt = document.getElementById("headline-txt").value;
    /**IMPORTANT! This for loop needs to run because we need standard values (color/icons etc), within the array, not selected directly by user input, but comes with the priority choice index. We choose to do this, instead of running spaghetti switch case etc.**/
    for (let i = 0; i < optionsArray.length; i++) {
        if (priority.value === optionsArray[i].importance && textField != "" && textField != "Skriv kunngjøringen her:" && headlineTxt != "Skriv overskriften her:" && headlineTxt != "") {

            //taskArray.push(
            taskArray.splice(1, 0, //Adds new task item at index 1 (0 jused to be placeholder for drop menu. Dosent matter if its 0 or 1, everything are bubble sorted). Next, we delete 0 items. Finaly after last "," we create the content. Better than using push (last index) or unshift (index 0)
                {
                    optionChoice: optionsArray[i].importance, //adapting values from optionsArry
                    task: textField,
                    headline: headlineTxt,
                    colorChoice: optionsArray[i].colorTxt,
                    prioritizeChoice: optionsArray[i].prioritizeOrder, //Not for display. Just for bubble sorting.
                    iconSign: optionsArray[i].icon,
                    isJustAdded: true,
                }
            );
            modalsClose();
            /*for (let i = 0; i < blinkOnAdded.length; i++) {   //DONT DELETE! Use className to get the class by a spesific index.
                        //if (i == (blinkOnAdded.length - 1)) {         //Style the opposite index
                        if (i == (0)) { blinkOnAdded[i].style.animation = "blinker 2.5s 20";}}*/


            sortingOnLoad();
        } else {
            errorMsg.innerHTML = `<error><p>Feil!</p> Du må både velge prioritet og skrive noe i kunngjøringen.</error>`;
        }
    }
}



/************PRINT ARRAY****************/
function printFunc() {
    output.innerHTML = "";

    for (let i = 0; i < taskArray.length - 1; i++) {   //Last index in taskArray is only dropdown menu option.
        output.innerHTML += ` <div class="columns">
            <div class="column is-12-mobile is-11-tablet is-offset-1-tablet columnColor is-multiline">
        <div class="has-text-right "><b id="delSymbol" class="fas fa-times fa-lg"></b></div>
        <p style="color:${taskArray[i].colorChoice}; float: left;" class="${taskArray[i].iconSign}" ></p>
        <p class="headLineAnimation" style="margin-left:50px; font-size:35px;">${taskArray[i].headline}</p>
        <p style="margin-left:50px; color:${taskArray[i].colorChoice};">Viktighetsgrad: ${taskArray[i].optionChoice}</p>
        <p class="txtAnimation" style="margin-left:50px; word-wrap:break-word;">${taskArray[i].task}</p>
          </div>
        </div>`;

        for (let i = 0; i < blinkOnAdded.length; i++) {
            if (taskArray[i].isJustAdded) {
                blinkOnAdded[i].style.animation = "blinkercolumnColor 15s 1";
                taskArray[i].isJustAdded = false;
            }
        }
    }
    update();
}




/*****UPDATE DELETED TASK******/
function update() {
    removeButtonFunctionality();
}




/*****************DELETE TASK**************/
let notification = document.getElementsByTagName("B");
//Function for deleting
function removeButtonFunctionality() {
    for (let i = 0; i < notification.length; i++) {
        notification[i].addEventListener("mousedown", function (e) {
            if (e.target.tagName === "B" && e.target.className === "fas fa-times fa-lg") {  //Deletes the selected index of the b class onclick. 
                if (confirm('Er du sikker på at du ønsker å slette kunngjøringen?')) {
                    //Thees two lines deletes the objectified array item by index. To make sure they do not reappear when user adds another task.
                    let deleteIndex = taskArray.map(function (item) { return item.id; }).indexOf(i); //We already know the index, lets use the same index to delete from taskArray.


                    e.target.offsetParent.style.animation = "deleteColumnCompressBox 2s 1";

                    setTimeout(delayDelete, 800);
                    function delayDelete() {

                        e.target.offsetParent.remove(); //Removes the parent div for the task. And prevents it from displaying on the web page. 
                        taskArray.splice(deleteIndex, 1);   // removes the object
                    }

                }

            }

        }, false)
    }
}



/***ONLOAD****/
window.onload = update();  /** Updating website. Needs to be kept direcly under delete func**/
window.onload = printFunc(); //In order to always display all elements inn array. 
window.onload = sortingOnLoad();


/****************PRINT SELECTED (mouseover in own section)*****************/
function deleteSortingBtn() {
    document.getElementById("sortingBtn").style.visibility = "hidden";
}

function reappearSortingBtn() {
    document.getElementById("sortingBtn").style.visibility = "visible";
}


function printSelected() {
    output.innerHTML = "";
    var priorityOrganize = document.getElementById("priority-organize");
    let dropDownV = priorityOrganize.options[priorityOrganize.selectedIndex].text;
    for (let i = 0; i < taskArray.length - 1; i++) {
        if (dropDownV === taskArray[i].optionChoice) {
            deleteSortingBtn();
            output.innerHTML += ` <div class="columns">
             <div class="column is-12-mobile is-11-tablet is-offset-1-tablet columnColor is-multiline">
         <div class="has-text-right "><b id="delSymbol" class="fas fa-times fa-lg"></b></div>
         <p style="color:${taskArray[i].colorChoice}; float: left;" class="${taskArray[i].iconSign}" ></p>
         <p style="margin-left:50px; font-size:35px;">${taskArray[i].headline}</p>
         <p style="margin-left:50px; color:${taskArray[i].colorChoice};">Viktighetsgrad: ${taskArray[i].optionChoice}</p>
         <p style="margin-left:50px; word-wrap:break-word;">${taskArray[i].task}</p>
           </div>
         </div>`;
        }
    }
    if (output.innerHTML === "") {
        reappearSortingBtn(); //We only need importance-sorting button when its no filter by one single importance. 
        printFunc();
    }
    update();
    document.getElementById('priority-organize').selectedIndex = 0;
}




/****************EDIT ARRAY*****************/

headlineChooseBtn.addEventListener("click", function () {
    editTask()
});


var isHeadlineChoosen = false;
var isTxtChoosen = false;

function selectWhatToChange() {
    errorMsg2.innerHTML = "";
    errorMsg3.innerHTML = "";
    taskDisplayed.innerHTML = "";
    var textFieldEdit = document.getElementById("text-field-edit").style.display = "none";
    var headlineTxtEdit = document.getElementById("headline-txt-edit").style.display = "none";
    var whatEditBtn = document.getElementById("whatEditBtn").style.display = "none";
    var saveEdit = document.getElementsByClassName("saveEdit")[0].style.display = "none";
    var headlineChoose = document.getElementById("headline-choose").style.display = "inline"; //Need to use var in this case
    const headlineChooseBtn = document.getElementsByClassName("headlineChooseBtn")[0].style.display = "inline";
    var regretAndGetBack = document.getElementById("regretAndGetBack").style.display = "none";
    isHeadlineChoosen = false;
    isTxtChoosen = false;
}



var count; //Only way for errorMsg3 to be functional multiple times.  

function editTask() {
    count = 0;
    errorMsg2.innerHTML = "";
    errorMsg3.innerHTML = "";
    var headlineChoose = document.getElementById("headline-choose");
    let chooseFromArray = headlineChoose.options[headlineChoose.selectedIndex].text;

    for (let i = 0; i < taskArray.length - 1; i++) {
        for (let i = 0; i < blinkOnHeadline.length; i++) {
            for (let i = 0; i < blinkOnTxt.length; i++) {
                if (chooseFromArray === taskArray[i].headline) {

                    count++;
                    taskDisplayed.innerHTML = `<div class="headlineDisplayEdit"><p  id="editSymbolHeadl" class="fas fa-edit editIconHeadlOutput"></p><p style="margin-right:50px;">${taskArray[i].headline}</p></div>`;
                    taskDisplayed.innerHTML += `<div class="txtInputEditDisplay"><p id="editSymbolTxt" class="fas fa-edit editIconTxtOutput"></p><p style="margin-right:50px;"> ${taskArray[i].task}</p></div>`;

                    const headlineChooseBtn = document.getElementsByClassName("headlineChooseBtn")[0].style.display = "none";
                    headlineChoose = document.getElementById("headline-choose").style.display = "none";
                    regretAndGetBack = document.getElementById("regretAndGetBack").style.display = "inline";
                    document.getElementById("regretAndGetBack").className = "regretBtnStyle";
                    var whatEditBtn = document.getElementById("whatEditBtn").style.display = "inline";
                    whatEditBtn = document.getElementById("whatEditBtn"); //Important for button. Cant have styling


                    var isHeadlineGreen = false;
                    var isTxtGreen = false;   //Can't share boolean because second icon needs double click to be green.
                    isHeadlineChoosen = false;    //Own booleans necessary
                    isTxtChoosen = false;

                    editSymbolTxt.addEventListener("click", function () {
                        isTxtGreen = !isTxtGreen;
                        isTxtChoosen = !isTxtChoosen;
                        if (isTxtGreen) {
                            var editSymbolTxt = document.getElementById("editSymbolTxt").style.color = "green";
                        } else {
                            editSymbolTxt = document.getElementById("editSymbolTxt").style = "editIconTxtOutput";
                        }
                    });

                    getBack.addEventListener("click", function () {
                        textFieldEdit.value = textFieldEdit.defaultValue;
                        headlineTxtEdit.value = headlineTxtEdit.defaultValue;
                        document.getElementById('headline-choose').selectedIndex = 0;
                        selectWhatToChange();
                    });

                    editSymbolHeadl.addEventListener("click", function () {
                        isHeadlineGreen = !isHeadlineGreen;
                        isHeadlineChoosen = !isHeadlineChoosen;
                        if (isHeadlineGreen) {
                            var editSymbolHeadl = document.getElementById("editSymbolHeadl").style.color = "green";
                        } else {
                            editSymbolHeadl = document.getElementById("editSymbolHeadl").style = "editIconHeadlOutput";
                        }
                    });




                    whatEditBtn.addEventListener("click", function () {
                        errorMsg2.innerHTML = "";
                        if (isHeadlineChoosen || isTxtChoosen) {
                            taskDisplayed.innerHTML = "";
                            var saveEdit = document.getElementsByClassName("saveEdit")[0].style.display = "inline";
                            saveEdit = document.getElementsByClassName("saveEdit")[0]; //Because of button
                            whatEditBtn = document.getElementById("whatEditBtn").style.display = "none";
                            if (isTxtGreen) {
                                var textFieldEdit = document.getElementById("text-field-edit").style.display = "inline";
                            } else {
                                var textFieldEdit = document.getElementById("text-field-edit").style.display = "none";
                                isTxtGreen = false;
                            }
                            if (isHeadlineGreen) {
                                var headlineTxtEdit = document.getElementById("headline-txt-edit").style.display = "inline";
                            } else {
                                var headlineTxtEdit = document.getElementById("headline-txt-edit").style.display = "none";
                                isHeadlineGreen = false;
                            }
                        } else {
                            errorMsg2.innerHTML = `<error><p>Feil!</p> Velg hva som skal endres.</error>`
                        }
                    });

                    saveEdit.addEventListener("click", function () {
                        errorMsg2.innerHTML = "";
                        var textFieldEdit = document.getElementById("text-field-edit").value;
                        var headlineTxtEdit = document.getElementById("headline-txt-edit").value;
                        if (!isHeadlineGreen && isTxtGreen && textFieldEdit != "" && textFieldEdit != "Endre kunngjøringen her:") {
                            isTxtGreen = false;
                            blinkOnTxt[i].style.animation = "blinkerFontFadeout 12s 1";
                            modalsClose();
                            setTimeout(delayTxt, 5000);
                            function delayTxt() {
                                taskArray[i].task = textFieldEdit;
                                printFunc();
                                blinkOnTxt[i].style.animation = "blinkerFontFadein 30s 1";
                            }
                        }

                        else if (isHeadlineGreen && !isTxtGreen && headlineTxtEdit != "" && headlineTxtEdit != "Endre overskriften her:") {
                            isHeadlineGreen = false;
                            blinkOnHeadline[i].style.animation = "blinkerFontFadeout 12s 1";
                            modalsClose();
                            setTimeout(delayHeadline, 5000);
                            function delayHeadline() {
                                taskArray[i].headline = headlineTxtEdit;
                                printFunc();
                                blinkOnHeadline[i].style.animation = "blinkerFontFadein 30s 1";
                            }
                        }
                        else if (isHeadlineGreen && isTxtGreen && headlineTxtEdit != "" && textFieldEdit != "" && headlineTxtEdit != "Endre overskriften her:" && textFieldEdit != "Endre kunngjøringen her:") {
                            isHeadlineGreen = false;
                            isTxtGreen = false;
                            blinkOnHeadline[i].style.animation = "blinkerFontFadeout 12s 1";
                            blinkOnTxt[i].style.animation = "blinkerFontFadeout 12s 1";
                            modalsClose();
                            setTimeout(delayHeadlAndTxt, 5000);
                            function delayHeadlAndTxt() {
                                taskArray[i].task = textFieldEdit;
                                taskArray[i].headline = headlineTxtEdit;
                                printFunc();
                                blinkOnHeadline[i].style.animation = "blinkerFontFadein 30s 1";
                                blinkOnTxt[i].style.animation = "blinkerFontFadein 30s 1";
                            }
                        } else {
                            errorMsg2.innerHTML = `<error><p>Feil!</p> Skriv noe i tekst feltet/feltene du har valgt å endre.</error>`
                        }
                    });
                }
            }
        }
    }
    if (count === 0) {
        errorMsg3.innerHTML = `<error><p>Feil!</p> Velg kunngjøring</error>` //In need of own DOM. 
    }
}



/****************BUBBLE SORT SWITCH ONCLICK*****************/
var isSorted = false; //Turns true/false onClick
function sortingOnClick() {
    isSorted = !isSorted;
    sortingOnLoad();
}

function sortingOnLoad() { //Split in own function. Also used window.onload etc istead of onClick.  
    if (isSorted) {
        printFunc(taskArray.sort(sortByImportanceReverse));
    }
    else if (!isSorted) {
        printFunc(taskArray.sort(sortByImportance));
    }
}

/****************BUBBLE SORTING*****************/
function sortByImportance(a, b) { //Always change the crocodile mouth, when reversing the sorting.
    if (a.prioritizeChoice < b.prioritizeChoice) {
        return -1;
    }
    return 0;
}

function sortByImportanceReverse(a, b) {
    if (a.prioritizeChoice > b.prioritizeChoice) {
        return -1;
    }
    return 0;
}










/**************** MOUSEOVER DROPDOWN MENU PRINT SELECTED *****************/
priorityOrganize.addEventListener("mouseover", function () {
    mouseOverFilterDropMenu();
});


onmouseoutPriority.addEventListener("mouseout", function () {
    closeFilterDropMenu();
});

organizeClick.addEventListener("click", function () {
    printSelected();
});


/**************************CHECK IF I REALY NEED THIS OR JUST ADD SELECT HOVER IN CSS. NOT OPTION
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

function mouseOverFilterDropMenu() {
    var priorityOrganize = document.getElementById("priority-organize").options.length;
    document.getElementById("priority-organize").size = priorityOrganize;
    priorityOrganize = document.getElementById("priority-organize").style.height = "100px";
    priorityOrganize = document.getElementById("priority-organize").style.width = "200px";
    priorityOrganize = document.getElementById("priority-organize").style.backgroundColor = "rgb(31, 29, 43)"; /*Do not change BackGcolor in CSS with hover on select tag. Looks glitchy. */
    priorityOrganize = document.getElementById("priority-organize").style.border = "2px solid #E74C3C";
    priorityOrganize = document.getElementById("priority-organize").style.borderRadius = "20px";
}



function closeFilterDropMenu() {
    priorityOrganize = document.getElementById("priority-organize").style.backgroundColor = "#50343A";
    priorityOrganize = document.getElementById("priority-organize").style.height = "5.2%";
    priorityOrganize = document.getElementById("priority-organize").style.width = "auto";
    priorityOrganize = document.getElementById("priority-organize").style.border = "none";
    priorityOrganize = document.getElementById("priority-organize").style.borderRadius = "10px";
}


/*********DROPDOWN MENU ADD ARRAY REMOVE DEFAULT VALUE IN LIST**********/
var removeDefaultInList = document.getElementById("removeDefaultInList").style.display = "none"; /***IMPORTANT. this specific OPTION tag has its own id***/

/************Filter button**************/
var hideWhiteBoxFilter = document.getElementById("hideWhiteBoxFilter").style.display = "none";


export default { FrontpageMainModule };
