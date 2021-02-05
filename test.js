for (let i = 0; i < rockets.length; i++) {
    console.log("image", rockets[i].flickr_images[0]);
    console.log(rockets[i].flickr_images[0] === rockets[i].flickr_images[0]);

    if (rockets[i].flickr_images[0] === "https://i.imgur.com/DaCfMsj.jpg") {
        // continue will skip the remaining code and return to the top of the loop
        rockets[i].flickr_images = "./img/altinay-dinc-LluELtL5mK4-unsplash.jpg"
    }
    // add the new HTML string to the existing HTML string
    cardsContainer.innerHTML += `

  <div class="col-sm  ">
    <div class="card-body">
    <img class="card-img-top" src="${rockets[i].flickr_images[0]}" alt="Card image cap">
     <h5 class="card-title">${rockets[i].name}</h5>
     <p class="card-text">${rockets[i].description}</p>
      <a href="#" class="btn btn-primary"> Details</a>
      </div>
  </div>

`;
} <div class="col-sm d-flex align-items-stretch ">
    <div class="card-body">
        <img src="${img}" class="img-fluid" alt="Responsive image">
            <h5 class="card-title">${rocket.name}</h5>
            <p class="card-text">${rocket.description}</p>
            <a href="#" class="btn btn-primary"> Details</a>
</div>
    </div>
