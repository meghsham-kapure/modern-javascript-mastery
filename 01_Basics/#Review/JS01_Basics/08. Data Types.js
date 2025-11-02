let boxOne; //value of box is "undefined", because no values has been assigned to it yet;

let boxTwo= null; //value of box is 'null, because its intentionally kept empty

//boxThree's value here is 'not defined', because its not defined yet
let boxThree= "something";
//boxThree's value here is 'something'


/* while storing values in JS, we don't have to explicitly specify the type of data. 
    Primitive Data Types : 
        0. Number
        1. BigInt
        2. Boolean
        3. String
        4. Symbol
        5. null
        6. undefined
*/
let numberValue = 123456;
let bigIntValue = 123445678909876543121n; //bigInt Values are ended with n
let booleanValue = false;
let StringValue1 = "Meghsham";
let StringValue2 =  new String("Meghsham");
let SymbolOne = Symbol("Meghsham");
let nullValue = null;
let undefinedValue = undefined;

/*        Referenced (Non-Primitive) Data Types
        1. Objects
        2. Array
        3. Functions
*/

const heros = ['shaktiman', 'aryaman', 'junier-g','chacha chudhari'];

let myObject ={
    myName : 'Meghsham',
    myFavColor : 'Blue'
}

let  myFunction = function () {
    console.log(myObject);
}

// console.log(myFunction);

// myFunction();

/*
As JS allows us to put any type of data in any variable, 
it bit scary to know what data and which operation can be perform it on runtime
so JS provides the method to check the fetch it
*/
// variableName= "AbC";
// console.log(typeof variableName);

// variableName= 123;
// console.log(typeof variableName);

// variableName=[1,2,3,4];
// console.log(typeof variableName);



let SymbolOneCopied = SymbolOne;
let SymbolTwo= Symbol("Meghsham");

// console.log(SymbolOne==SymbolOneCopied);
// console.log(SymbolOne==SymbolTwo);


//typeof operator result

console.log(typeof undefined); // => undefined

console.log(typeof null); // => object

console.log(typeof true); // => boolean

console.log(typeof 123); // => number

console.log(typeof 123n); // => bigint

console.log(typeof 'S'); // => string

console.log(typeof 'String Value'); // => string

console.log(typeof {filed:'value'}); // => object

let fun =()=>'This is arrow function';
console.log(typeof fun); // => function (function object)


