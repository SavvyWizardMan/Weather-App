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
    console.log(err);
  }
}

export const converts = {
    toFah: function(obj) {
      return ((obj * 9/5) + 32).toFixed(2);
    },
    toCel: function(obj) {
      return ((obj - 32) / (9/5)).toFixed(2);
    },
    toMph: function(obj) {
      return (obj * 0.621371).toFixed(2);
    },
    toKmh: function(obj) {
      return (obj * 1.609344).toFixed(2);
    },
  }
