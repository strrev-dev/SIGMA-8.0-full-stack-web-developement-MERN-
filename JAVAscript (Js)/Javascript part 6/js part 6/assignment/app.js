let arr = [1,2,3,4,5,6,7,8];
let n= 4
function largerNumber(arr,n){
 for( let i =0; i<arr.length; i++){
  if( arr[i]>n){
    console.log(arr[i]);
  }
 }
}
largerNumber(arr,n);

//unnique alphabets fromm th e strings

// let str = 'abcdabcdghgc';
//  function getUniqueElement(str){
//   let ans  = '';
//  for ( let i = 0; i<str.length;i++){
//   let currentChar  = str[i];
//   if(ans.indexOf(currentChar) == -1){
//     ans += currentChar;
//   }
//  }
//  return ans;

//  }
//  console.log(getUniqueElement(str));
 //largest country name

 let countries = ['India','austrailia','united states of americaa'];

 function longestCountryName(countries){
  let longest = '';

  for( let i=0; i<countries.length;i++){
    if(countries[i].length>longest[i]);
longest = countries[i];
  }
  return longest;
 }
 console.log(longestCountryName(countries));

 //write a function to coount the vowels in the strings

 let str = 'Deepan';

 function vowels(str){
  let vowel = 'aeiou';

  let vowelInString = '';
  for( let i= 0; i<str.length; i++){
    if(vowel.includes(str[i])){
      

      vowelInString += str[i];
    }
  }
  return vowelInString;
 }

 console.log(vowels(str));



 //
 let start = 10;
 let end = 20;

 function getRandomNumber(start, end){
   let diff  = end - start;

   return Math.floor(Math.random()*diff)+11;
 }
 console.log(getRandomNumber(start,end));


