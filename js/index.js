import displayNextLaunch from "./displayNextLaunch.js";
import updateEverySec from "./updateEverySec.js";
import createRocketCards from "./createRocketCards.js";

// picking up the correct url
let NEXT_LAUNCH = `https://api.spacexdata.com/v4/launches/next`;

export const ROCKETS_URL = `https://api.spacexdata.com/v4/rockets`;
let rocketsArray = [];


let ABOUT_URL = `https://api.spacexdata.com/v4/company`;


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


// asyn function that is going to fetch
async function getCompanyInformation() {
    try {
        const response = await fetch(ABOUT_URL);
        const json = await response.json();
        let data = json;
        createCompanyList(data);
    } catch (error) {
        console.log(error);
        // displayMessage("error", error, "container");
    }
}
getCompanyInformation();

function createCompanyList(information) {
    const lisContainer = document.querySelector(".list");

    console.log("information", information.headquarters);
    lisContainer.innerHTML += `
    <div id="accordionExample" class="accordion shadow">
    <!-- Accordion item 1 -->
    <div class="card">
        <div id="headingOne" class="card-header bg-white shadow-sm border-0">
            <h2 class="mb-0">
                <button type="button" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne"
                    class="btn btn-link text-dark font-weight-bold text-uppercase collapsible-link">headquarters</button>
            </h2>
        </div>
        <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample"
            class="collapse show">
            <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">Address: ${information.headquarters.address}</li>
            <li class="list-group-item">City: ${information.headquarters.city}</li>
            <li class="list-group-item">State:${information.headquarters.state}</li>
          </ul>
            </div>
        </div>
    </div><!-- End -->
</div><!-- End -->
      
    
    `;

}





























