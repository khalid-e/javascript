// for (let i = 0; i < 100; i++) {
//   if (i == 3) {
//     continue
//     // break;
//   }
//   console.log("Khalid", i);
// }

// let i = 0;
// while (i < 100) {
//   console.log("Khalid", i);
//   i++;
// }

// let i = 0;
// do {
//   console.log("Khalid", i);
//   i++;
// } while (i < 100);

// for of
// const colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color);
// }

// // for in
// const person = {
//   name: "Alice",
//   age: 30,
//   city: "New York",
// };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// Print numbers from 1 to 10
// Write a for loop that prints numbers from 1 to 10.
// for (let i = 1; i<=10; i++){
//     console.log(i)
// }

// Sum all numbers from 1 to 100
// Use a for loop to calculate and print the total sum.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i; // same as: sum = sum + i
// }
// console.log("The total sum is:", sum);

// // Print all elements in an array
// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// // Count how many even numbers are in an array
// // let numArray = [1, 4, 6, 7, 9, 10]
// // let counter = 0
// // for (num of numArray){
// //     if (num % 2 == 0){
// //         console.log(num)
// //         counter+=1
// //     }
// // }
// // console.log("Even Numbers Count:", counter)

// // Create a pattern with stars
// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }

// // Print the multiplication table of any number from 1 to 10
// let num = 3;

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " × " + i + " = " + num * i);
// }

// //  Reverse an array using a for loop
// let arr = [10, 20, 30, 40];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// // Find the total of only the odd numbers in an array
// let nums = [5, 8, 11, 14, 17];

// sum = 0;

// for (let numb1 of nums) {
//   if (numb1 % 2 != 0) {
//     sum += numb1;
//   }
// }
// console.log(sum);

// // Count how many words in an array have more than 5 letters
// let words = ["apple", "banana", "kiwi", "strawberry", "pear"];

// count = 0
// for (let word of words){
//     if (word.length > 5){
//         count += 1
//     }
// }
// console.log(count)

// While Loop Practice Questions (JavaScript)

// Print numbers from 10 to 1 (counting down)
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Keep doubling a number until it’s over 1000
// let i = 2;
// while (i <= 1000) {
//   console.log(i);
//   i = i * 2;
// }

// 3. Reverse a number using a while loop
// Input: 1234 ➝ Output: 4321

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a number to reverse: ", function (input) {
//   let num = parseInt(input);
//   let reversed = 0;

//   while (num > 0) {
//     let lastDigit = num % 10;
//     reversed = reversed * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }

//   console.log("Reversed number:", reversed);
//   rl.close();
// });

// Sum the digits of a number
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to sum its digits: ", function (input) {
  let num = parseInt(input);
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  console.log("Sum of digits:", sum);
  rl.close();
});