const fs   = require('fs');

if(fs.existsSync("./documents/deleteMe.txt")) {
    fs.unlinkSync("./documents/deleteMe.txt");
    console.log("File deleted successfully");
} else {    
    console.log("File does not exist");
}
