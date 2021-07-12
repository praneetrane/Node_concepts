//function sum(a,b){
  //return a+b;
//}

//----Object Destructuring
const {sum,subtract}=require('./helper');

/* const http=require('http');

const server=http.createServer((req,res)=>{
res.end("Hello World from node js")
} );

server.listen(3000); */



const ans_sum=sum(20,50);

const ans_subtract=subtract(85,50);

console.log("Answer-Sum:", ans_sum);

console.log("Answer-Subtract:", ans_subtract);
