import navbar from "./navbar";

const home = () => {
  navbar();
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");
  const heroHeader = document.createElement("div");
  heroHeader.classList.add("hero-header");
  heroHeader.textContent = "Welcome to the Restaurant";
  const heroSubtext = document.createElement("div");
  heroSubtext.classList.add("hero-subtext");
  heroSubtext.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec pulvinar est. Donec finibus eleifend mi, nec aliquam justo pretium vel. Ut vel nibh mi. Sed mattis, turpis at molestie efficitur, risus metus tempus velit, quis feugiat dui ante sit amet ex. In varius ex at ipsum fermentum,";
  const heroImg = document.createElement("img");
  heroImg.classList.add("hero-img");

  const content = document.querySelector("#content");
  content.appendChild(hero);
  hero.appendChild(heroText);
  hero.appendChild(heroImg);
  heroText.appendChild(heroHeader);
  heroText.appendChild(heroSubtext);
};

export default home;
