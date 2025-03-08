// Write an arrow function that takes a number as input and returns both its square and cube in an object, using implicit return. The function should be as concise as possible.

// Requirements:
// The arrow function should use implicit return (no curly braces or return keyword).
// The function should return an object in the format { square, cube }.
// Example Input:

// 5

// Example Output:

// { square: 25, cube: 125 }

// const arrayFunction = () => console.log("Hi")

// a number will be passed through parameter, we need an object in return
// object = {} ;

let result = (num) => ({square : num ** 2 , cube : num ** 3}) ;
let answer = result(5) ;
console.log(answer);