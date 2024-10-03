// AOS Initilization
AOS.init();



let headerSect = document.querySelector("#headerSect");

let headerHeight = headerSect.offsetHeight;

let heroSect = document.querySelector("#heroSect");

heroSect.style.paddingTop = headerHeight + "px";


// code to add class in header on scroll

// Select the header element
const header = document.getElementById('headerSect');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check if the page has been scrolled more than 5px
  if (window.scrollY > 5) {
    // Add the class 'frosten_bg' to the header
    header.classList.add('frosten_bg');
  } else {
    // Remove the class 'frosten_bg' if scrolled less than or equal to 5px
    header.classList.remove('frosten_bg');
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