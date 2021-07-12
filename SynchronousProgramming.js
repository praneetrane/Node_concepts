const fs=require('fs');

const fileName="target.txt";

//---- Using Syncronous read file method. Now this is blocking code.
const data=fs.readFileSync(fileName);

console.log(data.toString());


console.log('Node JS async programming');