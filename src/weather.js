import { determineIcon } from "./util";
import { converts } from "./util";

export default class Weather {
  constructor() {
  }

  buildTodayCard(temp, humidity, windspeed, timezone, resolvedAddress, icon, description) {
    document.querySelector(".weather-info").innerHTML = "";

    const div = document.createElement("div");
    const desc = document.createElement("div");
    const info = document.createElement("div");
    const icons = document.createElement("img");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");

    div.classList.add("today-box");
    desc.classList.add("inner-today-box");
    info.classList.add("info-today-box");
    p.innerText =
      resolvedAddress +
      " " +
      new Date().toLocaleString("en-US", { timeZone: timezone });
    p2.innerText = description;
    // get the state of the CorF button ig and use that to determine units and conversions
    // only way I can think of preserving the users choice of units
    let tempWord = "F";
    let speedWord = "mph";
    if (document.querySelector('.C').classList.contains('bold')) {
      temp = converts.toCel(temp);
      windspeed = converts.toKmh(windspeed);
      tempWord = "C";
      speedWord = "kmh";
    }
    p3.innerText = "Temperature: " + temp + "°" + tempWord;
    p4.innerText = "Humidity: " + humidity + "%";
    p5.innerText = "Wind Speed: " + windspeed + speedWord;

    determineIcon(icon).then(function (i) {
      icons.src = i.url;
    });
    icons.alt = icon;
    icons.classList.add("today-icon");

    div.appendChild(icons);
    desc.appendChild(p);
    desc.appendChild(p2);
    div.appendChild(desc);
    info.appendChild(p3);
    info.appendChild(p4);
    info.appendChild(p5);
    div.appendChild(info);
    document.querySelector(".weather-info").appendChild(div);
  }

  buildWeeklyCards(obj) {
    const div = document.createElement("div");

    for (let i = 1; i < 8; i++) {
     const inner = document.createElement('div');
     const icons = document.createElement('img');
     const p = document.createElement("p");
     const p2 = document.createElement("p");
     const p3 = document.createElement("p"); 
     const p4 = document.createElement("p");

     div.classList.add('weekly-box');
     inner.classList.add('inner-weekly-card');

      determineIcon(obj.days[i].icon).then(function(icon) {
        icons.src = icon.url;
      });

    let tempWord = "F";
    let temp = obj.days[i].temp;
    let windspeed = obj.days[i].windspeed;
    let speedWord = "mph";
    if (document.querySelector('.C').classList.contains('bold')) {
      temp = converts.toCel(temp);
      windspeed = converts.toKmh(windspeed);
      tempWord = "C";
      speedWord = "kmh";
    }

     p.innerText = obj.days[i].datetime;
     p2.innerText = "Temperature: " + temp + "°" + tempWord;
     p3.innerText = "Humidity: " + obj.days[i].humidity + "%";
     p4.innerText = "Wind Speed: " + windspeed + speedWord;

     inner.appendChild(p);
     inner.appendChild(icons);
     inner.appendChild(p2);
     inner.appendChild(p3);
     inner.appendChild(p4);

     div.appendChild(inner);

    }

    document.querySelector('.weather-info').appendChild(div);
  }
}
