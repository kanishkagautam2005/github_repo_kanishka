let numberToCheck = 153;
const originalValue = numberToCheck;
let digitTotal = 0;
const digitCount = String(originalValue).length;

while (numberToCheck > 0) {
    const lastDigit = numberToCheck % 10;
    digitTotal = digitTotal + lastDigit ** digitCount;
    numberToCheck = Math.floor(numberToCheck / 10);
}

if (digitTotal === originalValue) {
    console.log("Yes");
} else {
    console.log("No");
}
