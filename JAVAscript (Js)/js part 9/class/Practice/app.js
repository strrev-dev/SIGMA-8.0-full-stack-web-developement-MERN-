//add the elements to the container using only javascript  and the DOM methods.

//i)  a <p> with red text that says "hey I'm red!";

let newPara = document.createElement("p");
newPara.innerText = " Hi Iam red! ";
// newPara.style.color = "red";
document.querySelector("body").prepend(newPara);
newPara.classList.add("red");

//ii)  an <h3? with blue text which  says  "I'm blue!";
let h3 = document.createElement("h3");
h3.innerText = " Hi Iam blue! ";
// h3.style.color = "blue";
document.querySelector("body").prepend(h3);
h3.classList.add("blue");


// iii)  create a div with the black border and pink  background color with the followig element inside it . a) another h1 which says I'm in div"
//b) a <p> says " ME TOO"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p1 = document.createElement("p1");
document.querySelector("body").append(div);
document.querySelector("body").append(h1);
document.querySelector("body").append(p1);
div.classList.add("div");
h1.innerText = " I'm in div ";
p1.innerText = "ME TOO!";
document.querySelector("div").prepend(h1);
document.querySelector("div").append(p1);