/*********************************HTML DOM ETC*****************************************/
var output = document.getElementsByClassName("columnPosition")[0];
var priority = document.getElementById("priority");
var textField = document.getElementById("text-field")
var headlineTxt = document.getElementById("headline-txt")
var errorMsg = document.getElementById("error-msg");
var errorMsg2 = document.getElementById("error-msg2");
var priorityOrganize = document.getElementById("priority-organize");
var organizeBtn = document.getElementById("organizeBtn");
var textFieldEdit = document.getElementById("text-field-edit");
var headlineTxtEdit = document.getElementById("headline-txt-edit");
var sortingBtn = document.getElementById("sortingBtn")
var editBtnEnterKey = document.getElementById("editBtnEnterKey")
sortingBtn.addEventListener('click', sortingOnClick);
organizeBtn.onclick = printSelected;


/*************************ENTER KEY ON BUTTONS*********************************/
var enterKey1 = document.getElementById('button-save-enter');
var enterKey2 = document.getElementById('headline-txt');
var enterKey3 = document.getElementById('organizeBtn');
var enterKey4 = document.getElementById('sortingBtn');
var enterKey5 = document.getElementById('editBtnEnterKey');
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
enterKey5.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        handleInput()
    }
})


/*************************MODAL OPEN/CLOSE*********************************/
function openModalCreate() {
    var modalAdd = document.getElementById("modalAdd");
    modalAdd.classList.toggle("is-active");
    errorMsg.innerHTML = "";
}

function renderModal() {
    var renderB = document.getElementById("render-b");
    renderB.classList.toggle("is-active");
    errorMsg2.innerHTML = "";
    /*Using "option" on diffrent array. Need to put the dropdown array chooser inside function*/
    for (var i = 0; i < taskArray.length; i++) {
        var optMenu = taskArray[i].headline;
        var elem = document.createElement("option");
        elem.textContent = optMenu;
        elem.value = optMenu;
        selectEdit.appendChild(elem);
    }
}

function modalsClose() {
    var modalsClose = document.getElementById("modalAdd");
    modalsClose.classList.remove("is-active");
    var renderB = document.getElementById("render-b");
    renderB.classList.remove("is-active");
}


/********************CONSTANT, NOT-DISPLAYABLE ARRAY FOR DEFAULT VALUES********************/
var optionsArray =
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
var select = document.getElementById("priority");
var selectOrg = document.getElementById("priority-organize");
var selectEdit = document.getElementById("headline-choose");

//Check what importance option user have selected in the drop down menu. Theese options are generated from the strings of .importance index in optionsArray   
for (var i = 0; i < optionsArray.length; i++) {
    var optMenu = optionsArray[i].importance;
    var elem = document.createElement("option");
    elem.textContent = optMenu;
    elem.value = optMenu;
    select.appendChild(elem);
}

//Needed a separate for loop for organizing different tasks
for (var i = 0; i < optionsArray.length; i++) {
    var optMenu = optionsArray[i].importance;
    var elem = document.createElement("option");
    elem.textContent = optMenu;
    elem.value = optMenu;
    selectOrg.appendChild(elem);
}



/***********************ARRAY COLUMN DATA*****************/
var taskArray = [
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
    }

];


/***********************ADD TO ARRAY*****************/
function addToArry() {
    errorMsg.innerHTML = "";
    var textField = document.getElementById("text-field").value;
    var headlineTxt = document.getElementById("headline-txt").value;
    var priority = document.getElementById("priority").value;
    /**IMPORTANT! This for loop needs to run because we need standard values (color/icons etc), within the array, not selected directly by user input, but comes with the priority choice index. We choose to do this, instead of running spaghetti switch case etc.**/
    for (var i = 0; i < optionsArray.length; i++) {
        if (priority === optionsArray[i].importance && textField != "" && headlineTxt != "") {
            taskArray.push(
                {
                    optionChoice: optionsArray[i].importance, //adapting values from optionsArry
                    task: textField,
                    headline: headlineTxt,
                    colorChoice: optionsArray[i].colorTxt,
                    prioritizeChoice: optionsArray[i].prioritizeOrder, //Not for display. Just for bubble sorting.
                    iconSign: optionsArray[i].icon
                }
            );
            modalsClose();
            sortingOnLoad()
        } else {
            errorMsg.innerHTML = `<erro><p>Feil!</p> Du må både velge prioritet og skrive noe i kunngjøringen.</erro>`;
        }
    }
}


/************PRINT ARRAY****************/
function printFunc() {
    output.innerHTML = "";
    //document.getElementById("text-field").value;
    for (var i = 0; i < taskArray.length; i++) {
        output.innerHTML += ` <div class="columns">
             <div class="column is-12-mobile is-11-tablet is-offset-1-tablet columnColor is-multiline">
         <div class="has-text-right "><b id="delSymbol" class="fas fa-times fa-lg"></b></div>
         <p style="color:${taskArray[i].colorChoice}; float: left;" class="${taskArray[i].iconSign}" ></p>
         <p style="margin-left:50px; font-size:35px;">${taskArray[i].headline}</p>
         <p style="margin-left:50px; color:${taskArray[i].colorChoice};">Viktighetsgrad: ${taskArray[i].optionChoice}</p>
         <p style="margin-left:50px; word-wrap:break-word;">${taskArray[i].task}</p>
           </div>
         </div>`;
        update();
    }
}

/*****UPDATE DELETED TASK******/
function update() {
    removeButtonFunctionality();
}

/*****************DELETE TASK**************/
let notification = document.getElementsByTagName("B");
//Function for deleting
function removeButtonFunctionality() {
    for (var i = 0; i < notification.length; i++) {
        notification[i].addEventListener("mousedown", function (e) {
            if (e.target.tagName === "B" && e.target.className === "fas fa-times fa-lg") {  //Deletes the selected index of the b class onclick. 
                if (confirm('Er du sikker på at du ønsker å slette kunngjøringen?')) {
                    e.target.offsetParent.remove() //Removes the parent div for the task. And prevents it from displaying on the web page. 

                    //Thees two lines deletes the objectified array item by index. To make sure they do not reappear when user adds another task.
                    var deleteIndex = taskArray.map(function (item) { return item.id; }).indexOf(i); //We already know the index, lets use the same index to delete from taskArray.
                    // removes the object
                    taskArray.splice(deleteIndex, 1);
                }
            }
        }, false)
    }
}


/***ONLOAD****/
window.unload = update();  /** Updating website. Needs to be kept direcly under delete func**/
window.unload = printFunc(); //In order to always display all elements inn array. 
window.unload = sortingOnLoad();


/****************PRINT ARRAY*****************/
function printSelected() {
    output.innerHTML = "";
    var priorityOrganize = document.getElementById("priority-organize");
    var dropDownV = priorityOrganize.options[priorityOrganize.selectedIndex].text;
    for (var i = 0; i < taskArray.length; i++) {
        if (dropDownV === taskArray[i].optionChoice) {
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
        printFunc();
    }
    update();
}
/****************EDIT ARRAY*****************/
function editTask() {
    errorMsg2.innerHTML = "";
    var headlineChoose = document.getElementById("headline-choose");
    var chooseFromArray = headlineChoose.options[headlineChoose.selectedIndex].text;
    var textFieldEdit = document.getElementById("text-field-edit").value;
    var headlineTxtEdit = document.getElementById("headline-txt-edit").value;
    for (var i = 0; i < taskArray.length; i++) {
        if (chooseFromArray === taskArray[i].headline && textFieldEdit != "" && headlineTxtEdit != "") {
            taskArray[i].task = textFieldEdit;
            taskArray[i].headline = headlineTxtEdit;
            printFunc();
            modalsClose();
        } else {
            errorMsg2.innerHTML = `<erro><p>Feil!</p> Velg kunngjøring. Skriv så ny overskrift og melding.</erro>`;
        }
    }
}


/****************BUBBLE SORT SWITCH ONCLICK*****************/
var isSorted = false; //Turns true/false onClick
function sortingOnClick() {
    isSorted = !isSorted;
    sortingOnLoad();
}

function sortingOnLoad() { //Split in own function. Also used !onClick.  
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
        if (a.prioritizeChoice > b.prioritizeChoice) {
            return 1;
        }
    }
    return 0;
}

function sortByImportanceReverse(a, b) {
    if (a.prioritizeChoice > b.prioritizeChoice) {
        return -1;
        if (a.prioritizeChoice < b.prioritizeChoice) {
            return 1;
        }
    }
    return 0;
}