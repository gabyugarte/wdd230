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
  
  window.onload = function() {
    calculateWindChill();
  }
  