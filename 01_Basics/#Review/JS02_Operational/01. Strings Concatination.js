//defining string
let stringOne = "String with 'double quotes'";
let stringTwo = 'String with "single quotes"';

console.log(stringOne);
console.log(stringTwo);

//Concatenation (adding string) [old way to add strings]

let firstName = "Meghsham";
let lastName = "Kapure";

let fullName =  firstName + lastName;

console.log(fullName[0]);

console.log(fullName);

fullName = lastName.concat(firstName);

console.log(fullName);

// trick concatenation
console.log('String'+1);
console.log(1+'String'+1);
console.log(1+1+'String'+1+1);


//String Interpolation

let interpolatedString = `My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
console.log(interpolatedString);


//string Object

let StringObject = new String ("Iron Man Mark42");
console.log(StringObject[0]);
