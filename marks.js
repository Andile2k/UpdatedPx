let prompt=require("prompt-sync")();

for (let i = 0; i < 3; i++) {
    const name = prompt("Enter the name ")
    
var status = "";
let average;
let sum;
let mark;

const mark1 =parseFloat(prompt("Enter for mark 1: "));
const mark2 =parseFloat(prompt("Enter for mark 2: "));
const mark3 =parseFloat(prompt("Enter for mark 3: "));

sum = mark1 + mark2 + mark3;
average = (mark1 + mark2 + mark3)/3;

if(average <50){
    status = "Fail"

}else if(average >=50 && average <75){
    status = "Pass"

}else if(average >= 75){
    status = "Distinction"

}else {
    status = "Invalid input"

}
console.log(`${name} Your final mark is ${average} ${status}`)

}



