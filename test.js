
function createRocketCards(rockets) {
    const cardsContainer = document.querySelector(".cards");

    rockets.forEach((rocket) => {
        cardsContainer.innerHTML += `
        <div class="card">
        <h2 class="card__title">${rocket.rocket_name}</h2>
        <div class="card__info">
          <div class="devider">
            <div class="devider-container">
              <div class="devider-1">
                <div class="info-container">
                  <p class="info__name">Diameter</p>
                  <p class="info__text">${rocket.diameter.meters} m</p>
                </div>
                <div class="info-container">
                  <p class="info__name">Height</p>
                  <p class="info__text">${rocket.height.meters} m</p>
                </div>
                <div class="info-container">
                  <p class="info__name">Mass</p>
                  <p class="info__text">${rocket.mass.kg} kg</p>
                </div>
              </div>
            </div>
            <div class="devider-container">
              <div class="devider-2">
                <div class="info-container">
                  <p class="info__name">Landing Legs</p>
                  <p class="info__text">${rocket.landing_legs.number}</p>
                </div>
                <div class="info-container">
                  <p class="info__name">Engines</p>
                  <p class="info__text">${rocket.engines.number}</p>
                </div>
                <div class="info-container">
                  <p class="info__name">Stages</p>
                  <p class="info__text">${rocket.stages}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="hr-break">
        </hr>
        <div class="card__description">
        <div class="accordion-item-content">
          <p>${rocket.description}</p>
          </div>
        </div>
      </div>`;
    });
}

const scrollToUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToUp.classList.add("active");
    } else {
        scrollToUp.classList.remove("active");
    }
});

scrollToUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        lef: 0,
        behavior: "smooth",
    });
});




<div class="card">
    <div class="card-img"
        style="background-image:url(https://images.unsplash.com/photo-1519176336903-04be58a477d2?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=eda05ddcb3154f39fd8ce88fdd44f531&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60);">
        <div class="overlay">
            <div class="overlay-content">
                <a href="#!">View Project</a>
            </div>
        </div>
    </div>
    <div class="card-content">
        <a href="#!">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
        </a>
    </div>
</div>




<img class="designImage" src="${rocket[i].flickr_images}" alt=""></img>