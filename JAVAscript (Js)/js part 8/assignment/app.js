//Q1 square and sum the arrray element using the arrow function  and then find the average of the array.

let arr1 = [1,2,3,4,5];

const square  = arr1.map((el) => {
    return el**2;
});
console.log(square);

const sum = square.reduce((acc,curr) => {
    return acc+curr;
});
console.log(sum);
let avg = sum/arr1.length;
console.log(avg);

//Qs2 create an array using the map function whose each element is equal to the original element plus 5.

let arr2 =[2,3,4,5,6];

const newArr = arr2.map((arr2) =>  {
    return arr2+5;
})
console.log(newArr);

//Q3 create an array whose element are in uppercase in words present in the original array

let arr3 = ['deepan bhai'];

let newArr1 = arr3.map((el)  => {
    return el.toUpperCase();
});
console.log(newArr1);

//Q4.  write a function called doubleAndReturnArgs which accpets an array and a variable number of arguments. the function should return a new array with the original array values and all the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args)=> 
    [ ...arr, ...args.map((v) => v*2),];

doubleAndReturnArgs([1,2],4,6);


//Q5 wrtie a function called mergeObjects that acceptst two objects  and return a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1,obj2) =>
    ({...obj1 , ...obj2});

console.log(mergeObjects({a:1,b:2},{c:3,d:4}));