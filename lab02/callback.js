let add = (a,b) => a + b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

let calculator = (num1, num2, operation) => {
    const result = operation(num1, num2);
    return result;
}
console.log(calculator(10, 5, add));
console.log(calculator(10, 5, multiply));
console.log(calculator(10, 5, divide));
console.log(calculator(10, 5, (a,b) => a - b)); // Subtraction


// Callback function example
// setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
// }, 1000);

// setTimeout(() => {
//     console.log("This message is shown after 2 seconds");
// }, 2000);