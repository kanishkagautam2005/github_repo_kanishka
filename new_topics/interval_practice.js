let seconds = 0;
let minutes = 0;

const timer = setInterval(function () {
    seconds++;

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    console.log(minutes + " minutes " + seconds + " seconds have passed");
}, 1000);

setTimeout(function () {
    clearInterval(timer);
    console.log("15 minutes completed!");
}, 15 * 60 * 1000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (number) {
    return number * number;
});

console.log(squares);

function add(first, second) {
    return first + second;
}

console.log(add(5, 6));
