import { menuToggle } from './menu.js';
import * as cardHandler from "./cardHandler.js";
let cards = [];
let games = [
    {
        name: "Warframe",
        rYear: 2013,
        category: "Shooter",
        imagePath: "assets/warframe_noLogo.png"
    },
    {
        name: "Dota 2",
        rYear: 2013,
        category: "MOBA",
        imagePath: "assets/dota_noLogo.png"
    },
    {
        name: "Stellaris",
        rYear: 2016,
        category: "Grand Strategy",
        imagePath: "assets/stellaris_noLogo.png"
    },
    {
        name: "Terraria",
        rYear: 2011,
        category: "Survival Adventure",
        imagePath: "assets/terraria_noLogo.png"
    },
    {
        name: "Factorio",
        rYear: 2020,
        category: "Automation",
        imagePath: "assets/factorio_noLogo.png"
    },
    {
        name: "Path of Exile",
        rYear: 2013,
        category: "ARPG",
        imagePath: "assets/pathOfExile_noLogo.jpg"
    }
]
//End of var declaretion




//Burger Menu Control
let burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
    console.log('burger clicked');
    menuToggle();
});
//Load all the preset cards and load them into an array
cards = cardHandler.initCards(games);
console.log (cards)

cards.forEach(card => {
    let btn =  card.lastElementChild
    btn.addEventListener("click", function(e){
        let deadCard = e.target.parentElement
        let i = cards.indexOf(deadCard);
        cardHandler.removeCard(card);      
        cards.pop(i);
    })
});