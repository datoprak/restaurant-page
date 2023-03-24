import contact from "./contact";
import home from "./home";
import menu from "./menu";

const navbar = () => {
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  const logoImg = document.createElement("div");
  logoImg.classList.add("logo-img");
  const logoText = document.createElement("div");
  logoText.classList.add("logo-text");
  logoText.textContent = "RESTAURANT";
  const links = document.createElement("div");
  links.classList.add("links");
  const homeLink = document.createElement("a");
  homeLink.classList.add("home-link");
  homeLink.textContent = "HOME";
  const menuLink = document.createElement("a");
  menuLink.classList.add("menu-link");
  menuLink.textContent = "MENU";
  const contactLink = document.createElement("a");
  contactLink.classList.add("contact-link");
  contactLink.textContent = "CONTACT";

  const content = document.querySelector("#content");
  content.appendChild(navBar);
  navBar.appendChild(logo);
  navBar.appendChild(links);
  logo.appendChild(logoImg);
  logo.appendChild(logoText);
  links.appendChild(homeLink);
  links.appendChild(menuLink);
  links.appendChild(contactLink);

  // const homeButton = document.querySelector(".home-link");
  // const menuButton = document.querySelector(".menu-link");
  // const contactButton = document.querySelector(".contact-link");

  // homeButton.addEventListener("click", home);
  // menuButton.addEventListener("click", menu);
  // contactButton.addEventListener("click", contact);
};

export default navbar;
