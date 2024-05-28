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
  #lastQuery = "Brussels";
  #forecast = null;

  clearWeather() {
    this.#weatherContainer.innerHTML = "";
  }

  #displayLoadingIndicator() {
    const loadingIndicator = this.#painter.createLoadingIndicator();
    this.clearWeather();
    this.#weatherContainer.appendChild(loadingIndicator);
  }

  #displayError(message) {
    const errorMessage = this.#painter.createErrorMessage(message);
    this.clearWeather();
    this.#weatherContainer.appendChild(errorMessage);
  }

  async displayWeather(query) {
    if (query === "") return;
    try {
      this.#displayLoadingIndicator();

      this.#forecast = await this.#weather.fetchData(query);
      const weatherCard = this.#painter.createWeatherCard(
        this.#forecast,
        this.#locale
      );

      this.clearWeather();
      this.#weatherContainer.appendChild(weatherCard);

      localStorage.setItem("lastQuery", query);
    } catch (error) {
      this.#displayError(error);
    }
  }

  reloadWeather() {
    const weatherCard = this.#painter.createWeatherCard(
      this.#forecast,
      this.#locale
    );

    this.clearWeather();
    this.#weatherContainer.appendChild(weatherCard);
  }

  displayOptions() {
    const options = document.querySelector(".options");
    const temperatureSwitch = this.#painter.createSwitchOption(
      "temperatureSwitch",
      "&deg;C",
      "&deg;F",
      !this.#locale.pref_celsius
    );
    const lengthSwitch = this.#painter.createSwitchOption(
      "lengthSwitch",
      "m",
      "mi",
      !this.#locale.pref_meters
    );

    temperatureSwitch.addEventListener("click", () => {
      this.#painter.toggleSwitchOption(temperatureSwitch);
      this.#locale.pref_celsius = !this.#locale.pref_celsius;
      this.reloadWeather();
      localStorage.setItem("locale", JSON.stringify(this.#locale));
    });
    lengthSwitch.addEventListener("click", () => {
      this.#painter.toggleSwitchOption(lengthSwitch);
      this.#locale.pref_meters = !this.#locale.pref_meters;
      this.reloadWeather();
      localStorage.setItem("locale", JSON.stringify(this.#locale));
    });

    options.appendChild(temperatureSwitch);
    options.appendChild(lengthSwitch);
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

  loadStorage() {
    const cachedLocale = JSON.parse(localStorage.getItem("locale"));
    const cachedQuery = localStorage.getItem("lastQuery");

    if (cachedLocale) this.#locale = cachedLocale;
    if (cachedQuery) this.#lastQuery = cachedQuery;
  }

  async initApp() {
    this.loadStorage();
    this.activateSearchBox();
    this.displayOptions();
    this.displayWeather(this.#lastQuery);
  }
}
