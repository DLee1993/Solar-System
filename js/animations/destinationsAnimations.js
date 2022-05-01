const planetsTL = gsap.timeline(),
    planetImage = document.querySelector(".planet-image");


planetsTL.fromTo(planetImage, {height: 0}, {height: '100%', duration: 2.5})