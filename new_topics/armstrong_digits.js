const startingNumber = 153;
let remainingNumber = startingNumber;
let poweredDigitSum = 0;
const numberOfDigits = String(startingNumber).length;

while (remainingNumber > 0) {
    const currentDigit = remainingNumber % 10;
    poweredDigitSum += currentDigit ** numberOfDigits;
    remainingNumber = Math.floor(remainingNumber / 10);
}

console.log(poweredDigitSum === startingNumber ? "Yes" : "No");
