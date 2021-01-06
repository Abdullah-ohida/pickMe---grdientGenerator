const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");
const backgroudColor = document.querySelector(".color");
const randomColor = document.querySelector("button");




function bgName(first_color, second_color){
    backgroudColor.textContent = `linear-gradient(to right, ${first_color} , ${second_color})`;
}
function bgColor(first_color, second_color){
    body.style.background = `linear-gradient(to right, ${first_color} , ${second_color})`;
}

function generateRandomColor(){
    let letter = "0123456789ABCDEF";
    let color = "#";
   for(let count = 0; count < 6; count++){
      color += letter[Math.floor(Math.random() * 16)]
   }
   return color;
}

function displayBgColor(first_color, second_color){
    bgColor(first_color,  second_color);
    bgName(first_color,  second_color);
}

window.addEventListener("DOMContentLoaded", ()=>{
   displayBgColor(color1.value, color2.value)
});
color1.addEventListener('input', ()=>{
    displayBgColor(color1.value, color2.value)
})

color2.addEventListener('input', ()=>{
    displayBgColor(color1.value, color2.value)
})

randomColor.addEventListener('click', ()=>{
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    displayBgColor(color1.value, color2.value)
})

