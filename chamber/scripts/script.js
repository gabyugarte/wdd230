function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

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