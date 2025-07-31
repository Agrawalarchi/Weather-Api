import "./WeatherBackPage.css"
import InfoBox from "./InfoBox";
import { useState } from "react";
import SearchBox from "./SearchBox"
export default function WeatherBackPage(){
let [weatherInfo,setWeatherInfo]=useState({
        City:"",
        FeelsLike: "",
        Humidity: "",
        Temp: "",
        TempMax: "",
        TempMin: "",
        Weather: "",
   
    })
    
    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

return(
    <div className="WeatherBackPage" >
        <SearchBox updateInfo={updateInfo}/>

        <InfoBox info={weatherInfo}/>
    </div>
)
}