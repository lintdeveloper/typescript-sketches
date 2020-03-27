// Rest Parameter: pass n number of arguments using ...n

// Then
/* function add() {
    return Array.prototype.slice.call(arguments).reduce(function(acc, number) {
        return acc + number
    });
} */

// With rest: modifying the above
/*function add(...numbers) {
    return numbers.reduce( (acc, number) => acc + number);
}
console.log(add(3, 4, 6)); */

//Spread : When combining arrays together
const fruits = ["apple", "pear"];
const morefruits = ['peach'];

const allFruits = [...fruits, ...morefruits]

console.log(allFruits);

//Default parameters values for functions
// then
/*function multiply(num, multiplier) {
    num = (num !== undefined) ? num: 0
    multiplier = (multiplier !== undefined) ? multiplier: 1
    return num * multiplier;
}

console.log(
    multiply(),
    multiply(5, 4),
    multiply(5)
); */

// Now Default arguments
/* function multiply(num =0, multiplier = 1) {
    return num * multiplier;
}

console.log(
    multiply(),
    multiply(5, 4),
    multiply(5)
); */






