import "./CurrentWeather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city"></p>
                    <p className="weather-description"></p>
                </div>
                <img alt="weather" className="weather-icon" src="" />
            </div>
            <div className="bottom">
                <p className="temperature"></p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value"></span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value"></span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value"></span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;