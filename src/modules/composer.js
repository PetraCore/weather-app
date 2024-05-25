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

  async displayWeather(query) {
    const forecast = await this.#weather.fetchData(query);
    console.log(forecast);

    const weatherCard = this.#painter.createWeatherCard(forecast, this.#locale);
    this.#weatherContainer.appendChild(weatherCard);
  }

  async initApp() {
    this.displayWeather("London");
  }
}
