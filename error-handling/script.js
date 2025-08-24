let noInternetError = new Error("Sorry, there is no internet");
let internet = false;
// try {
// var firstName
// console.log(firstName.toUpperCase())
// console.log("I am after the uppercase")

if (internet == false) {
  throw noInternetError;
} else {
  console.log("Yes, there is internet");
}
// } catch (error) {
// //   console.log(error.message);
// } finally {
//   console.log("I always run regardless of an error or not");
// }
