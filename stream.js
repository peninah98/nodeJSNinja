const fs = require("fs")

const readStream = fs.createReadStream("./documents/blogStream.txt", {
  encoding: "utf8",
})
const writeStream = fs.createWriteStream("./documents/blogStreamWrite.txt")
// readStream.on("data", (chunkofData) => {
//   console.log(
//     "**************************************** NEW CHUNK OF DATA ***************************************"
//   )
//   console.log(`Received ${chunkofData.length} bytes of data.`, chunkofData)
//   writeStream.write("\nNew chunk of data\n")
//   writeStream.write(chunkofData)
// })


//pipping

readStream.pipe(writeStream)