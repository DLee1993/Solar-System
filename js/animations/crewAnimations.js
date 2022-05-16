const crewTL = gsap.timeline({ delay: 1.2 }),
    pageTitle = document.querySelector(".page-title"),
    crewImage = document.querySelector(".crew-image img"),
    crewName = document.querySelector(".crew-name"),
    crewPos = document.querySelector(".crew-position"),
    crewBio = document.querySelector(".crew-bio"),
    slideDiv = document.querySelectorAll(".slide-indicators div");

crewTL.to(pageTitle, { opacity: 1, y: 0 });
crewTL.to(crewPos, { opacity: 1, y: 0 });
crewTL.to(crewName, { opacity: 1, y: 0 }, "-=0.2");
crewTL.to(crewImage, { opacity: 1, y: 0 });
crewTL.to(crewBio, { opacity: 1, y: 0 }, "-=0.7");
crewTL.to(slideDiv, { opacity: 0.5, y: 0, stagger: 0.2 });

slideDiv.forEach((slide) => {
    slide.addEventListener("click", (e) => {
        if (slide.style.backgroundColor === "#fff") {
            slide.style.backgroundColor === "#979797";
        } else {
            slideDiv.forEach((item) => {
                item.style.backgroundColor = "#979797";
            });
            slide.style.backgroundColor = "#fff";
            crewTL.fromTo(crewPos, {opacity: 0, y: 10}, {opacity: 1, y: 0})
            crewTL.fromTo(crewName, {opacity: 0, y: 10}, {opacity: 1, y: 0}, "-=0.2")
            crewTL.fromTo(crewImage, {opacity: 0, y: 10}, {opacity: 1, y: 0})
            crewTL.fromTo(crewBio, {opacity: 0, y: 10}, {opacity: 1, y: 0}, "-=0.7")
        }
    });
});
