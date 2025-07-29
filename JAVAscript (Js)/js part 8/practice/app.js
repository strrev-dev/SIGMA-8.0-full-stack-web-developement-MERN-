//check in an array  all the elements are multiple of 10 or not

let arr = [10,20,30,30];
let num = arr.every((el) => {
    el%10 == 0;
});
if(num == 0){
    console.log('this array is multiple of 10 ');
}
else{
    console.log('not a multiple of 10');
}

//Q2 to ge the minimum of the array

let number = [2,3,4,5,10];

let min = number.reduce((min, el) => {
    if (el> min){
        return min;
    }
    else{
        return el;
    }
});

console.log(min);