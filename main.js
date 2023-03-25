/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact),
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _shoutOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shoutOut */ "./src/shoutOut.js");


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
  _shoutOut__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(so => contactSO.appendChild(so.getP()));

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




/***/ }),

/***/ "./src/foodCard.js":
/*!*************************!*\
  !*** ./src/foodCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const foodCard = (name, price, image) => {
  const card = document.createElement("div");
  card.classList.add("food-card");
  const foodImage = document.createElement("img");
  foodImage.src = image;
  foodImage.alt = name;
  const foodInfo = document.createElement("div");
  foodInfo.classList.add("food-text");
  const foodName = document.createElement("div");
  foodName.classList.add("food-name");
  foodName.textContent = name;
  const foodPrice = document.createElement("div");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = price;

  card.appendChild(foodImage);
  card.appendChild(foodInfo);
  foodInfo.appendChild(foodName);
  foodInfo.appendChild(foodPrice);

  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodCard);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome),
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
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




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _foodCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodCard */ "./src/foodCard.js");


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

  menuContent.appendChild((0,_foodCard__WEBPACK_IMPORTED_MODULE_0__["default"])("Hamburger", "$10", hamburger));
  menuContent.appendChild((0,_foodCard__WEBPACK_IMPORTED_MODULE_0__["default"])("Pizza", "$15", pizza));
  menuContent.appendChild((0,_foodCard__WEBPACK_IMPORTED_MODULE_0__["default"])("Sushi", "$20", sushi));
  menuContent.appendChild((0,_foodCard__WEBPACK_IMPORTED_MODULE_0__["default"])("Brownie", "$5", brownie));
  menuContent.appendChild((0,_foodCard__WEBPACK_IMPORTED_MODULE_0__["default"])("Cookie", "$5", cookie));
  menuContent.appendChild((0,_foodCard__WEBPACK_IMPORTED_MODULE_0__["default"])("Cupcake", "$5", cupcake));
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




/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navbar = () => {
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  const logoImg = document.createElement("span");
  logoImg.classList.add("logo-img");
  logoImg.classList.add("material-symbols-outlined");
  logoImg.textContent = " restaurant ";
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);


/***/ }),

/***/ "./src/shoutOut.js":
/*!*************************!*\
  !*** ./src/shoutOut.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sos = [];

class Sos {
  constructor(photo, link1, link2, name) {
    this.photo = photo;
    this.link1 = link1;
    this.link2 = link2;
    this.name = name;
  }

  getP() {
    const pWrapper = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = `${this.photo} photo by `;
    const imgA1 = document.createElement("a");
    const imgA2 = document.createElement("a");
    imgA1.href = this.link1;
    imgA1.textContent = this.name;
    imgA2.href = this.link2;
    imgA2.textContent = " on Unsplash";
    pWrapper.style.display = "flex";
    pWrapper.appendChild(p);
    pWrapper.appendChild(imgA1);
    pWrapper.appendChild(imgA2);
    return pWrapper;
  }
}

const photo1 = new Sos(
  "Hamburger",
  "https://unsplash.com/fr/@omaha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "https://unsplash.com/photos/PxJ9zkM2wdA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "Mike"
);

const photo2 = new Sos(
  "Pizza",
  "https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "https://unsplash.com/images/food/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "Ivan Torres"
);

const photo3 = new Sos(
  "Sushi",
  "https://unsplash.com/pt-br/@viniciusbenedit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "https://unsplash.com/photos/-1GEAA8q3wk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "Vinicius Benedit"
);

const photo4 = new Sos(
  "Cookie",
  "https://unsplash.com/@foodess?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "https://unsplash.com/photos/OfdDiqx8Cz8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "Food Photographer | Jennifer Pallian"
);

const photo5 = new Sos(
  "Brownie",
  "https://unsplash.com/@pushpak88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "https://unsplash.com/photos/2UeBOL7UD34?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "Pushpak Dsilva"
);

const photo6 = new Sos(
  "Cupcake",
  "https://unsplash.com/@miksbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "https://unsplash.com/photos/VnM6_liIRJ0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  "Michaela Baum"
);

sos.push(photo1, photo2, photo3, photo4, photo5, photo6);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sos);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");





(0,_navbar__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)();
(0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();
(0,_contact__WEBPACK_IMPORTED_MODULE_0__.createContact)();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();

const homeButton = document.querySelector(".home-link");
const menuButton = document.querySelector(".menu-link");
const contactButton = document.querySelector(".contact-link");

homeButton.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_1__.loadHome);
menuButton.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu);
contactButton.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_0__.loadContact);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDVDtBQUNBO0FBQ2hCO0FBQzlCO0FBQ0EsbURBQU07QUFDTixpREFBVTtBQUNWLGlEQUFVO0FBQ1YsdURBQWE7QUFDYiwrQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMkNBQVE7QUFDN0MscUNBQXFDLDJDQUFRO0FBQzdDLHdDQUF3QyxpREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb29kQ2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaG91dE91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvcyBmcm9tIFwiLi9zaG91dE91dFwiO1xyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGVudFwiKTtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IDd0aCBhcnJvbmRpc3NlbWVudCwgUGFyaXMsIEZyYW5jZVwiO1xyXG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XHJcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZWwuY2xhc3NMaXN0LmFkZChcInRlbFwiKTtcclxuICB0ZWwudGV4dENvbnRlbnQgPSBcIlRlbDogMTIzNDY1NzkwXCI7XHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFwiKTtcclxuICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGVtYWlsQGVtYWlsLmNvbVwiO1xyXG4gIGNvbnN0IGNvbnRhY3RTTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdFNPLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXNvXCIpO1xyXG4gIHNvcy5mb3JFYWNoKHNvID0+IGNvbnRhY3RTTy5hcHBlbmRDaGlsZChzby5nZXRQKCkpKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudCk7XHJcbiAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuICBjb250YWN0LmFwcGVuZENoaWxkKHRlbCk7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbCk7XHJcbiAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNPKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XHJcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGVudFwiKTtcclxuICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250ZW50XCIpO1xyXG5cclxuICBpZiAoY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgfVxyXG4gIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWN0LCBsb2FkQ29udGFjdCB9O1xyXG4iLCJjb25zdCBmb29kQ2FyZCA9IChuYW1lLCBwcmljZSwgaW1hZ2UpID0+IHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJmb29kLWNhcmRcIik7XHJcbiAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBmb29kSW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgZm9vZEltYWdlLmFsdCA9IG5hbWU7XHJcbiAgY29uc3QgZm9vZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb2RJbmZvLmNsYXNzTGlzdC5hZGQoXCJmb29kLXRleHRcIik7XHJcbiAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb2ROYW1lLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XHJcbiAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJmb29kLXByaWNlXCIpO1xyXG4gIGZvb2RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuICBjYXJkLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChmb29kSW5mbyk7XHJcbiAgZm9vZEluZm8uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xyXG4gIGZvb2RJbmZvLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vZENhcmQ7XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBoZXJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZXJvSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWhlYWRlclwiKTtcclxuICBoZXJvSGVhZGVyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoZSBSZXN0YXVyYW50XCI7XHJcbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHRcIik7XHJcbiAgaGVyb1RleHQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYSBuZWMgcHVsdmluYXIgZXN0LiBEb25lYyBmaW5pYnVzIGVsZWlmZW5kIG1pLCBuZWMgYWxpcXVhbSBqdXN0byBwcmV0aXVtIHZlbC4gVXQgdmVsIG5pYmggbWkuIFNlZCBtYXR0aXMsIHR1cnBpcyBhdCBtb2xlc3RpZSBlZmZpY2l0dXIsIHJpc3VzIG1ldHVzIHRlbXB1cyB2ZWxpdCwgcXVpcyBmZXVnaWF0IGR1aSBhbnRlIHNpdCBhbWV0IGV4LiBJbiB2YXJpdXMgZXggYXQgaXBzdW0gZmVybWVudHVtLlwiO1xyXG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWctY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGhlcm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChcImhlcm8taW1nXCIpO1xyXG4gIGhlcm9JbWcuc3JjID0gXCIuL2ltYWdlcy9ob21lcGFnZS5qcGdcIjtcclxuICBoZXJvSW1nLmFsdCA9IFwiQSByZXN0YXVyYW50IHRhYmxlXCI7XHJcbiAgY29uc3QgaW1nU08gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGltZ1NPLmNsYXNzTGlzdC5hZGQoXCJpbWctc29cIik7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHAudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IFwiO1xyXG4gIGNvbnN0IGltZ0ExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgY29uc3QgaW1nQTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBpbWdBMS5ocmVmID1cclxuICAgIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGJ1bmRvP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiO1xyXG4gIGltZ0ExLnRleHRDb250ZW50ID0gXCJCdW5kbyBLaW1cIjtcclxuICBpbWdBMi5ocmVmID1cclxuICAgIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1BiOWJVekgxbkQ4P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiO1xyXG4gIGltZ0EyLnRleHRDb250ZW50ID0gXCIgb24gVW5zcGxhc2hcIjtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xyXG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XHJcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xyXG4gIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1nKTtcclxuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nU08pO1xyXG4gIGltZ1NPLmFwcGVuZENoaWxkKHApO1xyXG4gIGltZ1NPLmFwcGVuZENoaWxkKGltZ0ExKTtcclxuICBpbWdTTy5hcHBlbmRDaGlsZChpbWdBMik7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xyXG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRlbnRcIik7XHJcbiAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGVudFwiKTtcclxuXHJcbiAgaWYgKGhlcm8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgaGVyby5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICB9XHJcbiAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVIb21lLCBsb2FkSG9tZSB9O1xyXG4iLCJpbXBvcnQgZm9vZENhcmQgZnJvbSBcIi4vZm9vZENhcmRcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcclxuICBjb25zdCBoYW1idXJnZXIgPSBcIi4vaW1hZ2VzL2hhbWJ1cmdlci5qcGdcIjtcclxuICBjb25zdCBwaXp6YSA9IFwiLi9pbWFnZXMvcGl6emEuanBnXCI7XHJcbiAgY29uc3Qgc3VzaGkgPSBcIi4vaW1hZ2VzL3N1c2hpLmpwZ1wiO1xyXG4gIGNvbnN0IGJyb3duaWUgPSBcIi4vaW1hZ2VzL2Jyb3duaWUuanBnXCI7XHJcbiAgY29uc3QgY29va2llID0gXCIuL2ltYWdlcy9jb29raWUuanBnXCI7XHJcbiAgY29uc3QgY3VwY2FrZSA9IFwiLi9pbWFnZXMvY3VwY2FrZS5qcGdcIjtcclxuXHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENhcmQoXCJIYW1idXJnZXJcIiwgXCIkMTBcIiwgaGFtYnVyZ2VyKSk7XHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENhcmQoXCJQaXp6YVwiLCBcIiQxNVwiLCBwaXp6YSkpO1xyXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDYXJkKFwiU3VzaGlcIiwgXCIkMjBcIiwgc3VzaGkpKTtcclxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ2FyZChcIkJyb3duaWVcIiwgXCIkNVwiLCBicm93bmllKSk7XHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENhcmQoXCJDb29raWVcIiwgXCIkNVwiLCBjb29raWUpKTtcclxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ2FyZChcIkN1cGNha2VcIiwgXCIkNVwiLCBjdXBjYWtlKSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xyXG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRlbnRcIik7XHJcbiAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGVudFwiKTtcclxuXHJcbiAgaWYgKG1lbnVDb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gIH1cclxuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlTWVudSwgbG9hZE1lbnUgfTtcclxuIiwiY29uc3QgbmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGxvZ29JbWcuY2xhc3NMaXN0LmFkZChcImxvZ28taW1nXCIpO1xyXG4gIGxvZ29JbWcuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XHJcbiAgbG9nb0ltZy50ZXh0Q29udGVudCA9IFwiIHJlc3RhdXJhbnQgXCI7XHJcbiAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ29UZXh0LmNsYXNzTGlzdC5hZGQoXCJsb2dvLXRleHRcIik7XHJcbiAgbG9nb1RleHQudGV4dENvbnRlbnQgPSBcIlJFU1RBVVJBTlRcIjtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGlua3MuY2xhc3NMaXN0LmFkZChcImxpbmtzXCIpO1xyXG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZChcImhvbWUtbGlua1wiKTtcclxuICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xyXG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbWVudUxpbmsuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlua1wiKTtcclxuICBtZW51TGluay50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xyXG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcclxuICBuYXZCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGxpbmtzKTtcclxuICBsb2dvLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xyXG4gIGxpbmtzLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcclxuICBsaW5rcy5hcHBlbmRDaGlsZChtZW51TGluayk7XHJcbiAgbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyO1xyXG4iLCJjb25zdCBzb3MgPSBbXTtcclxuXHJcbmNsYXNzIFNvcyB7XHJcbiAgY29uc3RydWN0b3IocGhvdG8sIGxpbmsxLCBsaW5rMiwgbmFtZSkge1xyXG4gICAgdGhpcy5waG90byA9IHBob3RvO1xyXG4gICAgdGhpcy5saW5rMSA9IGxpbmsxO1xyXG4gICAgdGhpcy5saW5rMiA9IGxpbmsyO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldFAoKSB7XHJcbiAgICBjb25zdCBwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gYCR7dGhpcy5waG90b30gcGhvdG8gYnkgYDtcclxuICAgIGNvbnN0IGltZ0ExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjb25zdCBpbWdBMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgaW1nQTEuaHJlZiA9IHRoaXMubGluazE7XHJcbiAgICBpbWdBMS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcclxuICAgIGltZ0EyLmhyZWYgPSB0aGlzLmxpbmsyO1xyXG4gICAgaW1nQTIudGV4dENvbnRlbnQgPSBcIiBvbiBVbnNwbGFzaFwiO1xyXG4gICAgcFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgcFdyYXBwZXIuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBwV3JhcHBlci5hcHBlbmRDaGlsZChpbWdBMSk7XHJcbiAgICBwV3JhcHBlci5hcHBlbmRDaGlsZChpbWdBMik7XHJcbiAgICByZXR1cm4gcFdyYXBwZXI7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwaG90bzEgPSBuZXcgU29zKFxyXG4gIFwiSGFtYnVyZ2VyXCIsXHJcbiAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9mci9Ab21haGE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXHJcbiAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvUHhKOXprTTJ3ZEE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXHJcbiAgXCJNaWtlXCJcclxuKTtcclxuXHJcbmNvbnN0IHBob3RvMiA9IG5ldyBTb3MoXHJcbiAgXCJQaXp6YVwiLFxyXG4gIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGlhdm50P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxyXG4gIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vaW1hZ2VzL2Zvb2QvcGl6emE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXHJcbiAgXCJJdmFuIFRvcnJlc1wiXHJcbik7XHJcblxyXG5jb25zdCBwaG90bzMgPSBuZXcgU29zKFxyXG4gIFwiU3VzaGlcIixcclxuICBcImh0dHBzOi8vdW5zcGxhc2guY29tL3B0LWJyL0B2aW5pY2l1c2JlbmVkaXQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXHJcbiAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvLTFHRUFBOHEzd2s/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXHJcbiAgXCJWaW5pY2l1cyBCZW5lZGl0XCJcclxuKTtcclxuXHJcbmNvbnN0IHBob3RvNCA9IG5ldyBTb3MoXHJcbiAgXCJDb29raWVcIixcclxuICBcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bmb29kZXNzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxyXG4gIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL09mZERpcXg4Q3o4P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxyXG4gIFwiRm9vZCBQaG90b2dyYXBoZXIgfCBKZW5uaWZlciBQYWxsaWFuXCJcclxuKTtcclxuXHJcbmNvbnN0IHBob3RvNSA9IG5ldyBTb3MoXHJcbiAgXCJCcm93bmllXCIsXHJcbiAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcHVzaHBhazg4P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxyXG4gIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzJVZUJPTDdVRDM0P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxyXG4gIFwiUHVzaHBhayBEc2lsdmFcIlxyXG4pO1xyXG5cclxuY29uc3QgcGhvdG82ID0gbmV3IFNvcyhcclxuICBcIkN1cGNha2VcIixcclxuICBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BtaWtzYmF1bT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcclxuICBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9Wbk02X2xpSVJKMD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcclxuICBcIk1pY2hhZWxhIEJhdW1cIlxyXG4pO1xyXG5cclxuc29zLnB1c2gocGhvdG8xLCBwaG90bzIsIHBob3RvMywgcGhvdG80LCBwaG90bzUsIHBob3RvNik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udGFjdCwgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUhvbWUsIGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51LCBsb2FkTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuXHJcbm5hdmJhcigpO1xyXG5jcmVhdGVIb21lKCk7XHJcbmNyZWF0ZU1lbnUoKTtcclxuY3JlYXRlQ29udGFjdCgpO1xyXG5sb2FkSG9tZSgpO1xyXG5cclxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1saW5rXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpbmtcIik7XHJcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtbGlua1wiKTtcclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lKTtcclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE1lbnUpO1xyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQ29udGFjdCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==