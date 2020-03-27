/*const numbers = [0, 1, 2];

numbers.map(function(number){
    return console.log(number);
})

// one argument => no need for parenthesis
numbers.map(number => console.log(number)) */

// Sample 1: Using that outside the scope
// const quotient = {
//     numbers: [1,2,3,4,5,6,7],
//     results: [],
//     divideFn: function(divisor) {
//         let that = this;
//         return this.numbers.map(function (divident) {
//             if (divident % divisor === 0) {
//                 return that.results.push(divident)
//             }
//         })
//     }
// }

// Sample 2: Using bind to bind this
// const quotient = {
//     numbers: [1,2,3,4,5,6,7],
//     results: [],
//     divideFn: function(divisor) {
//         return this.numbers.map(function (divident) {
//             if (divident % divisor === 0) {
//                 return this.results.push(divident)
//             }
//         }.bind(this))
//     }
// }
// quotient.divideFn(3);
// console.log(quotient.results);

//Arrow func solves the above sample 1 and 2 probs
const quotient = {
    numbers: [1,2,3,4,5,6,7],
    results: [],
    divideFn: function(divisor) {
        return this.numbers.map(divident => {
            if (divident % divisor === 0) {
                return this.results.push(divident)
            }
        })
    }
}
quotient.divideFn(3);
console.log(quotient.results);
