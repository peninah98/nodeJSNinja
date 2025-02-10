const fs = require("fs")
fs.mkdir("./assets", (error) => {
  if (error) {
    console.log(error)
  }
  console.log("folder successfully created")
})

fs.mkdir("./utils", (error) => {
  if (error) {
    console.error(error)
  }
  console.log("The utility folder was successfully created")
})
