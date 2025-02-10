const fs = require("fs")
const textfile = `Detecting the platform
React Native Module detects the platform in which the app is running and uses this option when only the small parts of the codes are platform-specific.

Before we dive into platform properties let’s start with the most used properties that are used to check the platform. It returns the string value representing the current OS. it has different values. In TypeScript is an enum of three values enum(’android’ | ‘ios’, | ’ web’)`

fs.writeFile("./documents/blog2.txt", textfile, () => {
  console.log("File saved successfully")
})


// When the file is not there there it will create it directly and write the contebt
fs.writeFile("./documents/new.txt", textfile + "💜💜💜💜💜", () => {
  console.log("File saved successfully")
})
