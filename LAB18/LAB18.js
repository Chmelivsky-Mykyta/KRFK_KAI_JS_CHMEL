// Варіант 16
// Початковий масив чисел
let numbers = [5, 12, 25, 30, 7, 18, 42, 3];

// Заданий діапазон
const min = 10;
const max = 30;

// Фільтрація: залишити лише ті, що **не входять** у діапазон
let filteredNumbers = numbers.filter(num => num < min || num > max);

console.log("Початковий масив:", numbers);
console.log(`Масив без чисел у діапазоні [${min}, ${max}]:`, filteredNumbers);
