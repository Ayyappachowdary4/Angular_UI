let arr = [10, 20, 30, 40, 50]; // array of numbers
console.log(arr.indexOf(20));

let cars = ['Tata', 'Honda', 'Maruti', 'Hundai']; // array of strings

let employees = [ // array of objects
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

// print the first female employee
let first_female_emp=employees.find((emp) => emp.gender === 'female');
console.log('first female employee:: ',first_female_emp);

// print the first female employee
let first_female_emp_ind = employees.findIndex((emp) => emp.gender === 'female');
console.log('first female employee index:: ', first_female_emp_ind);

// print the last female employee
let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
console.log('last female employee:: ', last_female_emp);

// print the last female employee
let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender === 'female');
console.log('last female employee index:: ', last_female_emp_ind);

// print all the female employees
let all_female_emps = employees.filter((emp) => emp.gender === 'female');
console.log('all female employees:: ', all_female_emps)

