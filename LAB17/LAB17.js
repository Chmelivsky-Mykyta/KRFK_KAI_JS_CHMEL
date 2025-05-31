// Варіант 16
// Функція для генерації випадкового числа в заданому діапазоні
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Початковий масив (довжина зберігається, значення змінюються)
let numbers = [0, 0, 0, 0, 0];

// Діапазон
const min = 10;
const max = 50;

// Заміна всіх значень на випадкові числа
let randomizedArray = numbers.map(() => getRandomNumber(min, max));

console.log("Масив з випадковими значеннями:", randomizedArray);
