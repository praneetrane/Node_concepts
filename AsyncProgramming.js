const fs=require('fs');

const fileName="target.txt";

//----Asynchronous read file method. This is non-blocking code.
fs.readFile(fileName,(err,data)=>{
if (err){
    console.log(err);
}

console.log(data.toString());
});

console.log('Node JS async programming');