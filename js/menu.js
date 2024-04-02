const breakfast = [
  {
    img: "img/menu-1.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-2.jpg",
    name: "Caprese Salad",
    price: 83,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-3.jpg",
    name: "Stuffed Mushrooms",
    price: 50,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-4.jpg",
    name: "Grilled Salmon",
    price: 125,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-5.jpg",
    name: "Chicken Alfredo",
    price: 140,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-6.jpg",
    name: "Spaghetti ",
    price: 137,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-7.jpg",
    name: "Margherita Pizza",
    price: 53,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-8.jpg",
    name: "Hawaiian Pizza",
    price: 45,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
];

let breakfastHTML = "";
breakfast.forEach((breakfasts) => {
  breakfastHTML += `<div class="menu-list">
          <img src="${breakfasts.img}" />
          <div class="menu">
            <div class="menu-name">
              <h3>${breakfasts.name}</h3>
              <h4>$${breakfasts.price}</h4>
            </div>
            <p>${breakfasts.content}</p>
          </div>
        </div>`;
});
document.querySelector(".breakfast-body").innerHTML = breakfastHTML;

const lunch = [
  {
    img: "img/menu-8.jpg",
    name: "Grilled Cheese",
    price: 100,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-7.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-6.jpg",
    name: "Turkey Wrap",
    price: 95,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-5.jpg",
    name: " Mashed Potatoes",
    price: 20,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-4.jpg",
    name: "Sandwich",
    price: 42,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-3.jpg",
    name: "Pepperoni",
    price: 35,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-2.jpg",
    name: "Beef ",
    price: 120,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-1.jpg",
    name: "Basil Soup",
    price: 71,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
];

let lunchHTML = "";
lunch.forEach((lunches) => {
  lunchHTML += `<div class="menu-list">
          <img src="${lunches.img}" />
          <div class="menu">
            <div class="menu-name">
              <h3>${lunches.name}</h3>
              <h4>$${lunches.price}</h4>
            </div>
            <p>${lunches.content}</p>
          </div>
        </div>`;
});
document.querySelector(".lunch-body").innerHTML = lunchHTML;

const dinner = [
  {
    img: "img/menu-4.jpg",
    name: "BBQ Burger",
    price: 75,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-7.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-6.jpg",
    name: "French Fries",
    price: 50,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-8.jpg",
    name: "Apple Pie",
    price: 99,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-2.jpg",
    name: " Lava Cake",
    price: 40,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-3.jpg",
    name: "Tiramisu",
    price: 85,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-5.jpg",
    name: " Pancakes",
    price: 102,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-1.jpg",
    name: "Calamari",
    price: 60,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
];

let dinnerHTML = "";
dinner.forEach((dinners) => {
  dinnerHTML += `<div class="menu-list">
          <img src="${dinners.img}" />
          <div class="menu">
            <div class="menu-name">
              <h3>${dinners.name}</h3>
              <h4>$${dinners.price}</h4>
            </div>
            <p>${dinners.content}</p>
          </div>
        </div>`;
});

document.querySelector(".dinner-body").innerHTML = dinnerHTML;

const popularBreakfast = document.querySelector(".breakfast");
const specialLunch = document.querySelector(".lunch");
const lovelyDinner = document.querySelector(".dinner");
const breakfastBody = document.querySelector(".breakfast-body");
const breakfastLine = document.querySelector(".breakfast-line");
const lunchBody = document.querySelector(".lunch-body");
const lunchLine = document.querySelector(".lunch-line");
const dinnerBody = document.querySelector(".dinner-body");
const dinnerLine = document.querySelector(".dinner-line");

popularBreakfast.addEventListener("click", () => {
  breakfastBody.style.display = "grid";
  breakfastLine.style.display = "block";
  lunchBody.style.display = "none";
  lunchLine.style.display = "none";
  dinnerBody.style.display = "none";
  dinnerLine.style.display = "none";
});

specialLunch.addEventListener("click", () => {
  breakfastBody.style.display = "none";
  breakfastLine.style.display = "none";
  lunchBody.style.display = "grid";
  lunchLine.style.display = "block";
  dinnerBody.style.display = "none";
  dinnerLine.style.display = "none";
});

lovelyDinner.addEventListener("click", () => {
  breakfastBody.style.display = "none";
  breakfastLine.style.display = "none";
  lunchBody.style.display = "none";
  lunchLine.style.display = "none";
  dinnerBody.style.display = "grid";
  dinnerLine.style.display = "block";
});
