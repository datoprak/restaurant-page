const foodCard = (name, price) => {
  const card = document.createElement("div");
  card.classList.add("food-card");
  const foodImage = document.createElement("img");
  //   foodImage.src = image;
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

export default foodCard;
