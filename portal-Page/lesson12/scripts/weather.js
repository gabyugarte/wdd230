const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.description');
const windSpeed = document.querySelector('#wind-speed');
const range = document.querySelector('#range');
const humidity = document.querySelector('#humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Santa Monica,US&APPID=cc5a1d62fd55d167357c88a8dc585001';
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

  function  displayResults(data) {
    currentTemp.innerHTML = toCelsius(data.main.temp);
    // windSpeed.innerHTML = `<strong> ${data.wind.speed} km/h</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description.toUpperCase();
    // range.innerHTML = `<strong> ${toCelsius(data.main.temp_max)}C / ${toCelsius(data.main.temp_min)}C</strong>`;
    humidity.innerHTML = data.main.humidity;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
function toCelsius(kelvin){
  return Math.round(kelvin - 273.15);
}