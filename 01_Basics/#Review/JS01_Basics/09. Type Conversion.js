/* 
To ensure the data and its correct type , we may have to convert it to specific type for that we have to understand the conversion in JS.
*/

//Converting value1s to number

let value1 = '123';
value1=Number(value1);
console.log(typeof value1,value1); // ==> number 123

let value2 = '123A';
value2=Number(value2);
console.log(typeof value2,value2);  // ==> number NaN
//the value2 is a string that has some character, which cant be converted, so even if the value is converted but its an erroneous value, and which is denoted by NaN (Not a Number)

let value3 = true;
value3=Number(value3);
console.log(typeof value3,value3);  // ==> number 1
//boolean value true is 1 and false is 0

let value4 = new Date();
value4=Number(value4);
console.log(typeof value4,value4);

// In JavaScript, when a Almost Anything and Everything is possible to be converted to be String)

// While converting values null and zero values are converted to false and other are converted to true


