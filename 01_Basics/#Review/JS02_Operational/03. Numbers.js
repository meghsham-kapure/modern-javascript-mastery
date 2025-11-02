// // Playing Around Numbers

// //Explicitly defining variable with number
//     let balance = new Number("76000");
//     console.log(balance, typeof balance); // Output : [Number: 76000] object

// //counting number of digits in given number
//     console.log(balance.toString().length);

// //formats a number using fixed-point notation returning returns a string representing the number with a specified number of digits after the decimal point.
//     console.log((123.455).toFixed(2)); //only 2 digits after . will be kept, rounding off digit after the specified precision

// //formats a number to a specified length, representing the number of total digits (before and after the decimal point) rest value is in exponential format.
//     console.log((123.455).toPrecision(2));

// //format the number in readable format with comma
//     console.log((10000000000).toLocaleString()); //by default its US standards if not specified explicitly
//     console.log((10000000000).toLocaleString('en-IN')); //by default its american standards if not specified explicitly

// // Math conversion wir Math library
//     // getting by default values
//     console.log(Math.PI);

//     //functions
//     console.log(Math);

//     //converting values to be positive values
//     console.log(Math.abs(-45));
//     console.log(Math.abs(45));

//     //round off
//     console.log(Math.round(1.4));
//     console.log(Math.round(1.5));
//     console.log(Math.round(1.6));
//     console.log();
    
//     //ceil
//     console.log(Math.ceil(1.0));
//     console.log(Math.ceil(1.4));
//     console.log(Math.ceil(1.5));
//     console.log(Math.ceil(1.6));
//     console.log();


//     //floor
//     console.log(Math.floor(1.0));
//     console.log(Math.floor(1.4));
//     console.log(Math.floor(1.5));
//     console.log(Math.floor(1.6));

// //finding min value out given
// console.log(Math.min(4,7,1,8,2));

//  //finding max value out given
//  console.log(Math.max(4,7,3,8,2));

//create a random value
console.log(Math.round(Math.random() * 10)+1); // generating values between 1 to 10

const min = 10 ;
const max = 20 ;
// const value = (Math.floor(Math.random() * (max - min+1))+ min) ;//CONFUSED RESEARCH THIS 



