import LoadingIndicator from "../assets/loading.gif";

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

  createErrorMessage(message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = message;
    return errorMessage;
  }

  createLoadingIndicator() {
    const loadingIndicator = document.createElement("div");
    loadingIndicator.classList.add("loading-indicator");

    const loadingImage = document.createElement("img");
    loadingImage.src = LoadingIndicator;
    loadingIndicator.appendChild(loadingImage);

    return loadingIndicator;
  }

  createSwitchOption(id, option1Label, option2Label, isSwitched = false) {
    const switchOption = document.createElement("div");
    switchOption.classList.add("switch");
    switchOption.id = id;
    switchOption.tabIndex = 0;

    const option1 = document.createElement("div");
    option1.classList.add("state");
    option1.innerHTML = option1Label;

    const option2 = document.createElement("div");
    option2.classList.add("state");
    option2.innerHTML = option2Label;

    if (isSwitched) {
      option2.classList.add("active");
    } else {
      option1.classList.add("active");
    }

    switchOption.appendChild(option1);
    switchOption.appendChild(option2);

    return switchOption;
  }

  toggleSwitchOption(option) {
    if (!option.classList.contains("switch")) {
      console.error(
        "Provided element does not support toggling! Ignoring request."
      );
      return;
    }

    const inactive = option.querySelector(":not(.active)");
    const active = option.querySelector(".active");

    inactive.classList.add("active");
    active.classList.remove("active");

    return option;
  }
}
