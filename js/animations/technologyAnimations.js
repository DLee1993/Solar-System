const techTL = gsap.timeline(),
    tabs = document.querySelectorAll(".tabs div"),
    pageTitle = document.querySelector(".page-title"),
    techSubheading = document.querySelector(".subheading"),
    techName = document.querySelector(".tech-name"),
    techDesc = document.querySelector(".tech-desc"),
    techImage = document.querySelector(".tech-image");

techTL.to(pageTitle, { opacity: 1, y: 0 });
techTL.to(tabs, { opacity: 1, stagger: 0.2, y: 0 });
techTL.to(techSubheading, { opacity: 1, y: 0 }, "-=0.3");
techTL.to(techName, { opacity: 1, y: 0 }, "-=0.3");
techTL.to(techDesc, { opacity: 1, y: 0 }, "-=0.3");
techTL.to(techImage, { opacity: 1, y: 0, duration: 1.2 }, "-=0.5");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        if (tab.classList.contains("active-tab")) {
            tab.classList.remove("active-tab");
        } else {
            tabs.forEach((tab) => {
                tab.classList.remove("active-tab");
            });
            tab.classList.add("active-tab");
            techTL.fromTo(
                techName,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0 }
            );
            techTL.fromTo(
                techDesc,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0 }, '-=0.2'
            );
            techTL.fromTo(
                techImage,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0 }, '-=0.4'
            );
        }
    });
});
