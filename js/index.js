const button = document.querySelectorAll("button.numbers").length; // working
var tempHolder;
let total,
    convertedTotal;

// there are two problems to fix first , when clicking = the value disappear and when trying to add negative number with positive number it show Nan

for (let i = 0; i < button; i++) { // working

    let theClickedButton = document.querySelectorAll("button.numbers")[i]; // working
    theClickedButton.addEventListener("click", function() { // working
        let location = theClickedButton.value; // working
        // console.log("am the location variable:  " + location);

        let result = document.querySelector("div h2.result"); // working
        let temp = document.createTextNode(location); // working
        // console.log("am the temp variable:  " + temp.textContent);
        // working
        if (result.textContent === "0") {
            result.textContent = "";
        }
        result.appendChild(temp); // working

        tempHolder = result.textContent; // great working so far
        // console.log("am temp holder to be sliced " + tempHolder);



        if (tempHolder.includes("+")) {
            convertedTotal = splitNumber("+");
            console.log("am convertedTotal inside +  " + convertedTotal);
        }
        if (tempHolder.includes("-")) {
            convertedTotal = splitNumber("-");
            console.log("am convertedTotal inside - " + convertedTotal);
        }
        if (tempHolder.includes("/")) {
            convertedTotal = splitNumber("/");
            console.log("am convertedTotal inside / " + convertedTotal);
        }
        if (tempHolder.includes("x")) {
            convertedTotal = splitNumber("x");
            console.log("am convertedTotal inside x " + convertedTotal);
        }


        if (theClickedButton.value === "=") {
            // if (result.textContent.value === "0" || result.textContent.value === "") {
            //     convertedTotal = "0";
            // console.log("the = button triggered " + convertedTotal);

            //     result.textContent = convertedTotal;
            // } else {
            //     result.textContent = "0";
            //     result.textContent = convertedTotal;
            // }
            if (convertedTotal === "0") {
                result.textContent = 0;
                console.log("the = button triggered " + convertedTotal);

            } else {
                result.textContent = convertedTotal;

            }
        }



        // working 
        if (theClickedButton.value === "AC") {
            convertedTotal = 0;
            result.textContent = "0";
        }


    })
}

function splitNumber(operator) {
    let splitted = tempHolder.split(`${operator}`);
    let firstNumber = parseFloat(splitted[0]);
    let secondNumber = parseFloat(splitted[1]);
    if (operator === "+") {
        total = add(firstNumber, secondNumber);
        console.log("add function was called");
    }
    if (operator === "-") {
        total = subtract(firstNumber, secondNumber);
        console.log("subtract function was called");
    }
    if (operator === "/") {
        total = division(firstNumber, secondNumber);
        console.log("division function was called");
    }
    if (operator === "x") {
        total = multiplication(firstNumber, secondNumber);
        console.log("multiplication function was called");
    }
    return total.toString();
}


function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function subtract(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function division(num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
}

function multiplication(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
}