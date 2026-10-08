import { menuToggle } from './menu.js';

//Don't add transition property until after page has loaded to skip weird animation but still preserve page funciton if script doesn't laod for some reason
// document.querySelector(".nav").classList.add("transition")


const burger = document.querySelector(".burger")
burger.addEventListener("click", () =>{
    console.log("a")
    menuToggle();
});
