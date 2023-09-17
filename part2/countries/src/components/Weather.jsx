import { useState } from "react"
import getWeather from "../services/weather"
import { useEffect } from "react"

const Weather = ({city}) => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        getWeather(city).then(weatherData => {
            setWeatherData(weatherData)
        })
    }, [])

    if (!weatherData) return

    const icon = weatherData.weather[0].icon

    return (
        <div>
            <h3>Weather in {city}</h3>
            temperature {weatherData.main.temp} Celcius
            <br />
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <br />
            wind {weatherData.wind.speed} m/s
        </div>
    )
}

export default Weather