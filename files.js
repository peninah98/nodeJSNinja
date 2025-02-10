// importing file system module provided by nodejs core module

const fs = require("fs")
fs.readFile("./documents/blogs.txt", (err, data) => {
  if (err) {
    console.log(err)
  } else {
    // these will return the buffer as a string in the console
    // buffer is the type of data that will be returned from the server to the client side of the process that generated this file to make sure that the data is not corrupted and that the server properly handles the data appropriately it has to be stringified.
    console.log(data)
    //stringfy the data
    console.log(data.toString())
  }
})

console.log("This is the last lline and it has been not blocked")
