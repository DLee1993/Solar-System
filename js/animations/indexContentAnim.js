const supheading = document.querySelector(".supheading"),
    heading = document.querySelector(".heading"),
    subheading = document.querySelector(".subheading"), 
    exploreCTA = document.querySelector('.explore-cta'),
    indexTL = gsap.timeline({delay: 1.2, ease: 'power2.out'});

indexTL.to(supheading, {y: 0, opacity: 1});
indexTL.to(heading, {y: 0, opacity: 1}, '-=0.5');
indexTL.to(subheading, {y: 0, opacity: 1}, '-=0.5');

ScrollTrigger.matchMedia({
    "(max-width: 600px)": () => {
        indexTL.to(exploreCTA, {width: '150px', height: '150px', ease: 'back.inOut(1.7)', duration: 0.8})
    },
    "(min-width: 601px) and (max-width: 1099px)": () => {
        indexTL.to(exploreCTA, {width: '242px', height: '242px', ease: 'back.inOut(1.7)', duration: 1.2})
    },
    "(min-width: 1100px)": () => {
        indexTL.to(exploreCTA, {width: '300px', height: '300px', ease: 'back.inOut(1.7)', duration: 1.2}, '-=0.5')
    },
});

exploreCTA.addEventListener('mouseenter', () => {
    indexTL.to(exploreCTA, {outline: '50px solid rgba(255, 255, 255, 0.258)'})
})
exploreCTA.addEventListener('mouseleave', () => {
    indexTL.to(exploreCTA, {outline: '0px solid rgba(255, 255, 255, 0.258)'})
})