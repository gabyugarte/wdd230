function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;
 //footer year
const myYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = myYear;

//Show date
function showDate() {
  var date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var newDate = date.toLocaleDateString('en-US', options);
  document.getElementById("datetime").innerHTML = newDate;
}

  //Last updated

let text = document.lastModified;
document.getElementById("demo").innerHTML = text;

//Banner

const banner = document.getElementById("banner");
const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2) {
  banner.style.display = "block";
}

//Calculate windchill

function calculateWindChill() {
  let temperature = document.getElementById("temperature").textContent;
  let windspeed = document.getElementById("windspeed").textContent;

  if (temperature <= 50 && windspeed > 3) {
    let windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    document.getElementById("windchill").textContent = windchill.toFixed(2) + "°F";
  } else {
    document.getElementById("windchill").textContent = "N/A";
  }
}

// window.onload = function() {
//   calculateWindChill();
// }
