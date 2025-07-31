import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e78de7d7e2a59cc98a4c4d5ecf44bb33";

  let [city, setCity] = useState("Delhi");
  let [err, setErr] = useState(false);

   
  const getWeather = async (city) => {
    const URL = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      let response = await fetch(URL);
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error("City not found");
      }

      let result = {
        City: city,
        Temp: jsonResponse.main.temp,
        TempMin: jsonResponse.main.temp_min,
        TempMax: jsonResponse.main.temp_max,
        Humidity: jsonResponse.main.humidity,
        FeelsLike: jsonResponse.main.feels_like,
        Weather: jsonResponse.weather[0].description
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const defaultInfo = await getWeather("Delhi");
        updateInfo(defaultInfo);
        setCity("");
        setErr(false);
      } catch (err) {
        setErr(true);
      }
    };

    fetchData();
  }, []);

  
  const handlechange = (e) => {
    setCity(e.target.value);
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let info = await getWeather(city);
      updateInfo(info);
      setCity("");
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  };

  
  useEffect(() => {
    if (err) {
      alert("City not found here!");
      setCity("");
      setErr(false);
    }
  }, [err]);



      const iconStyle = {
        fontSize: '3rem',
        '@media (min-width:1440px)': {
          fontSize: '5rem',
        },
        '@media (min-width:2560px)': {
          fontSize: '7rem',
        },
      };
      
      
      
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
       
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
          sx={{
            width: '250px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '9px',
            },
            '& .MuiInputBase-input': {
              fontSize: '1rem',
              '@media (min-width:1024px)': {
                fontSize: '1.5rem',
              },
              '@media (min-width:1440px)': {
                fontSize: '2rem',
              },
              '@media (min-width:2560px)': {
                fontSize: '3rem',
              },
            },
            '@media (min-width:1024px)': {
              width: '20rem',
            },
            '@media (min-width:1440px)': {
              width: '28rem',
            },
            '@media (min-width:2560px)': {
              width: '48rem',
            },
          }}
        />

        <br /><br />

        
        <Button
          variant="contained"
          type="submit"
          endIcon={
            <SearchIcon
             sx= {iconStyle}
            />
          }
          sx={{
            backgroundColor: 'rgba(58, 63, 156, 1)',
            fontSize: '1rem',
            height: '3rem',
            width: '12rem',
            borderRadius: '10px',
            '@media (min-width:1024px)': {
              fontSize: '1.2rem',
              width: '15rem',
              height: '3.3rem',
            },
            '@media (min-width:1440px)': {
              fontSize: '1.6rem',
              width: '19rem',
              height: '4.3rem',
            },
            '@media (min-width:2560px)': {
              fontSize: '3rem',
              width: '40rem',
              height: '7rem',
              marginBottom: '2rem',
            },
            '&:hover': {
              backgroundColor: 'rgba(64, 68, 144, 1)',
            },
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
