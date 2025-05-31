function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4));


const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

const user = { name: 'Mykyta', age: 25, city: 'Kryvyi Rig', country: 'Ukraine' };
const { name, ...details } = user;
console.log(details);

// Варіант 16
// Функція, яка повертає тільки парні числа з переданого списку
function getEvenNumbers(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Приклади використання:
console.log(getEvenNumbers(1, 2, 3, 4, 5, 6));
console.log(getEvenNumbers(7, 9, 13));         
console.log(getEvenNumbers(0, -2, 8, 11));    