// This is used to import the data from the json file
import data from "../data.json" assert { type: "json" };

function destinationLoop(planetName) {
    for (var destinations in data) {
        for (var planet in data[destinations]) {
            if (data[destinations][planet].name === planetName) {
                //*! Add all of the information within this loop, make sure to name everything generically as it will be used for all planets  */
                //* Change the below .image to the class name of the planet img tag!!
                document.querySelector(".planet-image").src = data[destinations][planet].images.png;
                document.querySelector('.planet-name').innerHTML = data[destinations][planet].name;
                document.querySelector('.planet-info').innerHTML = data[destinations][planet].description;
                document.querySelector('.distance-value').innerHTML = data[destinations][planet].distance;
                document.querySelector('.travelTime-value').innerHTML = data[destinations][planet].travel;
            }
        }
    }
}

document.querySelectorAll(".planet-list li").forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        const planetName = e.target.innerHTML;
        destinationLoop(planetName);
    });
});