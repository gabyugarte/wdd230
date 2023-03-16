// Obtener la referencia al elemento HTML donde se mostrarán los negocios
const businessList = document.querySelector('.business-list-index');

// Cargar los datos desde el archivo JSON
fetch('data2.json')
  .then(response => response.json())
  .then(data2 => {
    // Mostrar los primeros tres negocios en el elemento HTML
    for (let i = 0; i < 3; i++) {
      // Crear un elemento <div> con la clase "business-card" para mostrar la información del negocio
      const businessDiv = document.createElement('div');
      businessDiv.classList.add('business-card');
      
      // Obtener los datos del negocio
      const businessName = data2[i].name;
      const businessAddress = data2[i].address;
      const businessPhone = data2[i].phone;
      const businessWebsite = data2[i].website;
      const businessImage = data2[i].image;
      const businessMembership = data2[i].membership;
      
      // Crear el HTML para mostrar la información del negocio
      businessDiv.innerHTML = `
        <h2>${businessName}</h2>
        <p>${businessAddress}</p>
        <p>${businessPhone}</p>
        <p>${businessWebsite}</p>
        <img src="${businessImage}" alt="${businessName}" />
        <p>${businessMembership}</p>
      `;
      
      // Añadir el elemento <div> al elemento HTML donde se mostrarán los negocios
      businessList.appendChild(businessDiv);
    }
  })
  .catch(error => console.error(error));






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
