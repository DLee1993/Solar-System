// This is used to import the data from the json file
import data from "../data.json" assert { type: "json" };

function crewLoop(crewRole) {
    for (var crew in data) {
        for (var crewMember in data[crew]) {
            if (data[crew][crewMember].role === crewRole) {
                //*! Add all of the information within this loop, make sure to name everything generically as it will be used for all planets  */
                //* Change the below .image to the class name of the planet img tag!!
                document.querySelector(".crew-image img").src = data[crew][crewMember].images.png;
                document.querySelector('.crew-name').innerHTML = data[crew][crewMember].name;
                document.querySelector('.crew-position').innerHTML = data[crew][crewMember].role;
                document.querySelector('.crew-bio').innerHTML = data[crew][crewMember].bio;
            }
        }
    }
}

document.querySelectorAll('.slide-indicators div').forEach((div) => {
    div.addEventListener("click", (e) => {
        const crewRole = e.target.classList.value;
        crewLoop(crewRole);
    });
});