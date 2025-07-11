// String method 
//  first method is str.trim() method : strings in js are immutable mean u cant change to strings.

// let str = '  hello   ';
// console.log(str);
// let newstr = str.trim();
// console.log(newstr);

//Sting method i. lowercase() and uppercase()

// let str = 'Hello World';
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// method with arguments indexof
// let str = 'Hello World';
// console.log(str.indexOf('World')); // returns the index of the first occurrence of 'World'
// console.log(str.indexOf('world')); // returns -1 since 'world' is not found (case-sensitive)
// console.log(str.indexOf('o')); // returns the index of the first occurrence of 'o'
// console.log(str.indexOf('o', 5)); // starts searching from index 5

//Method chaining :
// let str = '  Hello          World';
// let newStr = str.trim().toUpperCase();
// console.log(newStr);

//slice 

// let str = 'Hello World';
// console.log(str.slice(0,5));
// console.log(str.slice(7));
// console.log(str.slice(-5));

//Replace method

// let msg = 'WebDeveloper';
// console.log(msg.replace('Web','Android'));

//Repeat method

let str = 'Hello';
console.log(str.repeat(3));