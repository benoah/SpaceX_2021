import { ROCKETS_URL } from "./index.js";

const queryString = document.location.search;


const params = new URLSearchParams(queryString);


const id = params.get("id");




if (!id) {
    document.location.href = "/";
}


const detailsUrl = ROCKETS_URL + "/" + id;


(async function () {
    try {
        const response = await fetch(detailsUrl);
        const details = await response.json();



        document.title = details.name;

        console.log("details", details.flickr_images);

        const container = document.querySelector(".detail-container");


        container.innerHTML = `
     
        <div class="container">
        <div class="row">
            <div class="col-sm">
            <div id="carouselExampleIndicators" class="carousel slide" data-interval="false" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner embed-responsive embed-responsive-21by9">
              <div class="carousel-item active embed-responsive-item" style="background-image: url(img/slider-1.jpg);"></div>
              <div class="carousel-item embed-responsive-item" style="background-image: url(img/slider-2.jpg);"></div>
              <div class="carousel-item embed-responsive-item" style="background-image: url(img/slider-3.jpg);"></div>
            </div>
          </div>





            </div>
            <div class="col-sm">
                <div class="project-info-box mt-0">
                    <h5>${details.name}</h5>
                    <p class="mb-0">${details.description}</p>
                </div>
                <div class="project-info-box">
                    <p><b>Type:</b>${details.type}</p>
                    <p><b>first flight:</b>${details.first_flight}</p>
                    <p><b>Country:</b> ${details.country}</p>
                    <p><b>Material:</b> ${details.landing_legs.material}</p>
                    <p class="mb-0"><b>Budget:</b>${details.cost_per_launch} $500</p>
                </div>
            </div>
        </div>
    </div>

                            
                            


                            `;


    } catch (error) {
        console.log(error);;
    }
})();


