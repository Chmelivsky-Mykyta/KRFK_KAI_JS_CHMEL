
function sayHello() {
    console.log("Hello world");
}
sayHello();

function greet(name) {
    console.log(`Привіт, ${name}!`);
}
greet("Микита");
greet("Чмелiвський");

// Варіант 16
// Функція, яка перевіряє, чи число є додатнім
function isPositive(num) {
    return num > 0;
}

console.log(isPositive(10));  
console.log(isPositive(-3));   
console.log(isPositive(0));    

