const supheading = document.querySelector(".supheading"),
    heading = document.querySelector(".heading"),
    subheading = document.querySelector(".subheading"), 
    exploreCTA = document.querySelector('.explore-cta'),
    indexTL = gsap.timeline({delay: 0.4});

indexTL.fromTo(supheading, {y: 20, opacity: 0}, {y: 0, opacity: 1});
indexTL.fromTo(heading, {y: 20, opacity: 0}, {y: 0, opacity: 1});
indexTL.fromTo(subheading, {y: 20, opacity: 0}, {y: 0, opacity: 1});
indexTL.fromTo(exploreCTA, {width: 0, height: 0}, {width: '274px', height: '274px', ease: 'back.inOut(1.7)', duration: 1.2})