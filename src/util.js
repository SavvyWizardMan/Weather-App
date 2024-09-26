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
