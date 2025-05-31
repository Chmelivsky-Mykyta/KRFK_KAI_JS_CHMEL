const add = (a, b) => a + b;
console.log(add(15, 5)); 

const square = num => num ** 2;
console.log(square(5)); 

const greet = () => "Привіт, світ!";
console.log(greet()); 

const processArray = (arr, callback) => arr.map(callback);
const doubled = processArray([1, 2, 3, 4], num => num * 2);
console.log(doubled);


// Варіант 16
// Стрілкова функція для перевірки наявності хоча б одного від'ємного числа
const hasNegative = arr => arr.some(num => num < 0);

// Приклади використання:
console.log(hasNegative([3, 5, -1, 8])); // true
console.log(hasNegative([0, 4, 7, 9]));  // false
console.log(hasNegative([]));           // false
