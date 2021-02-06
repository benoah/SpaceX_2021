
<div class="container">
    <div class="row">
        <div class="col-sm">
            <div class="pro-img-details">
                <img src="${details.flickr_images[0]}" alt="">
                </div>
                <div class="pro-img-list">
                    <a href="#">
                        <img src="${details.flickr_images[1]}" alt="">
                    </a>
                        <a href="#">
                            <img src="${details.flickr_images[2]}" alt="">
                    </a>
                            <a href="#">
                                <img src="${details.flickr_images[3]}" alt="">
                    </a>
                                <a href="#">
                                    <img src="${details.flickr_images[4]}" alt="">
                    </a>
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

