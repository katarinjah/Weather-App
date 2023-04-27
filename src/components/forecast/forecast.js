import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInTheWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInTheWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInTheWeek));

    return (
        <>
            <span className="title">Daily</span>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <span className="day">{forecastDays[index]}</span>
                                    <span className="description">{item.weather[0].description}</span>
                                    <span className="min-max">{Math.round(item.main.temp_min)}°C - {Math.round(item.main.temp_max)}°C </span>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-item">
                                    <span>Pressure</span>
                                    <span>{item.main.pressure}hPa</span>
                                </div>
                                <div className="daily-details-item">
                                    <span>Humidity</span>
                                    <span>{item.main.humidity}%</span>
                                </div>
                                <div className="daily-details-item">
                                    <span>Clouds</span>
                                    <span>{item.clouds.all}%</span>
                                </div>
                                <div className="daily-details-item">
                                    <span>Windspeed</span>
                                    <span>{item.wind.speed}m/s</span>
                                </div>
                                <div className="daily-details-item">
                                    <span>Sea Level Pressure</span>
                                    <span>{item.main.sea_level}hPa</span>
                                </div>
                                <div className="daily-details-item">
                                    <span>Feels like</span>
                                    <span>{Math.round(item.main.feels_like)}°C</span>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;