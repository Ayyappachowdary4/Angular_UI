const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 75000, stock: 10, rating: 4.5 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 40000, stock: 0, rating: 4.2 },
  { id: 3, name: "Book", category: "Education", price: 500, stock: 100, rating: 4.9 },
  { id: 4, name: "Desk Chair", category: "Furniture", price: 3500, stock: 25, rating: 4.0 }
];

//find most exp prd
let ME = products[0];

for (let i = 1; i < products.length; i++) {
  if (products[i].price > ME.price) {
    ME = products[i]; 
  }
}
console.log("Most expensive product:", ME);



