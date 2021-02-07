import displayNextLaunch from "./displayNextLaunch.js";
import updateEverySec from "./updateEverySec.js";
import createRocketCards from "./createRocketCards.js";
// picking up the correct url
let NEXT_LAUNCH = `https://api.spacexdata.com/v4/launches/next`;

export const ROCKETS_URL = `https://api.spacexdata.com/v4/rockets`;
let rocketsArray = [];




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








