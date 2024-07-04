import React from 'react';
import { useState, useEffect } from 'react' 

export default function ShowWeather({ weather }) {
    const [dynamicBackground, setDynamicBackground] = useState("");
  const city = weather.name;
  const country = weather.sys ? weather.sys.country : null;
  const temperature = weather.main ? weather.main.temp : null;
  const pressure = weather.main ? weather.main.pressure : null;
  const visibility =  weather ? weather.visibility : null;
  const humidity = weather.main ? weather.main.humidity : null;
  const clouds =  weather.clouds ? weather.clouds.all : null;

  // Values in standard units

  const pressureInAtm = (pressure / 1000).toFixed(2);
  const tempInCelcius = (temperature / 10).toFixed(2);
  const visibilityInKM = (visibility / 1000).toFixed(2);

  const dynamicBackgroundColor = (temp) => {
    if (temp < 10) {
      setDynamicBackground("#bbeafa");
    }
    if (temp > 10 && temp <= 30) {
      setDynamicBackground("#fcfa5b");
    }

    if (temp > 30) {
      setDynamicBackground(" #ff512f");
    }
  };

  //  useEffect to call dynamicBackgroundColor function
  useEffect(() => {
    dynamicBackgroundColor(tempInCelcius);
  }, [tempInCelcius]);


  return (
    <React.Fragment>
      <div className="showWeather">
        <div className="weather_main" style={{ background: dynamicBackground }} >
          <h1 className="weather_heading">
            {city} <br /> <span> {country}</span>
          </h1>
          <h3 className="temp">Temperature: {tempInCelcius} C</h3>
          <hr />
          <div className="weatherData">
            <p>
              Pressure <br /> {pressureInAtm} atm{" "}
            </p>
            <p>
              Visibility <br /> {visibilityInKM} Km
            </p>
          </div>
          <div className="weatherData">
            <p>
              Humidity: <br /> {humidity}%{" "}
            </p>
            <p>
              Clouds: <br /> {clouds} %{" "}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
}