import "./style.css";
import getWeatherInfo from "./async";
import Weather from "./weather";
import search from "./search.svg";

(function() {
  const input = document.querySelector('input');
  const form = document.querySelector('form');
  const img = document.querySelector('img');

  img.src = search;

  form.addEventListener('submit', (e) => {
    e.preventDefault()
  });

  input.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
      const weather = getWeatherInfo(input.value);
      weather.then(function(data) {
        const weatherCard = new Weather;
        weatherCard.buildTodayCard(data);
      });
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