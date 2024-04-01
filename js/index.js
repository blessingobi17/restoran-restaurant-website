const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
  }
});

const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
  const drowpdownList = document.querySelector(".dropdown-list");

  if (drowpdownList.style.display == "block") {
    drowpdownList.style.display = "none";
  } else {
    drowpdownList.style.display = "block";
  }
});

const swiper1 = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

if (window.innerWidth <= 767) {
  const swiper1 = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}

const playBtn = document.querySelector(".play-btn");
const closeBtn = document.querySelector(".close-btn");
const video = document.querySelector(".video-bg");
const overlay = document.querySelector(".overlay");

playBtn.addEventListener("click", () => {
  video.style.display = "flex";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  video.style.display = "none";
  overlay.style.display = "none";
});
