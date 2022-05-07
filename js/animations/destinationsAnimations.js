const planetsTL = gsap.timeline({ delay: 1.2 }),
    planetImage = document.querySelector(".planet-image"),
    pageTitle = document.querySelector(".page-title"),
    planetItems = document.querySelectorAll(".planet-list li");

planetsTL.to(pageTitle, { opacity: 1, y: 0 });
planetsTL.to(
    planetImage,
    { height: "90%", ease: "back.inOut(1.5)", duration: 1.5 },
    "-=0.8"
);

planetsTL.to(planetItems, {opacity: 1, y: 0, stagger: 0.2}, '-=0.8')


planetItems.forEach((planet) => {
    planet.classList.add('hover');
    planet.addEventListener("click", (e) => {
        if (planet.classList.contains("active-planet")) {
            planet.classList.remove("active-planet");
        } else {
            planetItems.forEach((item) => {
                item.classList.remove("active-planet");
                item.classList.add('hover')
            });
            planet.classList.add("active-planet");
            planetsTL.fromTo(
                planetImage,
                { height: 0, ease: "back.inOut(1.5)", duration: 1.5 },
                { height: "90%", ease: "back.inOut(1.5)", duration: 1.5 }
            );
        }
    });
});