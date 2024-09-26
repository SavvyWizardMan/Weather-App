import "./style.css";
import getWeatherInfo from "./async";
import Weather from "./weather";
import search from "./search.svg";
import { converts } from "./util";

(function () {
  const input = document.querySelector("input");
  const button = document.querySelector('.search');
  const CorF = document.querySelector(".CorF");
  const form = document.querySelector("form");
  const img = document.querySelector("img");

  img.src = search;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  button.addEventListener('click', () => {
    const weather = getWeatherInfo(input.value);
      weather
        .then(function (data) {
          const weatherCard = new Weather();
          const today = data.currentConditions;
          weatherCard.buildTodayCard(today.temp, today.humidity, today.windspeed, data.timezone, data.resolvedAddress, today.icon, data.description);
        })
        .catch(function (error) {
          alert("invalid location");
          document.querySelector(".weather-info").innerHTML = "";
        });
  });

  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      const weather = getWeatherInfo(input.value);
      weather
        .then(function (data) {
          const weatherCard = new Weather();
          const today = data.currentConditions;
          weatherCard.buildTodayCard(today.temp, today.humidity, today.windspeed, data.timezone, data.resolvedAddress, today.icon, data.description);
        })
        .catch(function (error) {
          alert("invalid location");
        });
    }
  });

  const f = document.querySelector('.F');
  const c = document.querySelector('.C');
  CorF.addEventListener('click', () => {
    if (document.querySelector('.weather-info').innerHTML === "") {
      alert('enter a location first');
      return;
    }
    if (f.classList.contains('bold')) {
      f.classList.remove('bold');
      c.classList.add('bold');
    } else {
      c.classList.remove('bold');
      f.classList.add('bold');
    }
  });
  /* 
        input event listener (keydown)
          - make it call getWeatherInfo with input.value ass param and assign the call to var
          - pass properties of var to Weather class
        button event listener
          - basically do the same as input
        additional fancy sthuff
    */
})();
