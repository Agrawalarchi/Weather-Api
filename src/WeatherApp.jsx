import { useState } from "react";
import WeatherFrontPage from "./WeatherFrontPage";
import WeatherBackPage from "./WeatherBackPage";

export default function WeatherApp() {
  const [showFront, setShowFront] = useState(true);

  return (
    <div style={{textAlign:"center", display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h2 style={{color:"#3a3f87" ,fontSize:"3rem"}}>Weather Widget</h2>
      {showFront ? (
        <WeatherFrontPage onStart={() => setShowFront(false)} />
      ) : (
        <WeatherBackPage />
      )}
    </div>
  );
}
    