import sos from "./shoutOut";

const createContact = () => {
  const content = document.querySelector("#content");

  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const address = document.createElement("div");
  address.textContent = "Address: 7th arrondissement, Paris, France";
  address.classList.add("address");
  const tel = document.createElement("div");
  tel.classList.add("tel");
  tel.textContent = "Tel: 123465790";
  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "Email: email@email.com";
  const contactSO = document.createElement("div");
  contactSO.classList.add("contact-so");
  sos.forEach(so => contactSO.appendChild(so.getP()));

  content.appendChild(contactContent);
  contactContent.appendChild(contact);
  contact.appendChild(address);
  contact.appendChild(tel);
  contact.appendChild(email);
  contactContent.appendChild(contactSO);
};

const loadContact = () => {
  const hero = document.querySelector(".hero");
  const menuContent = document.querySelector(".menu-content");
  const contactContent = document.querySelector(".contact-content");

  if (contactContent.classList.contains("hide")) {
    contactContent.classList.remove("hide");
  }
  menuContent.classList.add("hide");
  hero.classList.add("hide");
};

export { createContact, loadContact };
