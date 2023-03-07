
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&APPID=cc5a1d62fd55d167357c88a8dc585001';
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResultsHtml(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResultsHtml(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    // const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    // const desc = weatherData.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc);
    // captionDesc.textContent = desc;
  }

const cities = ['London,uk', 'New York,us', 'Sydney,au', 'Fairbanks,us', 'Torrelles de Foix,es'];
const apiKey = 'cc5a1d62fd55d167357c88a8dc585001';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherData = [];

async function fetchWeatherData(city) {
  const url = `${baseUrl}?q=${city}&APPID=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(await response.text());
  }
  const data = await response.json();
  weatherData.push(data);
}

async function fetchAllWeatherData() {
  try {
    await Promise.all(cities.map(fetchWeatherData));
    console.log(weatherData); // this is for testing the call
    displayResults(weatherData);
  } catch (error) {
    console.log(error);
  }
}

fetchAllWeatherData();

function displayResults(weatherData) {
  const resultsContainer = document.querySelector('#results-container');
  resultsContainer.innerHTML = '';


  weatherData.forEach((data) => {
    const city = data.name;
    const temperature = data.main.temp.toFixed(0);
    const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const card = document.createElement('div');
    card.classList.add('card');

    const header = document.createElement('h2');
    header.textContent = city;

    const temp = document.createElement('p');
    temp.innerHTML = `Temperature: <strong>${temperature}</strong> &deg;F`;

    const icon = document.createElement('img');
    icon.src = iconUrl;
    icon.alt = description;

    const caption = document.createElement('figcaption');
    caption.textContent = description;

    const figure = document.createElement('figure');
    figure.appendChild(icon);
    figure.appendChild(caption);

    card.appendChild(header);
    card.appendChild(temp);
    card.appendChild(figure);

    resultsContainer.appendChild(card);
  });
}
