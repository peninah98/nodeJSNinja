// global object

console.log(global)

global.setTimeout(() => {
  console.log("3 seconds passed")
  console.log("This is the time out")
}, 3000)
