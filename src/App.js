import React from 'react';
import Header from './Components/Header';
import InputCity from './Components/InputCity';
import ShowWeather from './Components/ShowWeather';
import './style.css';
import { useState, useEffect} from 'react';
export default function App() {
    const [city, setCity] = useState('Seattle');
    const [weatherData, setWeatherData] = useState({});
    const [error, setError] = useState(false);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`;

    async function fetchWeather(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.cod === "404") {
      setError(true);
    } else {
      setWeatherData(data);
    }
  }

    function submitHandler(cityName) {
        console.log(cityName)
        setError(false)
        setCity(cityName)
    }

    useEffect(()=> {
        fetchWeather(URL);
    }, [URL])
    

    return (
        <>
        <Header />
        <InputCity onSubmitHandler={submitHandler} />
        {error ? <h3 className="error">No data found</h3> : <ShowWeather weather = {weatherData}/>}
        </>
    )
}