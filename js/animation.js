const arrow = document.querySelector(".arrow");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 350) {
      arrow.classList.add("arrowSlideUp");
      arrow.style.opacity = 1;
    }
  } else if (window.innerWidth <= 884) {
    if (document.documentElement.scrollTop > 150) {
      arrow.classList.add("arrowSlideUp");
      arrow.style.opacity = 1;
    }
  }
});

const secondContainerAnimation = document.querySelector(".second-container");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 450) {
      secondContainerAnimation.classList.add("secondContainerSlideUp");
      secondContainerAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 500) {
      secondContainerAnimation.classList.add("secondContainerSlideUp");
      secondContainerAnimation.style.opacity = 1;
    }
  }
});

const thirdContainer = document.querySelector(".third-container");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 900) {
      thirdContainer.classList.add("thirdContainerSlideUp");
      thirdContainer.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 1450) {
      thirdContainer.classList.add("thirdContainerSlideUp");
      thirdContainer.style.opacity = 1;
    }
  }
});

const fourthContainer = document.querySelector(".fourth-container");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 1450) {
      fourthContainer.classList.add("fourthContainerSlideUp");
      fourthContainer.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 2400) {
      fourthContainer.classList.add("fourthContainerSlideUp");
      fourthContainer.style.opacity = 1;
    }
  }
});

const sixthContainer = document.querySelector(".sixth-container");
const membersContainer = document.querySelector(".members-container");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 2750) {
      sixthContainer.classList.add("sixthContainerSlideUp");
      sixthContainer.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 4850) {
      sixthContainer.classList.add("sixthContainerSlideUp");
      sixthContainer.style.opacity = 1;
    }
  }
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 650) {
      membersContainer.classList.add("sixthContainerSlideUp");
      membersContainer.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 850) {
      membersContainer.classList.add("sixthContainerSlideUp");
      membersContainer.style.opacity = 1;
    }
  }
});

const seventhContainer = document.querySelector(".seventh-container");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 3300) {
      seventhContainer.classList.add("seventhContainerSlideUp");
      seventhContainer.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 7150) {
      seventhContainer.classList.add("seventhContainerSlideUp");
      seventhContainer.style.opacity = 1;
    }
  }
});
