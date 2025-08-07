const box = document.querySelector(".box");
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
let color = input.value.toLocaleLowerCase();
box.style.backgroundColor=color;

})