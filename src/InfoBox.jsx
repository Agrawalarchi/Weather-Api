
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import "./InfoBox.css";


export default function InfoBox({info}){


 let setIcon = "";
  if (info.Humidity > 80) {
    setIcon=<ThunderstormIcon/>;
  }else if (info.Humidity > 70 ) {
   setIcon= <CloudIcon/>
  }else if (info.Temp > 25) {
    setIcon = <SunnyIcon/>;
  } else {
    setIcon =<AcUnitIcon/>;
  }
 

  
    return(
        <div className="InfoBox">
            <h2 className="city-name">{info.City} {setIcon}</h2>
              <h2>   {info.Temp}&deg;C </h2>
                 <p>Humidity : {info.Humidity}</p>
                 <p>Min Temp : {info.TempMin}&deg;C</p>
                  <p>Max Temp : {info.TempMax}&deg;C</p>
                  <p>Weather can be described as <i style={{color:"blue"}}>{info.Weather}</i> and feels like <i style={{color:"blue"}}>{info.FeelsLike}&deg;C</i> </p>
               
            </div>
      
    )
} 