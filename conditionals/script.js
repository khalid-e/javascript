// if
// let isMonday = false
// if (isMonday == true) {
//   let count = Math.floor(Math.random() * 100);
//   const userName = "Alex";
//   function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
// }

//   let items = ["apple", "banana", "cherry"];
//   for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//   }
//   const sum = (a, b) => a + b;
//   let today = new Date();
//   console.log(today.toISOString());
//   if (count > 50) {
//     console.log("High count");
//   }
//   let user = { id: 1, name: "Jane" };
//   items.push("date");
//   let upper = userName.toUpperCase();
//   let timer = setTimeout(() => alert("Time's up!"), 3000);
//   const randomItem = items[Math.floor(Math.random() * items.length)];
//   while (count < 60) {
//     count += 5;
//   }
//   const nums = Array.from({ length: 5 }, () => Math.random());
//   let isLoggedIn = Boolean(user);
//   function square(n) {
//     return n * n;
//   }

// if else
// let day = "Tuesday"
// if (day == "Monday") {
//   console.log("It's Monday");
// }
// else {
//     console.log("It's Not Monday")
// }

// if else if
// let day = "Tuesday";

// if (day === "Monday") {
//   console.log("It's Monday");
// } else if (day === "Tuesday") {
//   console.log("It's Tuesday");
// } else {
//   console.log("It's not Monday or Tuesday");
// }

// // switch

// let color = "blue";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "green":
//     console.log("Color is green");
//     break;
//   default:
//     console.log("Color is unknown"); // same as "else"
// }

// Write code that checks if a number is even or odd.
// let age = 0

// if(age%2 == 0) {
//   console.log("Age is even")
// }
// else{
//   console.log("Age is odd")
// }

// Write code that checks a person’s age and prints whether they are a child, teen, or adult.
let age = 2;
if (age < 13) {
  console.log("This is a child");
} else if (age >= 13 && age < 18) {
  console.log("This is a teenager");
} else {
  console.log("This is an adult");
}

// Create a grade system:

// A = 90–100

// B = 80–89

// C = 70–79

// D = 60–69

// F = below 60

let score = 0;

if (score < 0 || score > 100) {
  console.log("Invalid score. Must be between 0 and 100.");
} else if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Temperature Checker
// Write a program that checks the temperature and prints:

// "Cold" if the temperature is below 10

// "Warm" if the temperature is between 10 and 25

// "Hot" if the temperature is above 25

let temperature = 10;
if (temperature < 10) {
  console.log(`The temperature is ${temperature}, so it is Cold`);
} else if (temperature >= 10 && temperature <= 25) {
  console.log(`The temperature is ${temperature}, so it is Warm`);
} else {
  console.log(`The temperature is ${temperature}, so it is Hot`);
}

// Use a switch statement to check the day of the week.
// If it's Saturday or Sunday, print "Weekend"
// Otherwise, print "Weekday".

let day = "Monday";
switch (day) {
  case "Saturday":
    console.log("Weekend");
    break;
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}


// Write a switch statement that takes a fruit name and prints the category:

// Citrus: "orange", "lemon", "lime"

// Tropical: "banana", "mango", "pineapple"

// Berry: "strawberry", "blueberry", "raspberry"

// If it's none of those, print: "Unknown category"

let fruit = "mango";

switch (fruit.toLowerCase()) {
  case "orange":
  case "lemon":
  case "lime":
    console.log("Citrus");
    break;

  case "banana":
  case "mango":
  case "pineapple":
    console.log("Tropical");
    break;

  case "strawberry":
  case "blueberry":
  case "raspberry":
    console.log("Berry");
    break;

  default:
    console.log("Unknown category");
}