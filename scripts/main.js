import { menuToggle } from './menu.js';
import * as cardHandler from "./cardHandler.js";
let cards = [];
let filterOptions= [];
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
    },
    {
        name: "Last Epoch",
        rYear: 2024,
        category: "ARPG",
        imagePath: "assets/lastEpoch.jpg"
    }
]
let filteredGames = games
const selector =document.querySelector(".filter-selector")
const burger = document.querySelector('.burger');
const links = document.querySelectorAll(".menu a")
//End of var declaretion



//Burger Menu Control

burger.addEventListener('click', function() {
    console.log('burger clicked');
    menuToggle();
});
//Close the nav menu when a link is pressed
links.forEach((link) => {
    link.addEventListener("click", menuToggle);
})

//Load all the preset cards and load them into an array
function updateCards(){
    cards = cardHandler.renderCards(filteredGames, (gameToDelete) => {
        //Callback function to allow us to delete the correpsonding game from the games[] array
        const index = games.indexOf(gameToDelete);
        if (index !== -1) games.splice(index, 1);
})
}

//Verifes that an image exists
function checkImage(imageSrc) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => {
                console.log(`Failed to find image at: ${imageSrc}`);
                resolve(false);
            };
            img.src = imageSrc;
    });
}

function populateFilterOption() { 
    //Checks each games category and adds it to the filterOptions array if it's not a duplicate entry
    games.forEach((game) => {
        if(!filterOptions.find((option) => option == game.category)){
            console.log(game)
            filterOptions.push(game.category)
        }
    })
    //Sort the array and then adds an "all" option to the frontas a default
    filterOptions.sort()
    filterOptions.unshift("All")
    //Clears the dropdown menu and then populates it with the array
    selector.innerHTML= ""
    filterOptions.forEach((fOption) => {
        selector.innerHTML += `<option value="${fOption}">${fOption}</option>`
    })
}

//Handles the submission form
const submissionForm = document.querySelector('.submissionForm');
submissionForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(submissionForm);
    const game = Object.fromEntries(formData.entries());
    game.rYear = Number(game.rYear);
    //Ask if the submitted image url can be found, otherwise replace it with a placeholder
    if (!(await checkImage(game.imagePath))){
        game.imagePath = "https://placehold.co/180x270"
    }
    games.push(game);
    updateCards();
    submissionForm.reset();
});

selector.addEventListener("change", () =>{
    const activeFilter = selector.value;
    console.log (activeFilter);
    if (activeFilter != "All"){
        filteredGames = games.filter((game) => game.category == activeFilter)
    }
    else {
        filteredGames = games;
    }
    console.log(filteredGames)
    updateCards();
});


//Set things to their initial state
updateCards();
populateFilterOption();