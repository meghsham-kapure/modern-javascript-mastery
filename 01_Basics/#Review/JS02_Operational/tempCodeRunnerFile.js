//Custom date creation object
// let myCreatedDate1 = new Date(1996,9,9);
// // here month range is from 0 to 11 and day range is from 1 to 31, depending on the month.
// console.log(myCreatedDate1);//1996-10-08T18:30:00.000Z
// console.log(myCreatedDate1.toLocaleDateString());//9/10/1996


// let myCreatedDate2 = new Date(1996,9,9, 11,55,12);
// // here month range is from 0 to 11 and day range is from 1 to 31, depending on the month.
// console.log(myCreatedDate2, typeof myCreatedDate2);//1996-10-08T18:30:00.000Z
// console.log(myCreatedDate2.toLocaleString());//9/10/1996


// //Time-stamps

// let myTimeStamp = Date.now();
// console.log(myTimeStamp, typeof myTimeStamp); //1725633590589
// //generating  the milliseconds value from 1 Jan 1970

// let currentTime = (new Date(myCreatedDate1)).getTime();
// console.log(currentTime, typeof currentTime);
// const ageInMilliseconds = myTimeStamp - currentTime;
// const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
// const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);
// console.log(ageInYears);
