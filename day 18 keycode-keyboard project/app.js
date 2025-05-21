const body = document.querySelector("body");
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const key = document.querySelector(".key");

body.addEventListener("keydown",(e)=>{

let name = e.code;
let keyCode = e.keyCode;
const combination =[];
if(e.ctrlKey) combination.push('Ctrl');
if (e.shiftKey) combination.push('Shift');
if (e.altKey) combination.push('Alt');

combination.push(name)
console.log(combination);


p.innerText=keyCode;
p.style.display="block";

h1.innerHTML = `You Have Pressed <span class="key">${combination.join("+")}</span>`;
})