const products = [
    { id:1, name:"Laptop", price:1200 },
    { id:2, name:"phone",price:500 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Monitor", price: 300 }
];

let resultArr = products.map((product) => {
    product.price = product.price+(product.price * 0.1);
    return product;
});
console.log(resultArr)