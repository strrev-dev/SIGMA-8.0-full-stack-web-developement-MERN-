//wriite an arrow function to print the square of the number

const square = n => 
 n * n;


//print the  hello world  5 times in the interval of 2 science


let id = setInterval(() => {
    console.log('hello world');
}, 2000);
setTimeout(() => {
  clearInterval(id);
}, 10000);