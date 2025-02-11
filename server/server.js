const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")
  let path = "server/views"
  switch (req.url) {
    case "/":
      path += "index.html"
      break
    case "/about":
      path += "about.html"
      break
    default:
      path += "404.html"
      break
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("Cannot read the file", err)
      res.end()
    } else {
      res.end(data)
    }
  })
})

server.listen(3000, "localhost", () => {
  console.log("I am listening  the re quest on port 3000")
})
