// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("Div was clicked");
// });
// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for (li of lis) {
//     li.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ul=document.querySelector("ul")

btn.addEventListener("click", function(){
    let item = document.createElement("li");

    item.innerText = inp.value;
    ul.appendChild(item);
 let dltbtn = document.createElement("button")
 dltbtn.innerText = "❌"
 dltbtn.classList.add("delete")
 item.appendChild(dltbtn);


    inp.value = ""
ul.addEventListener("click",function(event){
 if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("successfully deleted", item.innerText);
    
    
 }
  
})
})