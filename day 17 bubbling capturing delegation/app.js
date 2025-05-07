const body = document.querySelector("body")
const div = document.querySelector("div")
const span = document.querySelector("span")
const button = document.querySelector("button")


// body.addEventListener('click',(e)=>{
 
//   if(e.target.tagName==="BUTTON"){
//     console.log("this is button by Delegation");
//     alert("Button")
//   }
//   if(e.target.tagName==="SPAN"){
//     console.log("this is SPAN by Delegation");
//     alert("SPAN")
//   }
//   if(e.target.tagName==="DIV"){
//     console.log("this is Div by Delegation");
//     alert("Div")
//   }
//   if(e.target.tagName==="BODY"){
//     console.log("this is BODY by Delegation");
//     alert("BODY")
//   }
// })

//Event capturing

// body.addEventListener('click',()=>{
//   console.log("this is body");
  
// },capture=true)
// div.addEventListener('click',()=>{
//   console.log("this is div");
  
// },capture=true)
// span.addEventListener('click',()=>{
//   console.log("this is span");
  
// },capture=true)
// button.addEventListener('click',()=>{
//   console.log("this is button");
  
// },capture=true)

//stop propagation


body.addEventListener('click',(e)=>{
 // e.stopPropagation();
  console.log("this is body");
  
})
div.addEventListener('click',(e)=>{
 // e.stopPropagation();
  console.log("this is div");
  
})
span.addEventListener('click',(e)=>{
  e.stopPropagation();
  console.log("this is span");
  
})
button.addEventListener('click',(e)=>{
  e.stopPropagation();
  console.log("this is button");
  
})
