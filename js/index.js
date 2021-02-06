import displayNextLaunch from "./displayNextLaunch.js";
import updateEverySec from "./updateEverySec.js";
// picking up the correct url
let NEXT_LAUNCH = `https://api.spacexdata.com/v4/launches/next`;

export const ROCKETS_URL = `https://api.spacexdata.com/v4/rockets`;
let rocketsArray = [];

// console.log(ROCKETS_URL);

// this variabel is going to be fill up later

// asyn function that is going to fetch
async function getProducts() {
    try {
        const response = await fetch(NEXT_LAUNCH);
        const json = await response.json();
        let data = json;
        displayNextLaunch(data);
        updateEverySec(data);
    } catch (error) {
        console.log(error);
        // displayMessage("error", error, "container");
    }
}
getProducts();

// this variabel is going to be fill up later

// asyn function that is going to fetch
async function getRockets() {
    try {
        const response = await fetch(ROCKETS_URL);
        const json = await response.json();
        let data = json;
        rocketsArray = data;
        createRocketCards(rocketsArray);
    } catch (error) {
        console.log(error);
        // displayMessage("error", error, "container");
    }
}
getRockets();


function createRocketCards(rockets) {
    const cardsContainer = document.querySelector(".cards");
    rockets.forEach(rocket => {

        let img = rocket.flickr_images[0];
        if (img.includes("imgur")) {
            img = "img/spacex-6.png"
        }
        cardsContainer.innerHTML += `
        <div class="col-12 col-md-3">
        <div class=" card h-100 ">
        <img class="card-img-top " src="${img}" alt="Card image cap">
            <div class="card-body" >
                <h3 class="card-title">${rocket.name}</h3>
                <p class="card-text">${rocket.description}</p>
                <a class="btn btn-primary" href="detail.html?id=${rocket.id}" > Details</a>
                </div>
        </div>
    </div> `;
    });
}






