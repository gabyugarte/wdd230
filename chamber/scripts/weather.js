const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.description');
const windSpeed = document.querySelector('#wind-speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Torrelles de Foix,es&APPID=cc5a1d62fd55d167357c88a8dc585001';
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong> ${weatherData.wind.speed} km/h</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

  //Calculate windchill

function calculateWindChill() {
    let temperature = document.getElementById("current-temp").textContent;
    let windspeed = document.getElementById("wind-speed").textContent;
  
    if (temperature <= 50 && windspeed > 3) {
      let windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
      document.getElementById("windchill").textContent = windchill.toFixed(2) + "°F";
    } else {
      document.getElementById("windchill").textContent = "N/A";
    }
  }
   
  window.onload = function() {
    calculateWindChill();
  }
  