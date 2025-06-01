// Варіант 16
// Клас для демонстрації роботи this
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Привіт, я " + this.name);
  }

  delayedHello() {
    // Втрата контексту this — потрібно використовувати стрілкову функцію
    setTimeout(function () {
      console.log("setTimeout (звичайна функція): Привіт, я " + this.name); // this → window або undefined
    }, 1000);

    // Коректно: стрілкова функція зберігає контекст this з класу
    setTimeout(() => {
      console.log("setTimeout (стрілкова функція): Привіт, я " + this.name); // this → Person
    }, 2000);
  }
}

const person = new Person("Микита");

person.sayHello();     
person.delayedHello(); 