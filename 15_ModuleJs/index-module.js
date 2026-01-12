
// Importing the constant variables
import { FIRST_NAME, LAST_NAME } from "./modules-js-util.js";
console.log(`My name is ${FIRST_NAME} ${LAST_NAME}`);
// NOTE :  U

// find the exact same name function and import it 
import  {sayHello}  from "./modules-js-util.js";
sayHello("John Snow");

// only default function is imported
import doIt from "./modules-js-util.js";

doIt();