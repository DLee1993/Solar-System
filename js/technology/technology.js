// This is used to import the data from the json file
import data from "../data.json" assert { type: "json" };


function technologyLoop(techIndex) {
    for (var technology in data) {
        for (var tech in data[technology]) {
            if (data[technology][tech].index == techIndex) {
                //*! Add all of the information within this loop, make sure to name everything generically as it will be used for all planets  */
                //* Change the below .image to the class name of the planet img tag!!
                ScrollTrigger.matchMedia({
                    "(max-width: 1100px)": () => {
                        document.querySelector(".mobile-image").src = data[technology][tech].images.landscape;
                    },
                    "(min-width: 1100px)": () => {
                        document.querySelector(".desktop-image").src = data[technology][tech].images.portrait;
                    }
                });
                document.querySelector('.tech-name').innerHTML = data[technology][tech].name;
                document.querySelector('.tech-desc').innerHTML = data[technology][tech].description;
            }
        }
    }
}

document.querySelectorAll(".tabs div").forEach(function (tab) {
    tab.addEventListener("click", (e) => {
        const techIndex = e.target.innerHTML;
        technologyLoop(techIndex);
    });
});