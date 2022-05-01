// This is used to import the data from the json file
import data from "./data.json" assert { type: "json" };

function dataLoop(planetName) {
    for (var destinations in data) {
        for (var planet in data[destinations]) {
            if (data[destinations][planet].name === planetName) {
                //*! Add all of the information within this loop, make sure to name everything generically as it will be used for all planets  */
                //* Change the below .image to the class name of the planet img tag!!
                document.querySelector(".planetImage").src = data[destinations][planet].images.png;
            }
        }
    }
}

document.querySelectorAll("button").forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        const planetName = e.target.innerHTML;
        dataLoop(planetName);
        console.log(document.querySelector('.planetImage').src)
    });
});