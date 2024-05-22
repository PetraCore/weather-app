export default class Weather {
  async fetchData(query) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=b0e2ea7c094f42388ff111529241605&q=${query}`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  }
}
