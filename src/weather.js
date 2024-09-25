import { determineIcon } from "./util";

export default class Weather {
  constructor() {
    // dont think I need one for my approach as a loop will determine the characteristics
    // of a given days weather
  }

  buildTodayCard(obj) {
    /* p's and divs created, assigned classes, innerText equal to properties from the weather object */
    const div = document.createElement('div');
    const icon = document.createElement('img');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const img = document.createElement('img');
    console.log(obj.days);
    determineIcon(obj.days[0].icon).then(function(icon) {
      img.src = icon.url;
    });

    document.querySelector('.weather-info').appendChild(img);
  }

  buildAheadCards(obj) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    
  }

  display() {
    document.querySelector('weather-info').innerHTML = "";
  }
}
