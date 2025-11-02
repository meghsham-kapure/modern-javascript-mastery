// Dates in JavaScript

/*
JavaScript dates are calculated from a reference point: 
00:00 on January 1st, 1970 (UTC), also known as the Unix Epoch.
Although the Temporal API is being developed by TC39 for better date/time handling, 
it is not yet production-ready. So, we rely on the current Date object.
*/

// Creating a Date object for the current date and time
let myDate = new Date();

// Example of displaying the full date object
console.log("myDate:", myDate); 
// Output: 2024-09-06T12:57:18.876Z

// Converting the date to a readable string format
let stringDate = myDate.toString();
console.log("stringDate:", stringDate, typeof stringDate);
// Output: "Fri Sep 06 2024 18:33:46 GMT+0530 (India Standard Time)" "string"

// Converting to just the time part
let timeString = myDate.toTimeString();
console.log("timeString:", timeString, typeof timeString);
// Output: "18:50:53 GMT+0530 (India Standard Time)" "string"

// Converting the date to ISO 8601 format (UTC)
let isoString = myDate.toISOString();
console.log("isoString:", isoString, typeof isoString);
// Output: "2024-09-06T13:11:32.382Z" "string"

// Converting the date to a UTC string (RFC 1123 format)
let utcString = myDate.toUTCString();
console.log("utcString:", utcString, typeof utcString);
// Output: "Fri, 06 Sep 2024 13:21:48 GMT" "string"

// Converting to a localized date string based on system settings
let localDateString = myDate.toLocaleDateString();
console.log("localDateString:", localDateString, typeof localDateString);
// Output: "6/9/2024" "string"

// Converting to a localized time string based on system settings
let localeTimeString = myDate.toLocaleTimeString();
console.log("localeTimeString:", localeTimeString, typeof localeTimeString);
// Output: "6:47:03 PM" "string"

// Converting to localized date and time string based on system settings
let localeString = myDate.toLocaleString();
console.log("localeString:", localeString, typeof localeString);
// Output: "6/9/2024, 6:48:03 PM" "string"

// Converting the date to a JSON-compatible string (ISO format)
let jsonDate = myDate.toJSON();
console.log("jsonDate:", jsonDate, typeof jsonDate);
// Output: "2024-09-06T13:13:41.263Z" "string"

// Creating a custom date: October 9, 1996
let myCreatedDate1 = new Date(1996, 9, 9); // Month is zero-based (9 = October)
console.log("myCreatedDate1:", myCreatedDate1); 
// Output: "Wed Oct 09 1996 00:00:00 GMT+0000 (UTC)"
console.log("myCreatedDate1 (localized):", myCreatedDate1.toLocaleDateString());
// Output: "9/10/1996"

// Creating a custom date with specific time: October 9, 1996, 11:55:12
let myCreatedDate2 = new Date(1996, 9, 9, 11, 55, 12);
console.log("myCreatedDate2:", myCreatedDate2, typeof myCreatedDate2);
// Output: "Wed Oct 09 1996 11:55:12 GMT+0000 (UTC)"
console.log("myCreatedDate2 (localized):", myCreatedDate2.toLocaleString());
// Output: "9/10/1996, 11:55:12 AM"

// Working with timestamps

// Getting the current timestamp (milliseconds since 1 Jan 1970)
let myTimeStamp = Date.now();
console.log("myTimeStamp:", myTimeStamp, typeof myTimeStamp); 
// Output: 1725633590589 "number"

// Calculating the age from a custom date
let currentTime = (new Date(myCreatedDate1)).getTime(); 
console.log("currentTime (from myCreatedDate1):", currentTime);
const ageInMilliseconds = myTimeStamp - currentTime;
const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);
console.log("ageInYears (calculated):", ageInYears);
// Output: Age in years (calculated from myCreatedDate1)

// Extracting specific date components from the current date
let dateX = new Date();
console.log("dateX.getTime():", dateX.getTime()); // Current timestamp in milliseconds
console.log("dateX.getHours():", dateX.getHours()); // Current hour
console.log("dateX.getMinutes():", dateX.getMinutes()); // Current minute
console.log("dateX.getSeconds():", dateX.getSeconds()); // Current second
console.log("dateX.getMilliseconds():", dateX.getMilliseconds()); // Current milliseconds
console.log("dateX.getDate():", dateX.getDate()); // Day of the month
console.log("dateX.getMonth() + 1:", dateX.getMonth() + 1); // Month (adding 1 because getMonth() is zero-based)
console.log("dateX.getFullYear():", dateX.getFullYear()); // Year
