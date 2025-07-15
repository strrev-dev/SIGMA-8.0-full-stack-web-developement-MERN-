//For loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
//  for( let  i =1; i <=10; i++){
//     console.log(i);
//  }
//  for( let  i =10; i >=1; i--){
//     console.log(i);
//  }

//print odd numbers from 1 to 15

// for( let i = 1; i<=15; i+=2){
//     console.log(i);
// }
//print even numbers from 2 to 10
// for( let i = 2; i<=10; i+=2){
//     console.log(i);
// }

// let num = parseInt(prompt("Enter a number to print its multiplication table: "));
// for ( let i = 1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i} `);
// }

//while loop

// let i = 1;
// while (i <=10){
//     console.log(i);
//     i++;
// }

//guessing the movie using while loop


// let favMovie= prompt("Guess my favorite movie: ");
// while((favMovie !=='rana naidu')&& (favMovie != 'quit')){
//     favMovie = prompt("Wrong guess! Try again: ");

// }
// if (favMovie === 'rana naidu') {
// console.log("You guessed it right! My favorite movie is " + favMovie);
// } else {
// console.log("You quit the game.");
// }
//break usage mainly  with the while loop

// let favMovie= prompt("Guess my favorite movie: ");
// while((favMovie !=='rana naidu')&& (favMovie != 'quit')){
// if (favMovie === 'quit') {
//     console.log("You quit the game.");
//     break;
// }
//     favMovie = prompt("Wrong guess! Try again: ");

// }
// if (favMovie === 'rana naidu') {
    
// console.log("You guessed it right! My favorite movie is " + favMovie);
// }
//loops  with arrays

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// console.log(fruits);



// for ( let  i= 0; i < fruits.length ;i++ ){
//     console.log(i,fruits[i]);
    
// }
// for ( let  i  = fruits.length -1; i>=0 ; i-- ){
//     console.log(i,fruits[i]);

// }

// Nested loops
// let students = [['aman',90],['deepan',99],['prabal',99]];

// for( let i = 0; i<students.length; i++){
//     console.log(`This is student number ${i}`);
//     for(let j = 0; j <students[i].length; j++){
//         console.log(`This is individual list of students.`);
//         console.log (`j = ${j} ,${students[i][j]}`);
//     }
// }

//for of loop

// let students = [['aman',90],['deepan',99],['prabal',99]];
// for(student of students){
//     console.log(student);
// }


// for(string of 'strings'){
//     console.log(string);
// }

//nested for of loop

// let students = [['aman',90],['deepan',99],['prabal',99]];
// for(student  of students){
//     for(value of student){
//         console.log(value);
//     }
// }

