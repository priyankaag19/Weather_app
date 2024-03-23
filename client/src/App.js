import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/weather/${city}`); // Update URL
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Weather App</h1>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city" 
        />
        <button 
          className="btn btn-primary" 
          type="button" 
          onClick={getWeatherData}
        >
          Get Weather
        </button>
      </div>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
