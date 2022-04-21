const logoIcon = document.querySelector(".logo-homeLink"),
      menuIcon = document.querySelector('.hamburger-icon'),
      designLine = document.querySelector(".style-line"),
      navItemList = document.querySelector('.nav-list');




var tl = gsap.timeline({duration: 0.3});

const runMobileAnim = () => {
    tl.to(logoIcon, { x: 0, opacity: 1 });
    tl.to(menuIcon, { y: 0, opacity: 1 }, '-=0.5');
    tl.to(navItemList, {opacity: 1}, '-=0.5')
}

const runTabletAnim = () => {
    tl.to(logoIcon, { x: 0, opacity: 1 });
    tl.to(navItemList, {opacity: 1,}, '-=0.5');
};

const runDesktopAnim = () => {
    tl.to(logoIcon, { x: 0, opacity: 1 });
    tl.to(designLine, {opacity: 1, x: 0}, '-=0.5')
    tl.to(navItemList, {opacity: 1,}, '-=0.3');
};

const ready = () => {
    ScrollTrigger.matchMedia({
        "(max-width: 600px)": () => {
            runMobileAnim(); 
        },
        "(min-width: 600px)": () => {
            runTabletAnim();
        },
        "(min-width: 1100px)": () => {
            runDesktopAnim();
        },
    });
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
