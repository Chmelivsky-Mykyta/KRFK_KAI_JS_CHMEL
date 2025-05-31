//1
let user = {
    name: "Микита",
    age: 18,
    country: "Україна"
  };
  console.log(user);

user.age = 19;
console.log(user.age); 

user.city = "Кривий Рiг";
console.log(user);

delete user.country;
console.log(user);

console.log("age" in user); 
console.log("country" in user); 

for (let key in user) {
    console.log(key + ": " + user[key]);
  }

// Варіант 16
// Створення об'єкта "користувач"
let user = {
  firstName: "Микита",
  lastName: "Чмеливський",
  email: "nikita.chmelivsky@krfk.kai.edu.uа"
};

// Перевірка наявності властивості "прізвище" (lastName)
if ("lastName" in user) {
  console.log("Властивість 'прізвище' існує в об'єкті користувач.");
} else {
  console.log("Властивість 'прізвище' відсутня.");
}
