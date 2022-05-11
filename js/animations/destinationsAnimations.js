const planetsTL = gsap.timeline({ delay: 1.2 }),
    planetImage = document.querySelector(".planet-image"),
    pageTitle = document.querySelector(".page-title"),
    planetName = document.querySelector(".planet-name"),
    planetInfo = document.querySelector(".planet-info"),
    planetDistance = document.querySelectorAll(".distance p"),
    planetTravelTime = document.querySelectorAll(".travel-time p"),
    planetFacts = document.querySelector(".planet-facts"),
    planetItems = document.querySelectorAll(".planet-list li");

planetsTL.to(pageTitle, { opacity: 1, y: 0 });
planetsTL.to(
    planetImage,
    { height: "90%", ease: "back.inOut(1.5)", duration: 1.5 },
    "-=0.8"
);

planetsTL.to(planetItems, { opacity: 1, y: 0, stagger: 0.2 }, "-=0.8");

planetsTL.to(
    planetName,
    { opacity: 1, y: 0 },
    "-=0.5"
);
planetsTL.to(
    planetInfo,
    { opacity: 1, y: 0 },
    "-=0.5"
);
planetsTL.to(
    planetFacts,
    { borderTop: "1px solid gray" },
    "-=0.5"
);
planetsTL.to(
    planetDistance,
    { opacity: 1, y: 0, stagger: 0.2 },
    "-=0.5"
);
planetsTL.to(
    planetTravelTime,
    { opacity: 1, y: 0, stagger: 0.2 },
    "-=0.7"
);

planetItems.forEach((planet) => {
    planet.classList.add("hover");
    planet.addEventListener("click", (e) => {
        if (planet.classList.contains("active-planet")) {
            planet.classList.remove("active-planet");
        } else {
            planetItems.forEach((item) => {
                item.classList.remove("active-planet");
                item.classList.add("hover");
            });
            planet.classList.add("active-planet");
            planetsTL.fromTo(
                planetImage,
                { height: 0, ease: "back.inOut(1.5)", duration: 1.3 },
                { height: "90%", ease: "back.inOut(1.5)", duration: 1.3 }
            );
            planetsTL.fromTo(
                planetName,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0 },
                "-=0.5"
            );
            planetsTL.fromTo(
                planetInfo,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0 },
                "-=0.5"
            );
            planetsTL.fromTo(
                planetFacts,
                { borderTop: "0px solid gray" },
                { borderTop: "1px solid gray" },
                "-=0.5"
            );
            planetsTL.fromTo(
                planetDistance,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, stagger: 0.2 },
                "-=0.5"
            );
            planetsTL.fromTo(
                planetTravelTime,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, stagger: 0.2 },
                "-=0.7"
            );
        }
    });
});
