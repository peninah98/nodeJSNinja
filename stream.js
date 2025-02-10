const fs = require("fs")

const readStream = fs.createReadStream("./documents/blogStream.txt", {
  encoding: "utf8",
})
readStream.on("data", (chunkofData) => {
  console.log(
    "**************************************** NEW CHUNK OF DATA ***************************************"
  )
  console.log(`Received ${chunkofData.length} bytes of data.`, chunkofData)
})
