"use strict";

const form = document.getElementById("armstrongForm");
const numberInput = document.getElementById("numberInput");
const result = document.getElementById("result");
const fruits = ["apple", "banana"];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Before changes:", fruits);

    const originalNumber = Number(numberInput.value);
    let number = originalNumber;
    let sum = 0;
    const digits = String(number).length;

    fruits.push("mango");
    fruits[0] = "orange";

    while (number > 0) {
        const digit = number % 10;
        sum += digit ** digits;
        number = Math.floor(number / 10);
    }

    console.log("After changes:", fruits);
    const fixedFruits = Object.freeze(["apple", "banana"]);

    try {
        fixedFruits.push("mango");
    } catch (error) {
        console.log("The frozen array cannot be changed:", error.message);
    }

    console.log("Frozen array:", fixedFruits);

    if (sum === originalNumber) {
        result.textContent = "Yes, " + originalNumber + " is an Armstrong number.";
    } else {
        result.textContent = "No, " + originalNumber + " is not an Armstrong number.";
    }
});
