import foodCard from "./foodCard";

const createMenu = () => {
  const content = document.querySelector("#content");
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  content.appendChild(menuContent);
  const hamburger = "./images/hamburger.jpg";
  const pizza = "./images/pizza.jpg";
  const sushi = "./images/sushi.jpg";
  const brownie = "./images/brownie.jpg";
  const cookie = "./images/cookie.jpg";
  const cupcake = "./images/cupcake.jpg";

  menuContent.appendChild(foodCard("Hamburger", "$10", hamburger));
  menuContent.appendChild(foodCard("Pizza", "$15", pizza));
  menuContent.appendChild(foodCard("Sushi", "$20", sushi));
  menuContent.appendChild(foodCard("Brownie", "$5", brownie));
  menuContent.appendChild(foodCard("Cookie", "$5", cookie));
  menuContent.appendChild(foodCard("Cupcake", "$5", cupcake));
};

const loadMenu = () => {
  const hero = document.querySelector(".hero");
  const menuContent = document.querySelector(".menu-content");
  const contactContent = document.querySelector(".contact-content");

  if (menuContent.classList.contains("hide")) {
    menuContent.classList.remove("hide");
  }
  hero.classList.add("hide");
  contactContent.classList.add("hide");
};

export { createMenu, loadMenu };
