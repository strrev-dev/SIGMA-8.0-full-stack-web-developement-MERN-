// practice question 3: sum and average using function

function sum(a, b) {
    let sum = a + b;
    console.log(sum);
}
function calAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

sum(2, 3);
calAvg(43, 2, 5);

//practice question 1: printing the poem

function printPoem() {
    console.log('              💖 “In Your Eyes” 💖');
    console.log(`             In your eyes, I see the stars,
        A world that's mine, no matter how far.
          No words are needed, no lines to say,
           Your silence speaks in a softer way.
 
                In your arms, I find my peace,
          A gentle place where troubles cease.
             With every touch, a story flows,
           Of endless dreams and quiet glows.

            You are the calm within my storm,
            The steady light, the fire warm.
            No poem could ever quite define,
            The love I feel — forever mine.`)
}
printPoem();

//pratice questio 2:  function of roll dice generating the 1 to 6 dice number

function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

rollDice();

//print the table of any number using function

function table(num) {
    console.log(`Table of ${num} is:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
table(5);

function summation(n) {
    let summation1 = 0;
    for (let i = 1; i <= n; i++) {
        summation1 += i;
    }
    console.log(summation1);
    // return summation1;
}
// console.log(summation(4)); (for return we use console on calling function)
summation(6);


//create a function to  concatenate the strings strore in the array.

let str = ['hello',' my age is 23', ' my name is deepan'];

function concat(str){
  let result = ' ' ;

  for( let i = 0; i<str.length;i++){
    result +=str[i];
  }
  return result;
}
console.log(concat(str));
