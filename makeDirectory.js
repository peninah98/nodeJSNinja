const fs = require("fs")

if(fs.existsSync("./assets")){

    fs.rmdir("./assets", (error) => {
      if (error) {
        console.log(error)
      }
      console.log("folder successfully deleted")
    })
}

// first chech if the file does not exist yet
if(!fs.existsSync("./utils")) {
  fs.mkdir("./utils", (error) => {
  if (error) {
    console.error(error)
  }
  console.log("The utility folder was successfully created")
})  
}

