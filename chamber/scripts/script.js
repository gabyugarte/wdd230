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
      // Lazy loading images
      document.addEventListener("DOMContentLoaded", function() {
        var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
    
        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.add("lazy-loaded");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });
    
            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            lazyImages.forEach(function(lazyImage) {
                lazyImage.src = lazyImage.dataset.src;
            });
        }
    });

      // Local storage for time between visits
      const lastVisit = localStorage.getItem("lastVisit");
      if (lastVisit) {
        const daysSinceLastVisit = Math.round(
          (new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24)
        );
        const visitMessage = `Welcome back! It's been ${daysSinceLastVisit} days since your last visit.`;
        const visitElement = document.querySelector("#visit-message");
        visitElement.innerHTML = visitMessage;
      }
      localStorage.setItem("lastVisit", new Date());

// date hidden from form
      const now = new Date();
const dateTime = now.toLocaleString();

let hiddenField = document.createElement("input");
hiddenField.setAttribute("type", "hidden");
hiddenField.setAttribute("id", "dateTime");
hiddenField.setAttribute("name", "dateTime");
hiddenField.setAttribute("value", dateTime);
document.body.appendChild(hiddenField);

