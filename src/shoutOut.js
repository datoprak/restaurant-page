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

export default sos;
