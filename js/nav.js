const hamburger = document.querySelector(".hamburger-icon"),
    closeIcon = document.querySelector(".close-icon"),
    navList = document.querySelector(".nav-list"),
    navItems = document.querySelectorAll(".nav-item"),
    home = document.querySelector(".home"),
    destinations = document.querySelector(".destinations"),
    crew = document.querySelector(".crew"),
    technology = document.querySelector(".technology"),
    logo = document.querySelector(".logo-homeLink"),
    styleLine = document.querySelector(".style-line");

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
}

document.addEventListener('resize', () => {
    console.log('true')
})