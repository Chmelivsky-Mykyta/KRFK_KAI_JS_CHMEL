
function привітай(імя) {
    return `Привіт, ${імя}!`;
  }
  console.log(привітай("Аліса")); 
  
  
  const привітай2 = function(імя) {
    return `Привіт, ${імя}!`;
  };
  console.log(привітай2("Микита")); 
  
  
  const привітай3 = (імя) => `Привіт, ${імя}!`;
  console.log(привітай3("Олеся")); 
  

  (function() {
    console.log("IIFE виконано!");
  })();
  
  
  function привітай4(імя = "Гість") {
    return `Привіт, ${імя}!`;
  }
  console.log(привітай4()); 
  
 
  function факторіал(n) {
    if (n === 0) return 1;
    return n * факторіал(n - 1);
  }
  console.log(факторіал(5)); 


// Варіант 16
// Функція, яка приймає об'єкт і повертає його ключі у вигляді масиву
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// Приклади використання:
const user = {
  name: "Микита",
  age: 18,
  email: "nikita.chmelivsky@krfk.kai.edu.ua"
};

const keys = getObjectKeys(user);
console.log(keys); 
