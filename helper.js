/* function sum(a,b){
  return a+b;
} */

//----Arrow function syntax
const sum = (a, b) => a + b;

/* function subtract(a,b){
  return a-b;
} */

//----Arrow function syntax
const subtract = (a, b) => a - b;

//----Module export example
module.exports = {
  sum,
  subtract,
};

//----We can even export like
//exports.sum = (a, b) => a + b;

//console.log("Process:", process);
