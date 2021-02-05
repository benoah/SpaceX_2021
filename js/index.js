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

        if (!rockets[i].flickr_images) {
            // continue will skip the remaining code and return to the top of the loop
            continue;
        }
        // add the new HTML string to the existing HTML string
        cardsContainer.innerHTML += `
        <div class="row">
      <div class="col-sm-12  ">
        <div class="card-body">
        <img class="card-img-top" src="${rockets[i].flickr_images}" alt="Card image cap">
         <h5 class="card-title">${rockets[i].name}</h5>
         <p class="card-text">${rockets[i].description}</p>
          <a href="#" class="btn btn-primary"> Details</a>
          </div>
      </div>
    </div>
  `;
    }
}

