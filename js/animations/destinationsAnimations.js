const planetsTL = gsap.timeline({delay: 1.5}),
    planetImage = document.querySelector(".planet-image"), 
    pageTitle = document.querySelector('.page-title');

planetsTL.fromTo(pageTitle, {opacity: 0, y: 10}, {opacity: 1, y: 0})
planetsTL.fromTo(planetImage, {height: 0}, {height: '100%', ease: 'back.inOut(1.5)', duration: 1.5})