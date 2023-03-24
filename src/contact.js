const createContact = () => {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.classList.add("contact");
  const address = document.createElement("div");
  address.textContent = "Some Address";
  address.classList.add("address");
  const tel = document.createElement("div");
  tel.classList.add("tel");
  tel.textContent = "123465790";
  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "email@email.com";
  content.appendChild(contact);
  contact.appendChild(address);
  contact.appendChild(tel);
  contact.appendChild(email);
};

const loadContact = () => {
  const hero = document.querySelector(".hero");
  const menuContent = document.querySelector(".menu-content");
  const contact = document.querySelector(".contact");

  if (!contact.classList.contains("active")) {
    contact.classList.add("active");
  }
  menuContent.classList.remove("active");
  hero.classList.remove("active");
};

export { createContact, loadContact };
