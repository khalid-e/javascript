// Logical Operators in JavaScript

// 1. AND Operator (&&)
let sunny = true;
let warm = true;

if (sunny && warm) {
  console.log("1. Let's go outside!");
}
// Explanation: Both sunny AND warm must be true

// 2. OR Operator (||)
let hasUmbrella = false;
let isNotRaining = true;

if (hasUmbrella || isNotRaining) {
  console.log("2. You can go for a walk.");
}
// Explanation: Only ONE of the two needs to be true

// 3. NOT Operator (!)
let isTired = false;

if (!isTired) {
  console.log("3. Let's study!");
}
// Explanation: !isTired means "not tired"

// 4. Combined Example
let isWeekend = true;
let finishedHomework = false;

if (isWeekend && !finishedHomework) {
  console.log("4. Do your homework first!");
}
// Explanation: It's the weekend AND homework is not done


let water = true
let milk = false

if (water && milk) {
    console.log("Buy Milk and Water")
}
else{
    console.log("Buy Nothing")
}


let football = true
let not_basketball = false

if (!not_basketball && football) {
    console.log("Likes basketball and football" )
}

else {
    console.log("Doesn't like basketball AND football");
}