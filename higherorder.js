// Problem Statement:
// You are given an array of objects representing products. Each product has a name and a price. Write a function processProducts that uses map() to create a new array of product names, and then uses forEach() to log each product name along with a message indicating whether the price is above or below $50.

// Steps:

// Use map() to extract the product names.
// Use forEach() to iterate over the products and log messages based on the price of each product.
// Example:

// Input: [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

// Output (Logged):

// Laptop is above $50

// Mouse is below $50

let products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

//extract names 
// let productsName = products.map((el) => el.name);
let productsName = products.map(({name}) => name);
products.forEach(({name , price}) => price < 50 ? console.log("below 50") : console.log("above or equals to 50"));
console.log(productsName);