let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Shirt",
    image: "products/f1.jpg",
    description: "This is a summer shirt",
    price: 100,
  },
  {
    id: 2,
    name: "Shirt",
    image: "products/f2.jpg",
    description: "This is a summer shirt",
    price: 200,
  },
  {
    id: 3,
    name: "Shirt",
    image: "products/f3.jpg",
    description: "This is a summer shirt",
    price: 100,
  },
  {
    id: 4,
    name: "Shirt",
    image: "products/f2.jpg",
    description: "This is a summer shirt",
    price: 100,
  },
  {
    id: 5,
    name: "Shirt",
    image: "products/f5.jpg",
    description: "This is a summer shirt",
    price: 200,
  },
  {
    id: 6,
    name: "Shirt",
    image: "products/f6.jpg",
    description: "This is a summer shirt",
    price: 300,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("pro");
    newDiv.innerHTML = `
            <img src="${value.image}" alt=" no pic avaible">
            <div class="title">${value.name}</h3></div>
            <div class="description">${value.description}</div>
            <div class="price">${value.price.toLocaleString()} kr</div>
            <button class="add-to-cart" onclick="addToCard(${key})">Add to card</button>

        `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.price * products[key].quantity;
      count += value.quantity;
      let newDiv = document.createElement("li");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
                <div> <img src="${value.image}" alt=" no pic avaible"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                    
                </div>`;

      listCard.appendChild(newDiv);
    }
  });
  total.innerHTML = `${totalPrice.toLocaleString()} kr`;
  quantity.innerHTML = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}
