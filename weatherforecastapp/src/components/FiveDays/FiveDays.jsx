import React, { Component } from "react";
import SingleDay from "../SingleDay/SingleDay";
import style from "./FiveDays.module.css";

class FiveDays extends Component {
  state = {
    isLoading: false,
    arrOfChosenDay: []
  };

  componentDidMount() {
    this.props.fetchFor5daysByLocation();
  }

  render() {
    const arrOfFiveDayWeatherObject = this.props.weatherFor5days
      .arrOfFiveDayWeatherObject;

    console.log(arrOfFiveDayWeatherObject);
    return (
      <>
        {arrOfFiveDayWeatherObject && (
          <div className={style.wrapper}>
            <div className={style.divFiveDays}>
              {arrOfFiveDayWeatherObject.slice(1, 6).map(el => (
                <SingleDay
                  data={this.props.weatherFor5days}
                  minTemp={Math.round(
                    Math.min(...el.map(el => el.main.temp_min))
                  )}
                  maxTemp={Math.round(
                    Math.max(...el.map(el => el.main.temp_max))
                  )}
                  icon={el.map(item => item.weather[0].icon)}
                  date={el[0] && el[0].dt}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default FiveDays;
