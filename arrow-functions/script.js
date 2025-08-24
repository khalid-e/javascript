// function multiply(x, y) {
//   return x * y;
// }

// console.log(multiply(2,5))
// console.log(multiply(9, 10))

// arrow function
// var multiply =  x => x*5
// console.log(multiply(2))
// console.log(multiply(9))

// let salaryCalculator = function (salary, tax) {
//   return salary - tax;
// }

// console.log(salaryCalculator(400,20))

// arrow function
// let salaryCalculator = (salary, tax) => salary - tax;
// console.log(salaryCalculator(400, 20));

// const words = ["china", "italy", "somalia", "canada"]

// const upperCased = words.map(country => country.toUpperCase())

// console.log(upperCased)

// const numbers = [2, 19, 48, 21];
// const doubled = numbers.map((x) => x * 2);
// console.log(doubled);

//anonymous function
const numbers = [2, 19, 48, 21];
const doubled = numbers.map(function (x) {
    return x * 2}
);
console.log(doubled);


 