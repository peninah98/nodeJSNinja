const http = require("http")

const server = http.createServer((req, res) => {
  console.log("request made")
  console.log(req.url, req.method, req.headers)

  res.setHeader("Content-Type", "text/html")
  res.write(`<head> <link rel="stylesheet" href="#"></head>`)
  res.write(`<h1>Appreciations to my dearest parents</h1>`)
  res.write(`<emp>Hello Dady!</emp>`)
  res.write(`<p>Hello Dady!</p>`)
  res.write(
    `<p>Hello Mom I really love my dear parents you did alot for me!</p>`
  )
  res.end()
})

server.listen(3000, "localhost", () => {
  console.log("I am listening  the re quest on port 3000")
})
