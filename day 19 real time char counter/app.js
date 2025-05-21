const input = document.querySelector("#input");
const count = document.querySelector("#count");
const rem = document.querySelector("#rem")

let counter = 0;
let remaining = 50;

count.innerHTML=counter;
rem.innerHTML=remaining;
let str = "";



    input.addEventListener("keyup",(e)=>{
    str+=e.key
    counter=str.length
    remaining--
    if(remaining>=0){
    count.innerHTML=counter;
    rem.innerHTML=remaining;
    }
    })



