let cars = ['BMW','tata','toyata','audi'];

//1.loop
for(let i=0; i< cars.length; i++){
    console.log(cars[i]);
}
console.log('==========');

//2.for-in(es-6 2015)
for (i in cars){
    console.log(cars[i]);

}
console.log('============');


//3 for-of 
for(car of cars){
    console.log(car);
}
console.log('===========');

//forEach()
cars.forEach((val, ind) => {
    console.log(val,ind);
})