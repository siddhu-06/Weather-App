import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7f917510f863a0b84a5d9e24bb2e953d";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let info = await getWeatherInfo();
      setCity("");
      updateInfo(info);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" required />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{ color: "red" }}>No Such Place Exists</p>}
      </form>
    </div>
  );
}
