const planetsTL = gsap.timeline({delay: 1.2}),
    planetImage = document.querySelector(".planet-image"), 
    pageTitle = document.querySelector('.page-title');

planetsTL.to(pageTitle, {opacity: 1, y: 0})
planetsTL.to(planetImage, {height: '100%', ease: 'back.inOut(1.5)', duration: 1.5}, '-=0.8')