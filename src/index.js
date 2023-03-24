import { createContact, loadContact } from "./contact";
import { createHome, loadHome } from "./home";
import { createMenu, loadMenu } from "./menu";
import navbar from "./navbar";

navbar();
createHome();
createMenu();
createContact();
loadHome();

const homeButton = document.querySelector(".home-link");
const menuButton = document.querySelector(".menu-link");
const contactButton = document.querySelector(".contact-link");

homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
contactButton.addEventListener("click", loadContact);
