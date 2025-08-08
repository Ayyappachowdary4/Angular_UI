// 1)Print the occurence of each character in a string
// input: 'entertainment'
// output: { e:3 , n:2 , t: 3 ....}

let ip = 'entertainment';
let count = {};

for(let char of ip){
    if(count[char]){
        count[char]++;
    }else{
        count[char] = 1;
    }
}
console.log(count);




// 2)Print the character which is repeated max no of times
// input: 'hello world'
// output : 'L'

function maxChar(t) {
  t = t.toLowerCase().replace(/\s/g, '');
  let maxChar = '', mc = 0;
  for (let ch of new Set(t)) {
    let count = t.split(ch).length - 1;   
    if (count > mc) {
      mc = count;
      maxChar = ch;
    }
  }
  console.log(maxChar.toUpperCase());
}
maxChar('hello world'); 



// 3)Swap The case for Each Character in a string 
// input: 'Hello World'
// output: 'hELLO wORLD'

let dt = 'Hello World';
let  s = '';

for (let char of dt) {
  if (char === char.toUpperCase()) {
    s =s+ char.toLowerCase();
  } else {
    s =s+ char.toUpperCase();
  }
}
console.log(s);  


// 4)Print the Abbreviation for a string
// input: 'Rabindra Nath Tagore'
// output: 'R. N. tagore'

let strip = 'Rabindra Nath Tagore';
let dtn = strip.split(' ');
let lt = dtn.pop().toLowerCase();
let ar = '';

for (let w of dtn) {
  ar =ar + w[0].toUpperCase() + '. ';
}
ar =ar + lt;
console.log(ar);

// 5)Shift the characters by the next character
// input:  'abcxyz'
// output: 'bcdyza'

let abt = 'abcxyz';
let d = '';

for (let char of abt) {
  if (char === 'z') {
    d += 'a';
  } else {
    d += String.fromCharCode(char.charCodeAt(0) + 1);
  }
}
console.log(d);

// 6)Ask user to enter a sequence of parantheses and validate 
// input: '([{ }])'
// output : true



// 7)Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//  input: 'ABC'
//  output: ABC , ACB , BCA, BAC ...

let str = prompt("Enter a 3-letter word:");
let chars = str.split('');

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === i) continue;
    for (let k = 0; k < 3; k++) {
      if (k === i || k === j) continue;
      console.log(chars[i] + chars[j] + chars[k]);
    }
  }
}

// 8)Ask user to enter a number and convert that to Roman value
// input:   9    12
// output : IX   XII



// 9)Ask user to enter a roman string and convert that to integer value
// input:   IX    XII
// output : 9     12