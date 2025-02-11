const http = require("http")

const server = http.createServer((req, res) => {
  console.log("request made")
  console.log(req.url, req.method, req.headers)

  res.setHeader('Content-Type', 'text/plain')
  res.write("Hello Dady!")
  res.end()

})

server.listen(3000, "localhost", () => {
  console.log("I am listening  the re quest on port 3000")
})
