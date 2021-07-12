const fs=require('fs');

const fileName="target.txt";

fs.watch(fileName,()=>console.log('File changed!'));
