// let student1 = {
//   firstName: "Khalid",
//   lastName: "Elmi",
//   age: 23,
// };

// let student2 = {
//   firstName: "Mohamed",
//   lastName: "Bilal",
//   age: "20",
// };

// console.log(student1);
// console.log(student2);

// console.log(`The age is ${student1.age}`);


// let person = new Object()
// person.firstname = "Khalid"
// person.age = 20
// console.log(person)


// person.talk = function () {
//     console.log("this person is talking")
// }

// person.talk()

// let person = {}
// console.log(person)
// person["firstName"] = "Ali"

// // console.log(person["firstName"])

// let person = {
//     firstName : "Maryam",
//     age : 20
// }

// let {firstName} = person  //Destructuring
// console.log(firstName)



var person = {
    firstName : "Maryam",
    lastName : "Ali",
    age : 20,
    isMarried : false
}

for (let prop in person){
    console.log(person[prop])
}


