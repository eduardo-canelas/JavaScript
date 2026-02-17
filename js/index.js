
//Problem 1
let counter = document.getElementById("counter");
counter.innerHTML = 0;

function tickUp() {
    counter.innerHTML++;
}
function tickDown() {
    counter.innerHTML--;
}

//Problem 2
let loopResult = document.getElementById("forLoopResult");
function runForLoop() {
    loopResult.innerHTML = " ";
    for (let i = 0; i <= counter.innerHTML; i++) {
        loopResult.innerHTML += i + " ";
    }
}

//Problem 3
let displayOdd = document.getElementById("oddNumberResult");
function showOddNumbers() {
    displayOdd.innerHTML = " ";
    for (let i = 0; i <= counter.innerHTML; i++) {
        if (i % 2 !== 0) {
            displayOdd.innerHTML += i + " ";
        }
    }
}

//Problem 4
function addMultiplesToArray() {
    let multipleOfFive = [];
    for (let i = 1; i <= counter.innerHTML; i++) {
        if (i % 5 === 0) {
            multipleOfFive.push(i);
        }
    }
    console.log(multipleOfFive.reverse());
}

//Problem 5
let carType = document.getElementById("carType");
let carMPG = document.getElementById("carMPG");
let carColor = document.getElementById("carColor");

function printCarObject() {
    let car = {
        cType: carType.value,
        cMPG: carMPG.value,
        cColor: carColor.value,
    }
    console.log(car);
}

//Problem 6
let car1 = {
    cType: "Ferrari",
    cMPG: "25",
    cColor: "Red",
}

let car2 = {
    cType: "Lamborghini",
    cMPG: "28",
    cColor: "Green",
}

let car3 = {
    cType: "Buggatti",
    cMPG: "22",
    cColor: "White",
}

function loadCar(carNumber) {
    if (carNumber === 1) {
        carType.value = car1.cType;
        carMPG.value = car1.cMPG;
        carColor.value = car1.cColor;
    } else if (carNumber === 2) {
        carType.value = car2.cType;
        carMPG.value = car2.cMPG;
        carColor.value = car2.cColor;
    } else if (carNumber === 3) {
        carType.value = car3.cType;
        carMPG.value = car3.cMPG;
        carColor.value = car3.cColor;
    }
}

//Problem 7
let colorParagraph = document.getElementById("styleParagraph");

function changeColor(colorNumber) {
    if (colorNumber === 1) {
        colorParagraph.style.color = "red";
    } else if (colorNumber === 2) {
        colorParagraph.style.color = "green";
    } else if (colorNumber === 3) {
        colorParagraph.style.color = "blue";
    }
}

