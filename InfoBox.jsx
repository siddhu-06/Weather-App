import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk=";

  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormOutlinedIcon />;
    if (info.temp > 15) return <WbSunnyOutlinedIcon />;
    return <AcUnitIcon />;
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {getWeatherIcon()}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <p>Temperature = {info.temp}°C</p>
              <p>Feels Like = {info.feelsLike}°C</p>
              <p>Temp Min = {info.tempMin}°C</p>
              <p>Temp Max = {info.tempMax}°C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Weather = <i>{info.weather}</i></p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
