import "./WeatherFrontPage.css";

export default function WeatherFrontPage({ onStart }) {
  return (
    <div className="WeatherFrontPage">
      <div className="img">
        <img
          src="https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-partly-cloudy-with-rain-emoji-png-image_15839963.png"
          alt="Partly cloudy with rain weather icon"
          loading="lazy"
        />
      </div>

      <div className="buttonDiv">
        <h2>
          Weather
          <br />
          Forecasts
        </h2>
        <button type="button" onClick={onStart}>
          Get Started
        </button>
      </div>
    </div>
  );
}
