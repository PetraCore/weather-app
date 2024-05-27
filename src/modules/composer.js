import Weather from "./weather";
import Painter from "./painter";

export default class Composer {
  #weather = new Weather();
  #painter = new Painter();
  #weatherContainer = document.querySelector("#weatherContainer");
  #locale = {
    pref_celsius: true,
    pref_meters: true,
  };

  clearWeather() {
    this.#weatherContainer.innerHTML = "";
  }

  async displayWeather(query) {
    const forecast = await this.#weather.fetchData(query);
    console.log(forecast);

    const weatherCard = this.#painter.createWeatherCard(forecast, this.#locale);
    this.clearWeather();
    this.#weatherContainer.appendChild(weatherCard);
  }

  activateSearchBox() {
    const search = document.querySelector("#search");
    const searchButton = document.querySelector("#searchButton");

    search.addEventListener("keydown", ({ key }) => {
      if (key === "Enter") {
        this.displayWeather(search.value);
      }
    });

    searchButton.addEventListener("click", () => {
      this.displayWeather(search.value);
    });
  }

  async initApp() {
    this.activateSearchBox();
    this.displayWeather("London");
  }
}
