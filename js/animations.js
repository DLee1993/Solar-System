const logoIcon = document.querySelector(".logo-homeLink"),
    menuIcon = document.querySelector(".hamburger-icon"),
    designLine = document.querySelector(".style-line"),
    navItemList = document.querySelector(".nav-list"),
    navItem = navItemList.querySelectorAll(".nav-item");

var tl = gsap.timeline();

const runMobileAnim = () => {
    tl.to(logoIcon, { x: 0, opacity: 1 });
    tl.to(menuIcon, { y: 0, opacity: 1 }, '-=0.5');
};

const runTabletAnim = () => {
    tl.to(logoIcon, { x: 0, opacity: 1 });
    tl.to(navItemList, { opacity: 1 }, '-=0.8');
    navItem.forEach((item) => {
        tl.to(item, { y: 0, opacity: 1, duration: 0.3 }, '-=0.2');
    });
};

const runDesktopAnim = () => {
    tl.to(logoIcon, { x: 0, opacity: 1 });
    tl.to(designLine, { x: 0, opacity: 1 });
    tl.to(navItemList, { opacity: 1 }, '-=0.8');
    navItem.forEach((item) => {
        tl.to(item, { y: 0, opacity: 1, duration: 0.3 }, '-=0.2');
    });
};

const ready = () => {
    ScrollTrigger.matchMedia({
        "(max-width: 600px)": () => {
            runMobileAnim();
        },
        "(min-width: 601px) and (max-width: 1099px)": () => {
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