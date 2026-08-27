const apiKey = "434434f7f22c3de94e562eff56a770d7";
const cityurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(cityurl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "clouds"){
    wetherIcon.src = "img/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "img/clear.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
          checkWeather(searchBox.value);
    }
});
checkWeather("Delhi");
