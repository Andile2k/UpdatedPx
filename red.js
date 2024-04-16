let prompt=require("prompt-sync")();
let results;


const num1 =parseFloat(prompt("Enter the first number: "));
const num2 =parseFloat(prompt("Enter second number: "));

let operator = prompt("Enter an operator (either +,-,*,/ :");

switch(operator){
case '+':
    results = num1 + num2;
    console.log(`${num1} + ${num2}= ${results}`);
    break;
    case '-':
        results = num1 - num2;
        console.log(`${num1} - ${num2} = ${results}`)
        break;
    case '*':
        results = num1 *num2;
        console.log(`${num1} * ${num2} = ${results}`)
        break;
    case '/':
        results = num1 / num2;
        console.log(`${num1} / ${num2} = ${results}`)
        break;
}
