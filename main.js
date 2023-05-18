const apiKey = '56199078fa6d422c940101623231805';
const weatherContainer = document.querySelector(".weather-container");
const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    const searchCity = searchBar.value.trim();
    getWeather(searchCity);
});

function getWeather(searchCity) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCity}&aqi=no`)
        .then((response) => response.json())
        .then((data) => renderWeather(data));
}

function renderWeather(weather) {
    const country = weather.location.country;
    const city = weather.location.name;
    const date = weather.location.localtime;
    const tempC = weather.current.temp_c;
    const icon = weather.current.condition.icon;
    const windKph = weather.current.wind_kph;
    const humidity = weather.current.humidity;
    const feelsLike = weather.current.feelslike_c;
    const uv = weather.current.uv;

    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <span>Country: ${country}</span>
        <span>City: ${city}</span>
        <span>Local Time: ${date}</span>
        <span>Temperature: ${tempC}</span>
        <img src="${icon}" alt="Weather Icon">
        <span>Wind Speed: ${windKph}</span>
        <span>Humidity: ${humidity}</span>
        <span>Feels Like: ${feelsLike}</span>
        <span>UV: ${uv}</span>
    `;
   
        
}