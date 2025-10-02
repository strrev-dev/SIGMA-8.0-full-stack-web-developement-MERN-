// Qs1. Create a new input and button element on the page using JavaScript only. Set the
//  text of button to “Click me”;

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText  = " Click me !"
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//  Qs2. Add following attributes to the element :- Change placeholder value of input to “username”- Change the id of button to “btn”

button.setAttribute("id", "btn");
input.setAttribute("placeholder","username")

// Qs3. Access the btn using the querySelector and button id. Change the button
//  background color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle")

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
//  Change its color to purple.

let h1 = document.createElement("h1")

h1.innerText ="DOM Practice";
document.querySelector("body").prepend(h1)
h1.classList.add("h1")

// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
//  where Delta is bold.

let p = document.createElement("p");
document.querySelector("body").prepend(p);
p.innerHTML = "Apna college <b> Delta </b> Practice";
