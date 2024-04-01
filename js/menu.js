const breakfast = [
  {
    img: "img/menu-1.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-2.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-3.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-4.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-5.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-6.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-7.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-8.jpg",
    name: "Chicken Burger",
    price: 115,
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
    name: "Chicken Burger",
    price: 115,
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
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-5.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-4.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-3.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-2.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-1.jpg",
    name: "Chicken Burger",
    price: 115,
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
    name: "Chicken Burger",
    price: 115,
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
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-8.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-2.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-3.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-5.jpg",
    name: "Chicken Burger",
    price: 115,
    content: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "img/menu-1.jpg",
    name: "Chicken Burger",
    price: 115,
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
