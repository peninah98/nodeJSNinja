// Check the current operating system the app is running on

const os = require("os")
// console.log(os)

console.log(os.platform(), os.release(), os.homedir, os.hostname)