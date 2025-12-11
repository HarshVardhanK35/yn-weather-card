const url = "https://demo6009285.mockable.io/weather_data";

let weatherData = null;

const dailyMax = document.querySelectorAll(".day-temp-max");
const dailyMin = document.querySelectorAll(".day-temp-min");
const dayIcons = document.querySelectorAll(".day-icon");

// console.log(dayIcons)

async function getWeatherData() {
  await fetch(url)
    .then((res) => {
      // console.log(res)
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      weatherData = data.response[0];
      return weatherData;
    });
}

getWeatherData().then(() => {
  // console.log(weatherData);

  document.querySelector(".city").textContent = weatherData.place.name;
  document.querySelector(".city-temp").textContent =
    weatherData.periods[0].maxTempC + "°";

  const weatherToday = weatherData.periods[0].weather;
  console.log(weatherToday);

  const periods = weatherData.periods;
  console.log(periods);
  // console.log(periods[0].maxTempC);

  for (let i = 0; i < 5; i++) {
    dailyMax[i].textContent = `${periods[i].maxTempC}°`;
    dailyMin[i].textContent = `${periods[i].minTempC}°`;
  }
});
