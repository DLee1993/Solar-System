const supheading = document.querySelector(".supheading"),
    heading = document.querySelector(".heading"),
    subheading = document.querySelector(".subheading"), 
    exploreCTA = document.querySelector('.explore-cta'),
    indexTL = gsap.timeline({delay: 0.4});

indexTL.fromTo(supheading, {y: 20, opacity: 0}, {y: 0, opacity: 1});
indexTL.fromTo(heading, {y: 20, opacity: 0}, {y: 0, opacity: 1});
indexTL.fromTo(subheading, {y: 20, opacity: 0}, {y: 0, opacity: 1});

ScrollTrigger.matchMedia({
    "(max-width: 600px)": () => {
        indexTL.fromTo(exploreCTA, {width: 0, height: 0}, {width: '150px', height: '150px', ease: 'back.inOut(1.7)', duration: 1.2})
    },
    "(min-width: 601px) and (max-width: 1099px)": () => {
        indexTL.fromTo(exploreCTA, {width: 0, height: 0}, {width: '242px', height: '242px', ease: 'back.inOut(1.7)', duration: 1.2})
    },
    "(min-width: 1100px)": () => {
        indexTL.fromTo(exploreCTA, {width: 0, height: 0}, {width: '274px', height: '274px', ease: 'back.inOut(1.7)', duration: 1.2})
    },
});