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

// let navToggler = document.querySelector("#navToggler");
// let siteWrapper = document.querySelector("#siteWrapper");

// navToggler.addEventListener('click', function(){
//     siteWrapper.classList.toggle("scrollNone")
// })

// const navToggler = document.getElementById('navToggler');
//     const navbarCollapse = document.getElementById('navbarSupportedContent');

//     navToggler.addEventListener('click', function () {
//         if (navbarCollapse.classList.contains('show')) {
//             document.body.style.overflow = '';
//         } else {
//             document.body.style.overflow = 'hidden';
//         }
//     });

//     navbarCollapse.addEventListener('hidden.bs.collapse', function () {
//         document.body.style.overflow = '';
//     });

//     navbarCollapse.addEventListener('shown.bs.collapse', function () {
//         document.body.style.overflow = 'hidden';
//     });

// code for info_section swiper

// var swiper = new Swiper(".mySwiper2", {
//   loop: 'true',
//   spaceBetween: 24,
//   autoplay: {
//     delay: 1500, // Adjust delay (in milliseconds) for autoplay
//     disableOnInteraction: false, // Keeps autoplay active after user interaction
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     // when window width is >= 992px
//     992: {
//       slidesPerView: 2.9,
//     },
//     // when window width is between 786px and 992px
//     786: {
//       slidesPerView: 2,
//     },
//     // when window width is < 786px
//     576: {
//       slidesPerView: 1,
//     },
//   },
// });

var swiper = new Swiper(".mySwiper2", {
  loop: true, // Corrected 'true' without quotes
  spaceBetween: 24,
  autoplay: {
    delay: 1500, // Adjust delay (in milliseconds) for autoplay
    disableOnInteraction: false, // Keeps autoplay active after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 2.9, // Shows 2.9 slides on large screens
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

//styling of responsive navs and tabs

// const scrollLeftButton = document.querySelector(".scroll-left");
// const scrollRightButton = document.querySelector(".scroll-right");
// const tabList = document.querySelector(".scrollable-tabs");

// // Scroll left when clicking the left button
// scrollLeftButton.addEventListener("click", () => {
//   tabList.scrollBy({
//     left: -100, // Adjust this value for scroll speed
//     behavior: "smooth",
//   });
// });

// // Scroll right when clicking the right button
// scrollRightButton.addEventListener("click", () => {
//   tabList.scrollBy({
//     left: 100, // Adjust this value for scroll speed
//     behavior: "smooth",
//   });
// });



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
