const value = 153;
let number = value;
let total = 0;
const length = String(value).length;

while (number > 0) {
    const digit = number % 10;
    total += digit ** length;
    number = Math.floor(number / 10);
}

if (total === value) {
    console.log(value + " is an Armstrong number");
} else {
    console.log(value + " is not an Armstrong number");
}
