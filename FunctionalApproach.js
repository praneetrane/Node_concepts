const fs = require("fs");

const fileName = "target.txt";

const errorHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());
//---- Used functional appraoch here. Created two different functions errorHandler & dataHandler. 
//---- Called these functions from readFile() 
//----Asynchronous read file method. This is non-blocking code.
fs.readFile(fileName, (err, data) => {
  if (err) {
    errorHandler(err);
  }
  dataHandler(data);
});

console.log("Node JS async programming");
