export default class Painter {
  #capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  createWeatherCard(weatherData, locale) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    weatherCard.innerHTML = `
      <h1 class="weather-location">
        ${weatherData.name},
        ${weatherData.country}
      </h1>
      <div class="weather-highlight">
        <div class="weather-temperature">
          ${
            locale.pref_celsius
              ? `<span class="value">${weatherData.temp_c}</span><span class="unit">&deg;C</span>`
              : `<span class="value">${weatherData.temp_f}</span><span class="unit">&deg;F</span>`
          } 
        </div>
        <div class="weather-info">
          <img src=${weatherData.icon}>
          <h2>${weatherData.text}</h2>
        </div>
      </div>
      </div>
    `;

    weatherCard.appendChild(this.createWeatherDetails(weatherData, locale));

    return weatherCard;
  }

  createWeatherDetails(weatherData, locale) {
    const weatherDetails = document.createElement("div");
    weatherDetails.classList.add("weather-details");

    Object.entries(weatherData.details).forEach(([title, value]) => {
      const detailCard = document.createElement("div");
      const detailTitle = document.createElement("div");
      const detailValue = document.createElement("div");
      const valueSpan = document.createElement("span");
      const unitSpan = document.createElement("span");

      detailCard.classList.add("detail-card");
      detailTitle.classList.add("detail-title");
      detailValue.classList.add("detail-value");
      valueSpan.classList.add("value");
      unitSpan.classList.add("unit");

      switch (title) {
        case "feelslike": {
          detailTitle.innerText = "Feels like";
          break;
        }
        default: {
          detailTitle.innerText = this.#capitalize(title);
          break;
        }
      }

      detailCard.appendChild(detailTitle);

      switch (title) {
        case "feelslike": {
          valueSpan.textContent = locale.pref_celsius
            ? value.feelslike_c
            : value.feelslike_f;
          break;
        }
        case "wind": {
          valueSpan.textContent = locale.pref_meters
            ? value.wind_kph
            : value.wind_mph;
          break;
        }
        default: {
          valueSpan.textContent = value;
          break;
        }
      }

      detailValue.appendChild(valueSpan);

      switch (title) {
        case "feelslike": {
          detailValue.classList.add("weather-temperature");
          unitSpan.innerHTML = `&deg;${locale.pref_celsius ? "C" : "F"}`;
          detailValue.appendChild(unitSpan);
          break;
        }
        case "wind": {
          detailValue.classList.add("weather-wind");
          unitSpan.innerText = `${locale.pref_meters ? "km/h " : "mph "}`;
          unitSpan.innerText += value.wind_dir;
          detailValue.appendChild(unitSpan);
          break;
        }
        case "humidity": {
          unitSpan.innerText = "%";
          detailValue.appendChild(unitSpan);
          break;
        }
      }

      detailCard.appendChild(detailValue);
      weatherDetails.appendChild(detailCard);
    });

    return weatherDetails;
  }
}