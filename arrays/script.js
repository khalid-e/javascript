// let firstName = "John"  ///Primitive Datatype
// let age = 23

// let firstNames = ["John", "Ali", "Khalid", "Abdi", "Fatima"];
// let age = [23, 45]
// // console.log(firstNames[0])
// // console.log(firstNames[1])
// // console.log(age[1])
// // console.log(age.length)


// // let fName = firstNames[1]
// // console.log(fname)

// // firstNames.push("Khalid", "Abdi", "Fatima")

// // firstNames.pop()
// // firstNames.pop()
// // firstNames.unshift("Amira")
// // firstNames.shift("Amira");
// // firstNames.length = 2
// console.log(firstNames)


let country = ["United Kingdom", "France", "USA", "Brazil", "Germany"];
// console.log(country[1]);

country.push("Spain")
country[2]= 'Italy'
console.log(country)
console.log(`The Length of the array is: ${country.length}`);




let colors = ["red", "blue", "green", "yellow"];
colors.splice(2,1,"purple");
console.log(colors);




let words = ["I", "am", "using", "JavaScript"];
let sentence = words.join(" "); // Join with space
console.log(sentence);