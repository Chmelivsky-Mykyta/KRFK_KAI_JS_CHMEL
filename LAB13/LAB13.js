let arr1_1 = [1, 2, 3];
let arr1_2 = [...arr1_1];
console.log(arr1_2); 

let arr2_1 = [1, 2, 3];
let arr2_2 = [4, 5, 6];
let combined = [...arr2_1, ...arr2_2];
console.log(combined); 

let obj1 = { name: "Дарина", age: 17 };
let obj2 = { ...obj1 };
console.log(obj2); 

// Варіант 16
// Функція для знаходження мінімального числа в масиві з використанням spread
function findMinNumber(numbers) {
  return Math.min(...numbers);
}

// Приклади використання:
console.log(findMinNumber([5, 12, -3, 9, 0])); 
console.log(findMinNumber([100, 25, 60]));    
