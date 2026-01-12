





const studentMap = new Map([
  [1, {name : "John Doe", marks : 85 }],
  [2, {name : "Jane Smith", marks :32,}],
  [3, {name : "Peter Jones", marks :78}],
]);

function getStudent(id) { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (studentMap.has(id)) resolve({ id: id, name: studentMap.get(id).name, marks: studentMap.get(id).marks })
            else reject({ message : "not found" })
        },3000)
    });        
}


function showStudent(id) {
    getStudent(id)
        .then(
            result => {
                result.isPassed=result.marks > 35 ? "Passed" : "Failed"
                return result;    
            }
        )
        .then(result => console.log(result))
        .catch((error) => console.log(error));
}

showStudent(1);
showStudent(2);
showStudent(3);
showStudent(4);




// let promise = new Promise((resolve, reject) => {
//     console.log("Performing Operation ...");
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * 10);
//         random % 2 == 0 ? resolve("Success") : reject("failed");
//     }, 1000);
    
// });

// console.log(promise);
    
// promise
// .then(()=>console.log("Promise resolved"))
// .catch((error)=> console.log("Promise could not be resolved"));   
   












// let response1 = new Promise((resolve, reject) => {
//     console.log("Getting response 1 ");

//     setTimeout(() => { }, 3000)
    
// })



















