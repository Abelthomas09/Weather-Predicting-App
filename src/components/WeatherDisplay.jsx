import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;
  const iconCode = weather[0].icon;
  const description = weather[0].description;

  return (
    <div className="weather-display">
      <h2 className="city-name">{name}</h2>
      <WeatherIcon iconCode={iconCode} description={description} />
      <p className="temperature">Temperature: {main.temp}°C</p>
      <p className="condition">Condition: {description}</p>
      <p className="wind">Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
