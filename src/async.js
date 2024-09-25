export default async function getWeatherInfo(location) {
  try {
    const weatherInfo = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=EGMR3W2Z7U9XP6FCFD4U9Z88E&contentType=json&iconSet=icons2`,
      {
        mode: "cors",
      },
    );
    const toJson = await weatherInfo.json();
    return toJson;
  } catch (e) {
    alert("Not a valid location");
  }
}