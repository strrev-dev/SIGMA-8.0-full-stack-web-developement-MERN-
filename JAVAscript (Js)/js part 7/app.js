// this key  word : refers to an object that is executing  the current peice of code

// const student = {
//     name: 'deepan',
//     age : 23 ,
//     eng : 98,
//      math: 97,
//      science:98,

//      getAvg(){
//         let avg = (this.eng+this.math+this.science)/3;
//         console.log(avg);
//      }
// }

// //try and catch: try through the error if the line of code have  and just after that we use catch so that if try throwing error then the  ocde under  ccatch will run .

// console.log('hello');
// console.log('hello1');
// console.log('hello2');
// try{
//     console.log(a);
// }
// catch{
//     console.log('there is an error with line of code ');
// }
// console.log('hello2');
// console.log('hello2');
// console.log('hello2');

// //Arrow function : shorter way to wrte the function

// const sum =(a,b) => {
//     console.log(a+b);
// }
// //iimplicit arrow function
// const mul = (a,b) => a*b;

//set time out

// console.log('hello');

// setTimeout(() => {
//     console.log('deepan')
// }, 5000);
// console.log('welcome ');
// console.log('hello');

// let id1= setInterval(() => {
//     console.log('deepan')
// }, 2000);
// console.log(id2);
// //to stop the interval we can use the ID like
// console.log('hello');

// let id= setInterval(() => {
//     console.log('deepan')
// }, 2000);
// console.log(id);

//this arrow function

const student = {
name: 'deepan',
marks:95,
prop: this,  //global scope
getName: function (){
    console.log(this);
    return this.marks;
},
getMarks : () => {
    console.log(this); //parent's scope -> window
return this.marks;
},
getInfo1:function(){
    setTimeout(() => {
        console.log(this); //student
       
    }, 2000);
},
getInfo2 :  function (){
    setTimeout(function(){
console.log(this);  //window
    },2000);
}
};