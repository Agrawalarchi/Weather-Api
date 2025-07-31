import { useState } from "react";
import "./WeatherApp.css";
import WeatherFrontPage from "./WeatherFrontPage";
import WeatherBackPage from "./WeatherBackPage";

export default function WeatherApp() {
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="weatherApp" style={{textAlign:"center", display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h2  className="heading" >Weather Widget</h2>
      {showFront ? (
        <WeatherFrontPage onStart={() => setShowFront(false)} />
      ) : (
        <WeatherBackPage />
      )}
    </div>
  );
}
    