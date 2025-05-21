const icons = document.querySelectorAll(".iconBox");
const btn = document.querySelector("#btn")
const f1 = document.querySelector(".f1")
const f2 = document.querySelector(".f2")
const feedback = document.querySelector("#feedback")
let selectFeedback="";

icons.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icons.forEach((icon)=>icon.classList.remove("active"))
        icon.classList.add("active")
      selectFeedback = icon.textContent.trim();

        
    })
})

btn.addEventListener("click",()=>{
    if(selectFeedback){
        f1.style.display="none"
        f2.style.display="flex"
        feedback.textContent = `Feedback: ${selectFeedback}`;
    }else{
        alert("Please select a feedback option before submitting.")
    }
})