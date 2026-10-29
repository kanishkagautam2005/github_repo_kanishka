const fruits = ["apple", "banana"];

console.log("Before changes:", fruits);

fruits.push("mango");
fruits[0] = "orange";

console.log("After changes:", fruits);

const fixedFruits = Object.freeze(["apple", "banana"]);

try {
    fixedFruits.push("mango");
} catch (error) {
    console.log("The frozen array cannot be changed:", error.message);
}

console.log("Frozen array:", fixedFruits);
