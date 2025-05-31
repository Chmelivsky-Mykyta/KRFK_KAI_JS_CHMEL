let arrayLiteral = ["яблуко", "банан", "вишня"];
let arrayConstructor = new Array("авто", "велосипед", "мотоцикл");
console.log("Початкові масиви:", arrayLiteral, arrayConstructor);
// Додавання елементів до масиву
arrayLiteral.push("груша");
arrayConstructor.unshift("самокат");
console.log("Після додавання елементів:", arrayLiteral, arrayConstructor);


// Видалення елементів із масиву
let removedFromLiteral = arrayLiteral.pop();
let removedFromConstructor = arrayConstructor.shift();
console.log("Після видалення елементів:", arrayLiteral, arrayConstructor);
console.log("Видалені елементи:", removedFromLiteral, removedFromConstructor);


// Варіант 16
// Створення масиву слів
let words = ["комп'ютер", "ручка", "зошит", "університет", "кава", "телефон", "стіл"];

console.log("Початковий масив слів:", words);

// Фільтрація слів, які мають більше 5 літер
let longWords = words.filter(word => word.length > 5);

console.log("Слова з більш ніж 5 літерами:", longWords);
