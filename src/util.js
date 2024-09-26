export async function determineIcon(iconName) {
  try {
    const e = await fetch(
      `https://raw.githubusercontent.com/SavvyWizardMan/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${iconName}.png`,
      {
        mode: "cors",
      },
    );
    return e;
  } catch (err) {
    console.log("error when grabbing images");
  }
}

export const converts = {
    toCel: function(obj) {
      return ((obj - 32) / (9/5)).toFixed(1);
    },
    toKmh: function(obj) {
      return (obj * 1.609344).toFixed(1);
    },
  }
