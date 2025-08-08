// splice(index, deleteCount, ...items to insert)
// splice - only delete , only insert , both delete & insert
let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2); // only delete
console.log(arr); // [ 10 , 40, 50]

arr.splice(1, 0, 20, 30); // only insert
console.log(arr); // [10, 20, 30, 40, 50]

arr.splice(1, 2, 25, 35);
console.log(arr); // [10, 25, 35, 40, 50]


let cars = ['Tata', 'Honda', 'Maruti', 'Hundai']
let modifiedCars = cars.toSpliced(1, 2);
console.log(cars);
console.log(modifiedCars);