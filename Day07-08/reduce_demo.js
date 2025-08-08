let arr = [10, 20, 30, 40, 50];
// sum all the elements
let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
}, 0); // initial value is not mandatory here
console.log(sum);

// reverse a string using reduce()
let str = 'hello world';
let revStr = str.split('').reduce((prev, curr) => {
    return curr + prev;
}, ''); // initial value is not mandatory here
console.log(revStr);


// find the total cart value
const cart = [
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Phone", price: 800, quantity: 1 },
    { id: 3, name: "Tablet", price: 500, quantity: 2 },
    { id: 4, name: "Monitor", price: 300, quantity: 1 }
];
let totalCartValue = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
},0); // initial value must be passed
console.log('totalCartValue:: ', totalCartValue)