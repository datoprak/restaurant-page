import foodCard from "./foodCard";

const createMenu = () => {
  const content = document.querySelector("#content");
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  content.appendChild(menuContent);

  menuContent.appendChild(foodCard("hamburger", 10));
  menuContent.appendChild(foodCard("pizza", 15));
  menuContent.appendChild(foodCard("sushi", 20));
};

const loadMenu = () => {
  const hero = document.querySelector(".hero");
  const menuContent = document.querySelector(".menu-content");
  const contact = document.querySelector(".contact");

  if (!menuContent.classList.contains("active")) {
    menuContent.classList.add("active");
  }
  hero.classList.remove("active");
  contact.classList.remove("active");
};

export { createMenu, loadMenu };
