const note = document.querySelector("#textarea")
const addButton = document.querySelector("#add-note")
const clearAll = document.querySelector("#clear-notes")
const bgcolor = document.querySelector("#rng")
let noteBox = document.querySelector("#notes-container");
let para = document.querySelector("#pre");


addButton.addEventListener("click", () => {
     let noteText = note.value;
    if (noteText.trim() === "") {
        alert("Please enter a note");
        return;
    }
    console.dir(bgcolor.value);
    let div = document.createElement("div");
    div.classList.add("note"); 
    let p = document.createElement("p");
    p.classList.add("page");
    let cross_button = document.createElement("button");
    cross_button.classList.add("cross");
    div.appendChild(p);
    div.appendChild(cross_button);
    p.innerText = noteText;
    cross_button.innerText = "X";
    div.style.backgroundColor = bgcolor.value; 
    noteBox.appendChild(div);
    note.value="";
    cross_button.addEventListener("click", function() {
        div.remove();
        if(noteBox.children.length===0){
            para.style.display="block";
        }
    });
    para.style.display="none";
    if(bgcolor.value==="#ffffff"){
        div.style.color="#000";
    }

})
clearAll.addEventListener("click",()=>{
    noteBox.innerHTML="";
     para.style.display="block";
})