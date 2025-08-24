// ES6 (ECMAScript 2015) Features Example

// 1. let and const
let count = 10;
count = 20;

const name = "Alice";
// name = "Bob"; // ❌ Error

// 2. Arrow Functions
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// 3. Template Literals
const greeting = `Hello, ${name}!`;
console.log(greeting);

const multiLine = `This is
a multi-line
string`;
console.log(multiLine);

// 4. Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet());

// 5. Destructuring Assignment
const [a, b] = [1, 2];
console.log(a, b);

const user = { name: "Alice", age: 25 };
const { name: userName, age } = user;
console.log(userName, age);

// 6. Enhanced Object Literals
const userObj = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
console.log(userObj.greet());

// 7. Spread and Rest Operators
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));

// 8. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}
const alice = new Person("Alice", 25);
console.log(alice.greet());

// 9. Promises
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
fetchData().then((data) => console.log(data));

// 10. for...of Loop
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}

// 11. Map and Set
const set = new Set([1, 2, 2, 3]);
console.log(set);

const map = new Map();
map.set("name", "Alice");
console.log(map.get("name"));