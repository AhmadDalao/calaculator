var button = document.querySelectorAll("button.numbers").length; // working

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

        let tempHolder = result.textContent; // great working so far
        // console.log("am temp holder to be sliced " + tempHolder);


        // console.log(tempHolder.length);
        var total;
        var convertedTotal;
        if (tempHolder.includes("+")) {
            let splitted = tempHolder.split("+");
            let firstNumber = parseFloat(splitted[0]);
            let secondNumber = parseFloat(splitted[1]);
            total = add(firstNumber, secondNumber);
            convertedTotal = total.toString();
            console.log("am total holder inside +  " + convertedTotal);

        }
        if (tempHolder.includes("-")) {
            let splitted = tempHolder.split("-");
            let firstNumber = parseFloat(splitted[0]);
            let secondNumber = parseFloat(splitted[1]);
            total = subtract(firstNumber, secondNumber);
            convertedTotal = total.toString();
            console.log("am total holder inside - " + convertedTotal);
        }
        if (tempHolder.includes("/")) {
            let splitted = tempHolder.split("/");
            let firstNumber = parseFloat(splitted[0]);
            let secondNumber = parseFloat(splitted[1]);
            total = division(firstNumber, secondNumber);
            convertedTotal = total.toString();
            console.log("am total holder inside / " + convertedTotal);
        }
        if (tempHolder.includes("x")) {
            let splitted = tempHolder.split("x");
            let firstNumber = parseFloat(splitted[0]);
            let secondNumber = parseFloat(splitted[1]);
            total = multiplication(firstNumber, secondNumber);
            convertedTotal = total.toString();
            console.log("am total holder inside x " + convertedTotal);
        }

        // there is small bug
        if (theClickedButton.value === "=") {
            result.textContent = "0";
            result.textContent = total
        }

        // try to use slice method to get numb one and numb two

        // working 
        if (theClickedButton.value === "AC") {
            result.textContent = "0";
        }


    })
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

// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         return add(num1, num2);
//     } else if (operator === "-") {
//         return subtract(num1, num2);
//     } else if (operator === "/") {
//         return division(num1, num2);
//     } else if (operator === "*") {
//         return multiplication(num1, num2);
//     } else {
//         console.log("Wrong operator");
//     }
// }