let head = document.querySelector("#heading")
let btn =document.querySelector(".btn")



let decrement = document.querySelector("#decrement")

let increment = document.querySelector("#increment")
let count = document.querySelector("#count")

let a = 0;
count.innerHTML=a;

console.log(decrement);
console.log(increment);
console.log(count);

increment.addEventListener("click",()=>{
   a++;
   count.innerHTML=a;   
})


decrement.addEventListener("click",()=>{
    if(a>0){
        a--;
        count.innerHTML=a;   
    }
   
 })

 let list = document.querySelectorAll(".list")

 console.log(list);
 
 btn.addEventListener('click',()=>{
    head.innerHTML="Mission Success"
    list[2].innerHTML="Change"
    })