let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  
// 1. declare array of employees & sort them in ascending order (empId)
employees.sort((a, b) => a.eId - b.eId);
console.log(employees);

// 2. declare array of employees & sort them in ascending order by name.
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);


// 3. declare array of employees & filter the employees whose sal>6000;
let highsalemp = employees.filter(emp => emp.sal >6000);
console.log(highsalemp);

// 4. declare array of employees & increase sal of every employee by 500;
for (let i = 0; i < employees.length; i++) {
    employees[i].sal += 500;
}
console.log(employees);


// 5. declare array of employees & add "comp:ibm" to every employee;
for(let k=0; k<employees.length; k++){
	employees[k].comp='ibm';
}
console.log(employees);


// 6. convert array of letters to array of words
// 		const inputArr = [ 
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];
const inputArr = [ 
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];
let output = [];
let word = '';
for (let char of inputArr) {
    if (char === '') {
        output.push(word);
        word = '';
    } else {
        word += char; 
    }
}
if (word) output.push(word);
console.log(output);


	   
// 7. add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]

let empl = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "reena", sal: 8000, gender: "female" }
];

let departments = [
  { eId: 101, dept: "sales" },
  { eId: 104, dept: "marketing" }
];
for (let i = 0; i < empl.length; i++) {
  for (let j = 0; j < departments.length; j++) {
    if (empl[i].eId === departments[j].eId) {
      empl[i].dept = departments[j].dept;
    }
  }
}
console.log(empl);


// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

let groupedEmployees = Object.groupBy(employees, emp => emp.gender);
console.log(groupedEmployees);


// 9. intersection of 2 number arrays

const arr1 =[1,2,3,4,5];
const arr2=[3,4,5,6,7];
const intersection = arr1.filter(num => arr2.includes(num));
console.log(intersection);

// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

const input = [10, 20, 30, 40, 50, 10, 30, 50];

const ct = {};

for (let num of input) {
  if (ct[num]) {
    ct[num]++;
  } else {
    ct[num] = 1;
  }
}
console.log(ct);