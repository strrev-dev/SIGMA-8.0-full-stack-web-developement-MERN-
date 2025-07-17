function printname() {
    console.log('my name is dev');
    
}
function print1to5(){
        for(let i =1; i<=5;i++){
            console.log(i);
        }
    }

printname();
print1to5();

//function arguments

function printNameAge(name,age){
    console.log(`${name} age is ${age}`);
}
printNameAge('deepan',23);
printNameAge('deepan');

//return in function

function sum(a,b) {
    let sum = a + b;
    // console.log(sum);
    return a+b;
}

console.log(sum(2,0));


// Scope mainly three types 1. function 2. block 3.lexical Scope
//global scope cam be accessible anywhere in  the file  where as function scope is only accessible in function only it is specific to it only.
//block scope is only accessible in only that block which contains the variable in  curly brackets {} of that block. it is workable on only let and const variables nor on variable which is old one 

let age = 34;
 if(age=34){
    let str = 'younger';
    console.log(str);
 }
//  console.log(str);

 //lexical scope basically the variable define in nested outer function can be accessible in inner function as well;

 function outerFunc(){
    let x = 4;
    let y = 5;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
 }
 outerFunc();

 //function expression

 let hello = function(){
    console.log('namaste');
 }
 console.log(hello());

 //higher order function   this is  basically taking other function as an arguments in it  to use it as mulltiple calling

 function mulltipleGreet(func,count){
    for(let i =1; i<=count;i++){
        func(i);
    }
 }
let greet = function(){
    console.log('hello boys');
}
mulltipleGreet(greet,10);

//higher order function (returns)



function oddOrEvenTest(request){
    if ( request == 'odd'){
        return function(n){

            console.log(!(n%2==0));
        }
        
    }
    else if ( request == 'even'){
        return function(n){

            console.log((n%2==0));
        }
    }
    
    else {
        console.log('Wrong request');
    }
}
let request = 'odd';

//methods :  object ke andr function

// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};

