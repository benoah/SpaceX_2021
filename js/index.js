import displayNextLaunch from "./displayNextLaunch.js";
import updateEverySec from "./updateEverySec.js";
// picking up the correct url
let NEXT_LAUNCH = `https://api.spacexdata.com/v4/launches/next`;
const ROCKETS_URL = `https://api.spacexdata.com/v4/rockets`;
let rocketsArray = [];

console.log(ROCKETS_URL);

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

    for (let i = 0; i < rockets.length; i++) {
        console.log(rockets[i].description);

        // add the new HTML string to the existing HTML string
        cardsContainer.innerHTML += `
        <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${rockets[i].flickr_images}"
              alt="..."
              class="img-fluid"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${rockets[i].name}</h5>
              <p class="card-text">
              ${rockets[i].description}
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div> `;
    }
}

