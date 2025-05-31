// Варіант 16
// Початковий масив чисел
const numbers = [5, 8, 13, 22, 7, 10, 3, 6];

// Групування за парністю
const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Парні числа:", evenNumbers);  
console.log("Непарні числа:", oddNumbers);
