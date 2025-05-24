

const search = document.querySelector("#search")
const emojiContainer = document.querySelector("#emoji-container")

window.addEventListener("load",()=>{
    displayEmoji("");
})
 function displayEmoji(search){
    let filterEmoji = emojiList.filter((emoji)=>{
        const lowerSearch = search.toLowerCase();
        if(lowerSearch === ""){
            return true
        }
        return emoji.description.toLowerCase().includes(lowerSearch) ||
        emoji.tags.some(tag => tag.toLowerCase().includes(lowerSearch))
    })
    emojiContainer.innerHTML = "";
    filterEmoji.forEach((emoji)=>{
        let emojiBox = document.createElement("div");
        emojiBox.classList.add("emojiBox")
        emojiBox.innerHTML = `
        <span>${emoji.emoji}</span>
          <span>${emoji.description}</span>
          <span>${emoji.category}</span>
        `
        emojiBox.addEventListener("click",()=>{
            navigator.clipboard.writeText(emoji.emoji).then(()=>{
                let copy = document.createElement("p")
                   copy.classList.add("copy-success");
                copy.textContent = "Copied!";
                emojiBox.appendChild(copy);

                 setTimeout(() => {
                    copy.remove();
                }, 500);
            }).catch((error)=>{
                console.log("Failed to copy emoji: ", error)
            })
        })

        emojiContainer.appendChild(emojiBox) 
    })
 }

 search.addEventListener("keyup",()=>{
    let searchValue = search.value
    displayEmoji(searchValue)
 })