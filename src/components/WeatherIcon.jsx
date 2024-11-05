import React from 'react';

const WeatherIcon = ({ iconCode, description }) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt={description}
      className="weather-icon"
    />
  );
};

export default WeatherIcon;
