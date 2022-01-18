import React from 'react'

const Weather = ({ name, wind, weather, main }: any) => {

  const { temp, humidity } = main
  const { speed } = wind
  const {description} = weather[0]
  
  return (
    <div className="weather-container">
            <h1 className="city">Weather In: {name}</h1>
            <h2 className="temp">Temp: {temp}° c</h2>
            <h2 className="description">{description}</h2>
            <h3 className="humidity">humidity:{humidity}</h3>
            <h3 className="wind">wind speed: {speed} km/h</h3>
    </div>

  )
}

export default Weather
