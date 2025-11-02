// string_methods.js

// Character based methods
let strOne = new String("India is my Country");

// Retrieving character in specific index
console.log(strOne.charAt(0)); // Output: 'I'

// Retrieving ASCII code of character in specific index
console.log(strOne.charCodeAt(4)); // Output: 105 ('i')

// First occurrence of the given character
console.log(strOne.indexOf('m')); // Output: 9

// Last occurrence of the given character
console.log(strOne.lastIndexOf('i')); // Output: 6

// Retrieve the length of string
console.log(strOne.length); // Output: 19

// Removing white spaces before and after the actual string
console.log(">>" + "  Rocket Racoon    ".trim() + "<<"); // Output: '>>Rocket Racoon<<'

// Removing white spaces before the actual string
console.log(">>" + "  Rocket Racoon    ".trimStart() + "<<"); // Output: '>>Rocket Racoon    <<'

// Removing white spaces after the actual string
console.log(">>" + "  Rocket Racoon    ".trimEnd() + "<<"); // Output: '>>  Rocket Racoon<<'

// String padding
console.log("5".padStart(3, '0')); // Output: '005'
console.log("5".padEnd(3, '0')); // Output: '500'

// Repeating string
console.log("Good Morning !!! ".repeat(3)); // Output: 'Good Morning !!! Good Morning !!! Good Morning !!! '

// Replace first occurrence
console.log("meghsham".replace("m", "M")); // Output: 'Meghsham'

// Replace all occurrences
console.log("Lenovo Legion Y540".replaceAll(' ', '-')); // Output: 'Lenovo-Legion-Y540'

// Slice
let myVehicle1 = "Royal Enfield Continental GT 650";
console.log(myVehicle1.slice(0, 5)); // Output: 'Royal'
console.log(myVehicle1); // Output: 'Royal Enfield Continental GT 650'

// Substr (cut string from given index to given length)
console.log(("Eat, Code, Sleep, Repeat").substr(5, 4)); // Output: 'Code'

// Substring (extract characters from start index to end index)
console.log(("Eat, Code, Sleep, Repeat").substring(5)); // Output: 'Code, Sleep, Repeat'
console.log(("Eat, Code, Sleep, Repeat").substring(11, 16)); // Output: 'Sleep'

// Converting cases
console.log("JavaScript ES6".toLowerCase()); // Output: 'javascript es6'
console.log("JavaScript ES6".toUpperCase()); // Output: 'JAVASCRIPT ES6'
