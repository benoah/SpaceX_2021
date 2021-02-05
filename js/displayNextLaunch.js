// function that is going to display the first future launch
export default function displayNextLaunch(data) {
  console.log("data", data);
  // choosing the element
  const nextLaunchContainer = document.querySelector(".next-launch");
  // put the time data in a variabel
  let launchDate = new Date(data.date_local),
    // Put the Year in a variabel
    year = launchDate.getFullYear(),
    // Put the  date in a variabel
    // Put the month in a variabel
    month = launchDate.getMonth() + 1;
  console.log("month", month);
  // Get the month name
  let options = { month: "long" };
  // Getting the day
  let today = new Date();
  let hours = today.getHours();

  //console.log(data);

  // console.log(new Intl.DateTimeFormat('en-US', options).format(month));
  // console.log("data", data.details);
  // console.log("date", date);
  // console.log("month", month);
  // console.log("today", today);
  // console.log("year", year);
  nextLaunchContainer.innerHTML = `  
    <article class="jumbotron  container">
      <div class="row">
        <div id="special" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <!-- //JUMBOTRON - Header -->
          <header class="jumbotronHeader">
            <!-- //JUMBOTRON - Category -->
            <small class="jumbotronCategory" id="jumbotronCategory">
            ${today > launchDate.getTime() ? "Last Launch Was:" : "Next Launch"}
            </small>
             <!-- JUMBOTRON - Category// -->
             <!-- //JUMBOTRON - Title -->
            <h1 class="jumbotronTitle" id="jumbotronTitle">
            ${new Intl.DateTimeFormat("en-US", options).format(
    month
  )} ${year}</h1>
            <h2>${data.name}</h2>
            <br>
            <footer class="jumbotronFooter" id="jumbotronFooter">
            <a class="btn btn-primary" href="#" role="button">Start at ${hours}pm</a>
          </footer><!-- JUMBOTRON - Footer// -->
            <!-- JUMBOTRON - Title// -->
          </header>
          <!-- JUMBOTRON - Header// -->
          <!-- //JUMBOTRON - Body -->
          <div class="jumbotronBody" id="jumbotronBody">
            <p>${data.details}</p>
          </div>
          <!-- JUMBOTRON - Body// -->
          <!-- //JUMBOTRON - Footer -->
        </div>
      </div>
  </div>
  <!-- JUMBOTRON - Container// -->
  <!-- JUMBOTRON// -->
</article>`;
}
