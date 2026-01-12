# Asynchronous Javascript

- JS is Single-Thread Synchronous programming language. By default, javascript code is line by line from top to bottom. But in some case we might change the behavior creating parallel thread and writing asynchronous js code.

## Sync in JS
- Doing tasks one by one in sequence, finnish current task and then taking the new task in the queue. 
- This block the code flow till the currernt task is completed.
```js
// Synchronus code
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
console.log("Task 5");
```


## Asynchronus in JS
- Doing tasks one by one in sequence, if the current task is asynchronus then let it take its time to conclude and return the result, and meanwhile do next tasks.
-This does not block the code flow
```js
// Asysnchronus code
console.log("Task 1");
setTimeout(()=>{console.log("Task 2 ");
}, 2000)
console.log("Task 3");
```

## Callback
-  A callback is a function passed to another fucntion as its argument
- It could be fucnction object reference or arrow function.
```js

let name = "John Snow"
function sayHello(){
    console.log(`Namaste, ${name}`);
}

function executeFunction (fun){
    fun();
}

executeFunction(sayHello);
executeFunction(()=> console.log(`Hello, ${name}`))
```

Callback hell is code that has over-nesting of callbacks forming the big pyramid stucture of callbacks.
```js
function getData(id, getNextData) {
    setTimeout(()=>{
        console.log("Data for ID " + id);
        if (getNextData) getNextData();
    },1000);
}

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});
```

 