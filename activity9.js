// concat()
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);

// includes()
let text  = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);

// push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// unshift()
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);

// pop()
fruits.pop();
console.log(fruits);

// shift
const array2  = [1, 2, 3];
const firstElement = array2.shift();
console.log(array2);
console.log(firstElement);
