// importing file system module provided by nodejs core module

const fs = require("fs")
fs.readFile("./documents/blogs.txt", (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})
