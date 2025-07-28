// // //Array Methods : forEach,map , filter,some,every,reduce.

// // let arr = [1, 2, 3, 4, 5];
// // function print(el) {
// //     console.log(el);
// // }
// // arr.forEach(print);

// // //OR
// // arr.forEach(function (el) {
// //     console.log(el);
// // });

// // //map
// // let num = [1, 2, 3, 4, 5];
// // let double = num.map(function (el) {
// //     return el * 2;
// // });

// // //filter 
// // let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// // let even = nums.filter((el) => {
// //     return el % 2 == 0;
// // });

// // //every functon  work as and operator

// // [2,4,6].every((el) => el%2 ==0 );

// // //some function work as or operator
// //  [2,4,6,1].every((el) => el%2 ==0 );


// //  //maximum  in array using reduce method 

// let arr = [2,4,8,2,3,1,32,0,4,6];

// let result = arr.reduce((max,el) => {
//     if(el>max){
//         return el;
//     }
//     else {
//         return max;
//     }
// });
// console.log(result);


// //default parameters

// function sum(a,b=2){
//     return a+b;
// }
// console.log(sum(1));

//spread  array literal and object literals spread //convert arr type or str to iterateable manner 

// let arr = [343,2,6,62,64,4,4,4,2,6,26,2];
// console.log(Math.min(...arr));

//Rest  it is oppostite of spread

function sum(...args){
    //arguments
    for (let i = 0; i<args.length;i++){
        console.log('You Gave us : ',args[i]);
    }
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(2);  //this throw error becaus arguments.push is not the function it is not the array to make it an arrray we use rest
}

function max(...args){
    return args.reduce((max,el) => {
        if(max > el){
            return max;
        }
        else {
            return el;
        }
    });
}

// if wee want to take two arguments before the rest then it will be took as str or whatever u want to log


//Destructuring 

let  names = ['prabal' , 'pranjal'  ,'deepan' , 'khushi' ,  'admin'];

let [winner,firstRunnerUp,secondRunnerUp , ...others] = names;

//destructuring for objects

const student = {
    name : 'deepan',
    age : 23,
    marks :  95,
    subjects: ['hindi', 'english' , 'math'],
    username : 'deep@12',
    password: 'abcs',

};

let  { username : user,  password: secret}= student;