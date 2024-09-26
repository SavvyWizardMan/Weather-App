import { determineIcon } from "./util";

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
    p3.innerText = "Temperature: " + temp + "°";
    p4.innerText = "Humidity: " + humidity;
    p5.innerText = "Wind Speed: " + windspeed;

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

  buildAheadCards(obj) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  }
}
