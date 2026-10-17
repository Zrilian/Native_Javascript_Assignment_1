export function renderCards(cards, onDelete){
    let cardList = []
    const container = document.querySelector(".card-container")
    //Make sure the card-container is empty, then loop through cards
    container.innerHTML = ""
    cards.forEach(item => {
        const card = document.createElement("div");
        //Base html
        card.id = `${item.name}-card`
        card.classList.add("card")
        card.innerHTML += `
            <h2 class="title">${item.name}</h1>
            <img src="${item.imagePath}" alt="${item.name}">
            <p class="category">${item.category}</p>
            <p class="rYear">${item.rYear}</p>
        `;
        //adjust title fontsize if names is too long to fit on the card
        
        if (item.name.length > 10) {
            card.querySelector(".title").classList.add("title--long");
        }
        //Make the delete button
        const delBtn = document.createElement("button")
        card.appendChild(delBtn)
        delBtn.textContent= "X"
        delBtn.classList.add("card-del-btn") 
        delBtn.addEventListener("click" ,(e) =>{
            removeCard(card);
            //Callback function so that we can delete the corresponding object form the games array
            onDelete?.(item);
        })
        //Background Changing Button
        const bgBtn = document.createElement("button")
        card.appendChild(bgBtn)
        bgBtn.textContent = "Change Background"
        bgBtn.classList.add("card-bg-btn")
        bgBtn.addEventListener("click",() => {
            container.style.backgroundImage = (`url("${item.imagePath}") `)
        })
        //Append the card and add it to the array of cards
        container.appendChild(card);
        cardList.push(card)
    });
    console.log(cardList)
    return cardList;
}


export function removeCard(card){
    const cardName = card.firstElementChild.textContent
    console.log(`Removing ${cardName}`)
    console.log(card)
    card.remove();
}