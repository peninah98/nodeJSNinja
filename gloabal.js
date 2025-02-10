// global object

// console.log(global)

global.setTimeout(() => {
  console.log("3 seconds passed")
  console.log("This is the time out")
}, 3000)

setTimeout(() => {
  console.log("3 seconds passed")
  console.log("This is the time out")
  clearInterval(int)
}, 3000)

const int = setInterval(() => {
  console.log("In the interval")
}, 1000)

// checking current directory and file names
console.log("Directory name", __dirname)
console.log("Directory name", __filename)
