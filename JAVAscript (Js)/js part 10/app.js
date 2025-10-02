// // let btn = document.querySelector("button");
// // console.dir(btn);
// let btns = document.querySelectorAll("button");
// for (const btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;
//     // btn.onmouseenter = function(){
//     //     console.log("you touch the button by curseor")
//         //  }

//          btn.addEventListener("click", sayHello)
//          btn.addEventListener("click", sayName)
// }

// // btn.onclick = function(){
// //     console.log("Button is clicked.");
// // };
// function sayHello(){
//     alert("hello!");
// }
// function sayName(){
//     console.log("say ,my name again");

// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", function (){
// let h3 = document.querySelector("h3")
// let div = document.querySelector("div")
// let randomColor =getRandomaNumbers();
// h3.innerText = randomColor
// div.style.backgroundColor= randomColor

// console.log("color updatedlet randomColor =");

// });

//  function getRandomaNumbers(){
//  let red = Math.floor(Math.random() *255)
//  let green = Math.floor(Math.random() *255)
//  let blue = Math.floor(Math.random() *255)
//  let color = `rgb(${red} , ${green},${blue})`
//  return color;
// };
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1")
// let h3 = document.querySelector("h3")
// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// }
//  btn.addEventListener("click",changeColor);
//  h1.addEventListener("click",changeColor);
//  h3.addEventListener("click",changeColor);
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("code : ", event.code);
//     if (event.code == "KeyU") {
//         console.log("The character moves upward");
//     }
//     else if (event.code == "KeyD") {
//         console.log("The character moves Downward");
//     }
//     else if (event.code == "KeyL") {
//         console.log("The character moves Left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("The character moves Right");
//     }

// });

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//   event.preventDefault();
//   console.log("Hey i have been submitted");
//   console.dir(form)
//   let user  = this.elements[0];
//   let pass = this.elements[1];
  
//   console.log(user.value);
//   console.log(pass.value);
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//   event.preventDefault();
// });
// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//   console.log("input changed");
//   console.log("final value: ", this.value);
  
  
// })
// user.addEventListener("input", function(){
//   console.log("input changed");
//   console.log("final value: ", this.value);
  
  
// })

let inp = document.querySelector("#text");
let p = document.querySelector("p")

inp.addEventListener("input", function(){
  p.innerText = inp.value ;
})

