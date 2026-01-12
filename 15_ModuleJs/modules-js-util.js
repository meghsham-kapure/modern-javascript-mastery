// exporing CONSTANTS sally we dont import variable in var and let 
export const FIRST_NAME = "Meghsham";
export const LAST_NAME = "Kapure";

// we can export one or more function with export
export function sayHello(name){
    console.log(`Hello, ${name}! `);
}

// there can be only one default function 
export default async function doSoething(){
    for (let i = 0; i <999999999; i ++){}
    console.log("excuted loop successfully!!");
    
};

