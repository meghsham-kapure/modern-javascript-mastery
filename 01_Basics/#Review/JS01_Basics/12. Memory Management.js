/* Types of Memory
    1. Stack (Primitive values are stored here, values are pass as copy of original value, so if second value is change it does not affect original)
    2. Heap (Refereed /non primitive values stored here, values are pass as reference of original value, so if change in second value is reflected on first one)

Q*/

let primitiveOne = 12345;
let primitiveTwo = primitiveOne;

primitiveTwo = 54321; // changing the second value

console.log(primitiveOne); // => 12345
console.log(primitiveTwo); // => 54321

let referenceOne = {
    user : "meghsham"
}
let referenceTwo = referenceOne;

referenceTwo.user =  "John Doe"

console.log(referenceOne.user); // => John Doe
console.log(referenceTwo.user); // => John Doe

