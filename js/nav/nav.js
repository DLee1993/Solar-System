const hamburger = document.querySelector(".hamburger-icon"),
    closeIcon = document.querySelector(".close-icon img"),
    navList = document.querySelector(".nav-list"),
    navItems = document.querySelectorAll(".nav-item"),
    home = document.querySelector(".home"),
    destinations = document.querySelector(".destinations"),
    crew = document.querySelector(".crew"),
    technology = document.querySelector(".technology"),
    logo = document.querySelector(".logo-homeLink"),
    styleLine = document.querySelector(".style-line"),
    mainContent = document.querySelector('.main-content'); 

let navOpen = false;   

hamburger.addEventListener("click", () => {
    if (!navOpen) {
        navList.classList.add("open");
        navOpen = true;
    }
});

closeIcon.addEventListener("click", () => {
    if (navOpen) {
        navList.classList.remove("open");
        navOpen = false;
    }
});

if (document.body.className) {
    switch (document.body.className) {
        case "home-page":
            home.classList.add("active");
            destinations.classList.add("hover");
            crew.classList.add("hover");
            technology.classList.add("hover");
            break;
        case "destinations-page":
            destinations.classList.add("active");
            home.classList.add("hover");
            crew.classList.add("hover");
            technology.classList.add("hover");
            break;
        case "crew-page":
            crew.classList.add("active");
            destinations.classList.add("hover");
            home.classList.add("hover");
            technology.classList.add("hover");
            break;
        case "technology-page":
            technology.classList.add("active");
            destinations.classList.add("hover");
            crew.classList.add("hover");
            home.classList.add("hover");
            break;
    }
}; 

window.addEventListener('resize', () => {
    if(window.screen.width > 600){
        navList.classList.remove('open')
        navOpen = false;
    }
})

mainContent.addEventListener('click', () => {
    if(navList.classList.contains('open')){
        navList.classList.remove('open')
        navOpen = false;
    }
})