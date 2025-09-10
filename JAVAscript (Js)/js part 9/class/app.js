// let smallImages = document.getElementsByClassName('oldImg');

// for( let i = 0 ; i < smallImages.length; i ++){
//     smallImages[i].src = "assets/spiderman_img.png";

//     console.log(`the  value of image  no.  ${i} is changed`);
// }

// console.dir(document.querySelector("p"));
// console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll(".box a");

// for (link of links){
//     link.style.color = "yellow";
// }

for( let i =0; i<links.length;i++){
    links[i].style.color = "red";
}



