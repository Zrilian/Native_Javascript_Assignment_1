// Game Cards
export function createCard(item){
    const card = document.createElement("div");
    card.id = `${item.name}-card`
    card.classList.add("card")
    card.innerHTML += `
        <h1 class="title">${item.name}</h1>
        <img src="${item.imagePath}" alt="${item.name}">
        <p class="category">${item.category}</p>
        <p class="rYear">${item.rYear}</p>
        <button class="cardBtn">Do Somethin! </button>
    `;
    // card.style.backgroundImage = (`url("${item.imagePath}") `)
    
    return card;
}

//Take a list of cards. display them, put them into an array and return the array
export function initCards (games){
    let cardList = []
    const container = document.querySelector(".card-container")
    games.forEach((game) => {
        let card = createCard(game);
        container.appendChild(card);
        cardList.push(card);
    })
    return cardList;
}

export function removeCard(card){
    console.log (`Removing ${card.firstElementChild.textContent}`) 
    card.remove();
}