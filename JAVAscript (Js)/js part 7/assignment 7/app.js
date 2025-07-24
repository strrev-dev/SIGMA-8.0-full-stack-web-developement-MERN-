//Q1: 

let arr = [1,2,34,4];

arrayAverage = (arr) => {
  let sum = 0;
  for( let i =0; i< arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
}

//Qs2:

isEven = (n) => {
    if(n%2 == 0){
        console.log(`${n} is  an even number.`);
    }else {
        console.log(`${n} not an even number.`);
    }
}

// let n = prompt('Enter the number you want to check if it is odd or not.');


//Q3 : 
// const object = {
//     message: 'hello world!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,2000);


//Q4:
let length = 4;
function callback(){
    console.log(this.length);
}
const object = {
    length : 5,
    method(callback){
        callback();
    },

};
object.method(callback,1,2);