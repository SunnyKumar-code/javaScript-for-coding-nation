document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
  
   // Get input values
    let firstName = e.target.children[0].value;
    let lastName = e.target.children[1].value;
    let country = e.target.children[2].value;
    let score = e.target.children[3].value;
    let err = document.querySelector(".err");
    
    if(firstName.trim()==="" || lastName.trim() === "" || country.trim() === "" || score.trim() === ""){
        err.style.display = "block"
        return
    }
    //format current date
    let date = new Date();
    let formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    console.log(formattedDate);
     let playerCard = document.createElement("div");
     playerCard.classList.add("player-card");
     playerCard.innerHTML= `
          <div class="name">
            <p>${firstName} ${lastName}</p>
            <p>${formattedDate}</p>
        </div>
        <p>${country}</p>
        <p class="score">${score}</p>
        <div class="event-box">
            <button class="delete-btn">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>

            </button>
            <button class="increment">+5</button>
            <button class="decrement">-5</button>
        </div>
     `
     document.querySelector(".player-container").appendChild(playerCard);

      // Clear input fields
    e.target.children[0].value = "";
    e.target.children[1].value = "";
    e.target.children[2].value = "";
    e.target.children[3].value = "";

    playerCard.querySelector(".delete-btn").addEventListener("click",()=>{
        playerCard.remove()
        sortPlayer()
    })

    playerCard.querySelector(".increment").addEventListener("click",()=>{
          let scoreElement = playerCard.querySelector(".score");
          scoreElement.textContent = parseInt(scoreElement.textContent)+5;
          sortPlayer()
    })
      playerCard.querySelector(".decrement").addEventListener("click",()=>{
          let scoreElement = playerCard.querySelector(".score");
          if(scoreElement.textContent<=0){
            alert("Score cannot be less than 0")
          }else{

              scoreElement.textContent = parseInt(scoreElement.textContent)-5;
          }
          sortPlayer()
    })
sortPlayer()
})

function sortPlayer(){
    let playerCards = document.querySelectorAll(".player-card");
    let sortedCards = Array.from(playerCards).sort((a,b)=>{
        return parseInt(b.querySelector(".score").textContent) - parseInt(a.querySelector(".score").textContent)
    })
    document.querySelector(".player-container").innerHTML = "";
    sortedCards.forEach(card=> document.querySelector(".player-container").appendChild(card))
}