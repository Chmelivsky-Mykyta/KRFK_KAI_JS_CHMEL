function applyOperation(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
console.log(applyOperation(5, 3, add)); 
console.log(applyOperation(5, 3, multiply)); 


function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}
const sayHello = createGreeting("Привіт");
console.log(sayHello("Микита"));

// Варіант 16
// Лічильник на основі замикання
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getValue: function () {
            return count;
        }
    };
}

// Приклад використання:
const counter = createCounter();

counter.increment();
counter.increment();

console.log("Поточне значення лічильника:", counter.getValue()); 
