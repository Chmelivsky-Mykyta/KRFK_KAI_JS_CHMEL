let numbers1 = [3, 7, 2, 9, 12, 5]; 
let numbers2 = new Array(4, 8, 1, 6, 10); 
console.log("Початкові масиви:", numbers1, numbers2);

console.log("Відсортований numbers1:", numbers1.sort((a, b) => a - b));
console.log("Реверсований numbers1:", numbers1.reverse());

let combinedArray = numbers1.concat(numbers2);
console.log("Об'єднаний масив:", combinedArray);

console.log("Частина масиву slice(1, 4):", combinedArray.slice(1, 4));
combinedArray.splice(2, 2, 99, 88);
console.log("Масив після splice(2, 2, 99, 88):", combinedArray);

console.log("Індекс числа 9 у combinedArray:", combinedArray.indexOf(9));
console.log("Чи міститься число 12 у combinedArray:", combinedArray.includes(12));

// Варіант 16
// Дано масив чисел
let numbers = [5, 12, 8, 3, 9];
console.log("Початковий масив чисел:", numbers);
// Заповнення всього масиву нулями за допомогою fill()
numbers.fill(0);
console.log("Масив після заповнення нулями:", numbers);


