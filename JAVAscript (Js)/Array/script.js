// let student1 = 'Aman';
// let student2 = 'Riya';
// let student3 = 'Rahul';
// let students = [ 'Aman', 'Riya', 'Rahul' ];
// console.log('students');
// console.log(students);
// let info = [ 'Aman', 20, true, null, undefined, { city: 'Delhi' }, [ 1, 2, 3 ] ];
// console.log('info');
// console.log(info);
//empty array 

// let emptyArray = [];
// console.log('emptyArray');
// console.log(emptyArray);

//arrays are mutable

// let students = [ 'Aman', 'Riya', 'Rahul' ];
// students[0] = 'Aman Singh';
// console.log('students after mutation');
// console.log(students);

//Array methods
// let students = [ 'Aman', 'Riya', 'Rahul' ];
// students.push('Sita');
// console.log('students after push');
// console.log(students);

// let students = [ 'Aman', 'Riya', 'Rahul' , 'Sita' ];
// console.log(students);
// students.pop();
// console.log('students after pop');
// console.log(students);

// students.unshift('John', 'Doe');
// console.log('students after unshift');
// console.log(students);
// students.shift();
// console.log('students after shift');
// console.log(students);

// array methods : indexOf, includes

// let students = [ 'Aman', 'Riya', 'Rahul' ];
// console.log('students');
// console.log(students);
// console.log(students.indexOf('Riya'));

// console.log(students.includes('Riya'));

//concatinate(original array not get changes) and reverse (original arrray changes)
//  let students1 = [ 'Aman', 'Riya', 'Rahul' ];
//  let students2 = [ 'Sita', 'Gita' ];
//   let students = console.log(students1.concat(students2));
//   students1.reverse();
//   console.log('students after reverse');
//   console.log(students1);
  
// //slice and splice
//  students1.slice();
//  console.log('students1 after slice');
//  students1.slice(0,1);
//  console.log(students1.slice(0,1));
//  students1.slice(-1);
//     console.log(students1.slice(-1));

//splice it is similiar to all the add remove methods of arrays and it changed the ogirginal array   we have basically splice ( start, deleteCount, item1, item2, ...)

// let students = [ 'Aman', 'Riya', 'Rahul', 'Sita', 'Gita', 'Mohan' ];
// console.log('students before splice');
// console.log(students);
// console.log(students.splice(2));
// console.log(students.splice(0,1));
// students.push('John', 'Doe');
// console.log(students.splice(1,2));
// console.log(students.splice(0,0, 'Alice', 'Bob'));
// console.log(students.splice(1,0, 'Charlie', 'David'));
// console.log(students);

// array methods sort array (it will sort the array according to unicode value of the string) and fill (it will fill the array with the given value)

// let students = [ 'Aman', 'Riya', 'Rahul', 'Sita', 'Gita', 'Mohan' ];
// students.sort();
// console.log(students.sort());
// let numbers  = [23,53,23,12,43,65,34,12,43];
// console.log(numbers.sort());

//Array reference and copy
// let students = [ 'Aman', 'Riya', 'Rahul' ];
// let studentsCopy = students;
// console.log('students');
// console.log(students);
// console.log('studentsCopy');
// console.log(studentsCopy);

//constant arrray and  nested arrays 
// const students = [ 'Aman', 'Riya', 'Rahul' ];
// students[0] = 'Aman Singh'; // this is allowed
// console.log('students after mutation');
// console.log(students);

// const students = [ 'Aman', 'Riya', 'Rahul' ];
// students.push('Sita'); // this is allowed
// console.log('students after push');
// console.log(students);

// const students = [ 'Aman', 'Riya', 'Rahul' ];
// students = [ 'Sita', 'Gita' ]; // this will throw an error
// console.log('students after reassigning');
// console.log(students);

// nested arrays
// const students = [ 'Aman', 'Riya', [ 'Rahul', 'Sita' ] ];
// console.log('students');
// console.log(students);

// const students = [ 'Aman', 'Riya', [ 'Rahul', 'Sita' ] ];
// console.log('students[2]');
// console.log(students[2]);
// console.log('students[2][0]');
// console.log(students[2][0]);

