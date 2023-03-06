import { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    setLoading(true);
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  return (
      <div>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={getWeather}>Get Weather</button>
        {loading && <p>Loading...</p>}
        {weather && (
            <div>
              <p>City: {weather.name}</p>
              <p>Temperature: {weather.main.temp}</p>
              <p>Description: {weather.weather[0].description}</p>
            </div>
        )}
          <p>Env var : {process.env.OPEN_WEATHER_MAP_API_KEY || "Pas accessible côté client"}</p>
      </div>
  );
};

export default Weather;
