let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    drive() {
      console.log("Їду на " + this.brand + " " + this.model);
    }
  };
  car.drive(); 


  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.sayHello = function() {
    console.log("Привіт, я " + this.name);
  };
  let dog = new Animal("Собака");
  dog.sayHello(); 

  

  function Dog(name) {
    Animal.call(this, name);
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  let dog1 = new Dog("Шерлок");
  dog1.sayHello();
  
  

  Dog.prototype.sayHello = function() {
    console.log("Гав! Я " + this.name);
  };
  dog1.sayHello();

  

  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  
  let arr = [1, 2, 3];
  console.log(arr.last());

  

// Варіант 16
// Об'єкт "Банк"
let Bank = {
  balance: 0,

  // Метод покласти гроші на рахунок
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Покладено ${amount} грн. Поточний баланс: ${this.balance} грн.`);
    } else {
      console.log("Сума має бути більшою за 0.");
    }
  },

  // Метод зняти гроші з рахунку
  withdraw(amount) {
    if (amount <= this.balance && amount > 0) {
      this.balance -= amount;
      console.log(`Знято ${amount} грн. Поточний баланс: ${this.balance} грн.`);
    } else {
      console.log("Недостатньо коштів або некоректна сума.");
    }
  },

  // Метод отримати поточний баланс
  getBalance() {
    console.log(`Поточний баланс: ${this.balance} грн.`);
    return this.balance;
  }
};

// Приклади використання:
Bank.deposit(1000);
Bank.withdraw(300);
Bank.getBalance();
