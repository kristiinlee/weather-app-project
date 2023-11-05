function showcurrentWeather(response) {
    let currentTemperature = document.querySelector("#real-temp");
    let temperature = Math.round(response.data.main.temp);
    currentTemperature.innerHTML = `${temperature}`;
  
    let currentHumidity = document.querySelector("#real-hum");
    let humidity = Math.round(response.data.main.humidity);
    currentHumidity.innerHTML = `${humidity}`;
  
    let currentWindspeed = document.querySelector("#real-wind");
    let windspeed = Math.round(response.data.wind.speed);
    currentWindspeed.innerHTML = `${windspeed}`;
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiKey = "c7a9d6b6853751af18c01001aed69a27";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showcurrentWeather);
  }
  
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  let button = document.querySelector("button");
  button.addEventListener("click", getCurrentPosition);
  
  function explore(event) {
    event.preventDefault();
    let searchCity = document.querySelector("#location");
  
    let searchCityInput = document.querySelector("#searchCityInput");
    searchCity.innerHTML = `${searchCityInput.value}`;
  
    let units = "metric";
    let apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityInput.value}&appid=${apiKey}&units=${units}`;
  
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showcurrentWeather);
  }
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let p = document.querySelector("#the-day");
  let hrs = date.getHours();
  let min = date.getMinutes();
  let dai = date.getDay();
  p.innerHTML = `${days[dai]} ${hrs}:${min} `;
  
  let search = document.querySelector("#search");
  function city(event) {
    event.preventDefault();
    let name = document.querySelector("h1");
    let town = document.querySelector("#searchCityInput");
  
    if (town !== "") {
      name.innerHTML = `${town.value}`;
    } else {
      alert("Insert a City name");
    }
  }
  
  search.addEventListener("click", explore);
  search.addEventListener("click", city);
  
  let celsius = document.querySelector(".c");
  let fahrenheit = document.querySelector(".f");
  
  function toCelsius(event) {
    event.preventDefault();
    let temperature = document.querySelector(".temp");
    temperature.value = ((69 - 32) * 5) / 9;
    temperature.innerHTML = `Currently: ${Math.floor(temperature.value)}C°`;
  }
  function toFahrenheit(event) {
    event.preventDefault();
    let temperature = document.querySelector(".temp");
    temperature.value = (21 * 9) / 5 + 32;
    temperature.innerHTML = `Currently: ${Math.floor(temperature.value)}F°`;
  }
  celsius.addEventListener("click", toCelsius);
  fahrenheit.addEventListener("click", toFahrenheit);
  