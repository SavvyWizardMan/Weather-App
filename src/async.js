export default async function getWeatherInfo(location) {
  try {
    const weatherInfo = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=EGMR3W2Z7U9XP6FCFD4U9Z88E&contentType=json`,
      {
        mode: "cors",
      },
    );
    const toJson = await weatherInfo.json();
    return toJson;
  } catch (e) {
    alert(e);
  }
}
