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

planetItems.forEach((planet) => {
    planet.addEventListener("click", (e) => {
        if (planet.classList.contains("active-planet")) {
            planet.classList.remove("active-planet");
        } else {
            planetItems.forEach((item) => {
                item.classList.remove("active-planet");
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

// switch (e.target) {
//     case earth:
//         earth.classList.add("active-planet");
//         moon.classList.remove("active-planet");
//         mars.classList.remove("active-planet");
//         europa.classList.remove("active-planet");
//         titan.classList.remove("active-planet");
//         break;
//     case moon:
//         moon.classList.add("active-planet");
//         break;
//     case mars:
//         mars.classList.add("active-planet");
//         break;
//     case europa:
//         europa.classList.add("active-planet");
//         break;
//     case titan:
//         titan.classList.add("active-planet");
//         break;
// }
