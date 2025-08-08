let arr1 = [10, 50, 20, 40, 30];
let res1 = arr1.sort()
console.log(res1);

let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];
let sortedCars = cars.sort()
console.log(sortedCars);

let numArr = [10, 7, 8, 91, 95, 93, 101, 102, 6, 92, 105];
let res2 = numArr.sort(); // string sort
console.log(res2);

// numeric sort
let res3 = numArr.sort((a, b) => a - b); // ascending
// let res4 = numArr.sort((a, b) => b - a); // desc

console.log(res3)
// console.log(res4)