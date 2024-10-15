


/* 


let boxWrap = document.querySelector('.boxWrap');
let boxInner = document.querySelector('.boxInner');
let box = document.querySelector('.box');
let boxBtn = document.querySelector('.boxBtn');


boxWrap.addEventListener('click', function(){
  console.log("boxWrap is Clicked");
  
})

boxInner.addEventListener('click', function(){
  console.log("boxInner is Clicked");
  
})

box.addEventListener('click', function(){
  box.classList.add("bg-red")
  console.log("box is Clicked");
  
})

boxBtn.addEventListener('click', function(e){
  console.log("boxBtn is Clicked");
  e.stopPropagation();
  
})*/



/*<div class="boxWrap">
    <div class="boxInner">
      <div class="box">
        <button class="boxBtn">Click Here!</button>
      </div>
    </div>
  </div>  <!-- /.boxWrap -->
  
  
  
.box{
  width: 300px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}


.bg-red{
  background-color: red;
}

  */


// let boxEl = document.getElementById('box');
// let secondSpan = document.getElementById('second-span');


// secondSpan.remove();


// console.log(boxEl.innerText);
// console.log(boxEl.textContent);

// <div id="box">
//     <span>Hello Jazib sb</span>
//     <span id="second-span" style="display: none;">Bye All</span>
//   </div>

//code for generic slider 

document.querySelectorAll('.marquee-content').forEach((marqueeContent) => {
  let cloneContent = marqueeContent.innerHTML; // Clone the content
  marqueeContent.innerHTML += cloneContent; // Append the cloned content to create the loop

  let scrollAmount = 0;
  let scrollSpeed = 1; // Adjust speed as necessary

  function animateMarquee() {
    scrollAmount += scrollSpeed;

    // Reset the scroll position when reaching half the scroll width (since the content is duplicated)
    if (scrollAmount >= marqueeContent.scrollWidth / 2) {
      scrollAmount = 0;
    }

    marqueeContent.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animateMarquee); // Continue the animation
  }

  // Start the animation
  animateMarquee();

  // Pause on hover
  marqueeContent.addEventListener('mouseover', () => {
    scrollSpeed = 0;
  });

  // Resume on mouse leave
  marqueeContent.addEventListener('mouseleave', () => {
    scrollSpeed = 1;
  });
});



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


// add active class on hover


document.querySelectorAll('.comment_item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    // Remove 'active' class from the currently active card
    document.querySelectorAll('.comment_item.active').forEach(activeItem => {
      activeItem.classList.remove('active');
    });

    // Add 'active' class to the hovered card
    this.classList.add('active');
  });
});


//code (gsap) for marquee slider





//auto play modal video
const video = document.getElementById('modalVideo');

// Play the video when the modal is shown
document.getElementById('exampleModal').addEventListener('shown.bs.modal', function () {
  video.play();
});

// Pause the video and reset time when the modal is hidden
document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
  video.pause();
  video.currentTime = 0; // Optionally reset to start
});
