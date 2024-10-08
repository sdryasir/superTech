// AOS Initilization
AOS.init();

let headerSect = document.querySelector("#headerSect");

let headerHeight = headerSect.offsetHeight;

let heroSect = document.querySelector("#heroSect");

heroSect.style.paddingTop = headerHeight + "px";

// code to add class in header on scroll

// Select the header element
const header = document.getElementById("headerSect");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // Check if the page has been scrolled more than 5px
  if (window.scrollY > 5) {
    // Add the class 'frosten_bg' to the header
    header.classList.add("frosten_bg");
  } else {
    // Remove the class 'frosten_bg' if scrolled less than or equal to 5px
    header.classList.remove("frosten_bg");
  }
});


const swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true, // Corrected 'true' without quotes
  spaceBetween: 24,
  autoplay: {
    delay: 1500, // Adjust delay (in milliseconds) for autoplay
    disableOnInteraction: false, // Keeps autoplay active after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    // when window width is >= 992px
    1200: {
      slidesPerView: 3, // Shows 2.9 slides on large screens
    },
    992: {
      slidesPerView: 2, // Shows 2.9 slides on large screens
    },
    768: {
      slidesPerView: 3, // Shows 2.9 slides on large screens
    },
    // when window width is between 576px and 992px
    576: {
      slidesPerView: 2, // Shows 2 slides at 576px and above
    },
    // when window width is < 576px
    0: {
      slidesPerView: 1, // Shows 1 slide for screens below 576px
    },
  },
});


//styling of reviews section swiper

const mySwiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});


const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");
const tabList = document.querySelector(".scrollable-tabs");

// Function to check if the scroll has reached the left or right limit
const scrollTabs = (scrollAmount) => {
  const maxScrollLeft = tabList.scrollWidth - tabList.clientWidth;

  if (scrollAmount < 0 && tabList.scrollLeft === 0) {
    // If scrolling left and reached the start, jump to the end
    tabList.scrollLeft = maxScrollLeft;
  } else if (scrollAmount > 0 && tabList.scrollLeft >= maxScrollLeft) {
    // If scrolling right and reached the end, jump to the start
    tabList.scrollLeft = 0;
  } else {
    // Normal scrolling behavior
    tabList.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

// Scroll left when clicking the left button
scrollLeftButton.addEventListener("click", () => {
  scrollTabs(-100); // Adjust this value for scroll speed
});

// Scroll right when clicking the right button
scrollRightButton.addEventListener("click", () => {
  scrollTabs(100); // Adjust this value for scroll speed
});
