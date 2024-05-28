/**
 * This module directly communicates with the Weather API and processes
 * received data for higher-level modules.
 */

export default class Weather {
  async fetchData(query) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=b0e2ea7c094f42388ff111529241605&q=${query}`,
      { mode: "cors" }
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return this.processData(data);
  }

  processData(data) {
    const location = data.location;
    const current = data.current;

    return {
      name: location.name,
      country: location.country,
      text: current.condition.text,
      icon: current.condition.icon,
      temp_c: current.temp_c,
      temp_f: current.temp_f,
      details: {
        feelslike: {
          feelslike_c: current.feelslike_c,
          feelslike_f: current.feelslike_f,
        },
        humidity: current.humidity,
        wind: {
          wind_kph: current.wind_kph,
          wind_mph: current.wind_mph,
          wind_dir: current.wind_dir,
        },
      },
    };
  }
}
