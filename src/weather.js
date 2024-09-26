import { determineIcon } from "./util";

export default class Weather {
  constructor() {
  }

  buildTodayCard(obj) {
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
      obj.resolvedAddress +
      " " +
      new Date().toLocaleString("en-US", { timeZone: obj.timezone });
    p2.innerText = obj.description;
    p3.innerText = "Temperature: " + obj.currentConditions.temp;
    p4.innerText = "Humidity: " + obj.currentConditions.humidity;
    p5.innerText = "Wind Speed: " + obj.currentConditions.windspeed + "mph";

    console.log(obj);
    determineIcon(obj.currentConditions.icon).then(function (i) {
      icons.src = i.url;
    });
    icons.alt = obj.currentConditions.icon;
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

  buildAheadCards(obj) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  }
}
