/* stage 7·5a · slide: s6-render · indicators 2, 7 · end state */
/* menu.js — index.html only */

/* ===== 1. The menu as data (§6) ===== */

/* ===== 1. The menu as data (§6) ===== */

const dishes = [
  {
    name: "Gado-Gado",
    description: "Indonesian salad with mixed vegetables, tofu, eggs, and peanut sauce",
    price: 10,
    image: "gado-gado.png",
    alt: "A plate of Gado-Gado with peanut sauce"
  },
  {
    name: "Bakwan Jagung",
    description: "Crispy Indonesian sweet corn fritters with herbs and spices",
    price: 8,
    image: "bakwan-jagung.png",
    alt: "Crispy sweet corn fritters"
  },
  {
    name: "Nasi Goreng",
    description: "Indonesian fried rice with chicken, eggs, and crackers",
    price: 15,
    image: "nasi-goreng.png",
    alt: "A plate of Indonesian fried rice"
  },
  {
    name: "Sate Ayam",
    description: "Grilled chicken skewers with peanut sauce",
    price: 14,
    image: "sate-ayam.png",
    alt: "Chicken skewers with peanut sauce"
  },
  {
    name: "Rendang",
    description: "Slow-cooked beef in rich coconut milk and spices",
    price: 20,
    image: "rendang.png",
    alt: "Beef rendang served with warm rice"
  }
];

/* ===== 2. One rule for how a price looks (§6) ===== */

function priceLabel(price) {
  return "$" + price;
}

/* ===== 3. Build one card and one table row from one dish (§6) ===== */

function makeCard(dish) {
  const card = document.createElement("div");
  card.classList.add("dish");

  const photo = document.createElement("img");
  photo.src = dish.image;
  photo.width = 240;
  photo.height = 135;
  photo.alt = dish.alt;

  const name = document.createElement("h2");
  name.textContent = dish.name;

  const description = document.createElement("p");
  description.textContent = dish.description;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = priceLabel(dish.price);

  card.append(photo, name, description, price);
  return card;
}

function makeRow(dish) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = dish.name;

  const priceCell = document.createElement("td");
  priceCell.textContent = priceLabel(dish.price);

  row.append(nameCell, priceCell);
  return row;
}

/* ===== 4. Put every dish on the page (§6) ===== */

const dishList = document.querySelector("#dishes");
const priceList = document.querySelector("#price-list");

for (const dish of dishes) {
  dishList.append(makeCard(dish));
  priceList.append(makeRow(dish));
}
