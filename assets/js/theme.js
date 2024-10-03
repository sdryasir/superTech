// AOS Initilization
AOS.init();



let headerSect = document.querySelector("#headerSect");

let headerHeight = headerSect.offsetHeight;

let heroSect = document.querySelector("#heroSect");

heroSect.style.paddingTop = headerHeight + "px";


// let navToggler = document.querySelector("#navToggler");
// let siteWrapper = document.querySelector("#siteWrapper");

// navToggler.addEventListener('click', function(){
//     siteWrapper.classList.toggle("scrollNone")
// })



const navToggler = document.getElementById('navToggler');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    navToggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        document.body.style.overflow = '';
    });

    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        document.body.style.overflow = 'hidden';
    });