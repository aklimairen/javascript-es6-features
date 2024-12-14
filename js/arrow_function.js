// An arrow function is a concise syntax for writing functions in JavaScript, introduced in ES6. It uses the => (arrow) syntax and is often used for shorter functions.

// Features of Arrow Functions
  // 1. Ideal for single-line or small functions.
  // 2.  Arrow functions do not have their own this. They inherit this from the enclosing scope.
  // 3. For single-line expressions, the return keyword can be omitted.

//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

// arrow function
const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );
