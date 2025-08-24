function printMyInfo() {
  console.log("hello");
  console.log("world");
//   console.log("my");
//   console.log("name");
//   console.log("is");
//   console.log("Khalid");
//   console.log("I");
//   console.log("live");
//   console.log("in");
//   console.log("London");
}

// let timer = setTimeout(printMyInfo, 10000);

// setTimeout(function () {
//   clearTimeout(timer);
// }, 15000);


let timer = setInterval(printMyInfo, 1000)

setTimeout(stopTimer, 10000)

function stopTimer () {
clearInterval(timer)
}














// throw new Error ("I threw an error")