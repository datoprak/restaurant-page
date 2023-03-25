const createHome = () => {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero");
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  const heroHeader = document.createElement("div");
  heroHeader.classList.add("hero-header");
  heroHeader.textContent = "Welcome to the Restaurant";
  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");
  heroText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec pulvinar est. Donec finibus eleifend mi, nec aliquam justo pretium vel. Ut vel nibh mi. Sed mattis, turpis at molestie efficitur, risus metus tempus velit, quis feugiat dui ante sit amet ex. In varius ex at ipsum fermentum.";
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const heroImg = document.createElement("img");
  heroImg.classList.add("hero-img");
  heroImg.src = "./images/homepage.jpg";
  heroImg.alt = "A restaurant table";
  const imgSO = document.createElement("div");
  imgSO.classList.add("img-so");
  const p = document.createElement("p");
  p.textContent = "Photo by ";
  const imgA1 = document.createElement("a");
  const imgA2 = document.createElement("a");
  imgA1.href =
    "https://unsplash.com/@bundo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  imgA1.textContent = "Bundo Kim";
  imgA2.href =
    "https://unsplash.com/photos/Pb9bUzH1nD8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  imgA2.textContent = " on Unsplash";

  content.appendChild(hero);
  hero.appendChild(textContainer);
  textContainer.appendChild(heroHeader);
  textContainer.appendChild(heroText);
  hero.appendChild(imgContainer);
  imgContainer.appendChild(heroImg);
  imgContainer.appendChild(imgSO);
  imgSO.appendChild(p);
  imgSO.appendChild(imgA1);
  imgSO.appendChild(imgA2);
};

const loadHome = () => {
  const hero = document.querySelector(".hero");
  const menuContent = document.querySelector(".menu-content");
  const contactContent = document.querySelector(".contact-content");

  if (hero.classList.contains("hide")) {
    hero.classList.remove("hide");
  }
  menuContent.classList.add("hide");
  contactContent.classList.add("hide");
};

export { createHome, loadHome };
