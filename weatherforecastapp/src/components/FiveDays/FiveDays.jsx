import React, { Component } from "react";
import SingleDay from "../SingleDay/SingleDay";
import HourlyData from "../HourlyData/HourlyData";
import style from "./FiveDays.module.css";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

class FiveDays extends Component {
  state = {
    hourlyData: []
  };
  onButtonClick = async e => {
    const list = this.props.weatherFor5days.list.slice(1, 6);
    const id = e.target.id;
    const startDay = moment
      .unix(id)
      .startOf("day")
      .format("X");
    const endDay = moment
      .unix(id)
      .endOf("day")
      .format("X");
    let hourlyData = list
      .map(el =>
        el.forecast.filter(item => item.dt <= endDay && item.dt > startDay)
      )
      .reduce((acc, el) => acc.concat(el), []);
    await this.setState({
      hourlyData
    });

    console.log(this.state);
  };

  render() {
    const list = this.props.weatherFor5days.list;
    const { hourlyData } = this.state;

    console.log(list);
    return (
      <>
        {list && (
          <div className={style.wrapper}>
            <div className={style.divFiveDays}>
              {list.slice(1, 6).map(el => (
                <SingleDay
                  key={uuidv4()}
                  onClick={this.onButtonClick}
                  data={list}
                  minTemp={Math.round(
                    Math.min(...el.forecast.map(el => el.main.temp_min))
                  )}
                  maxTemp={Math.round(
                    Math.max(...el.forecast.map(el => el.main.temp_max))
                  )}
                  icon={el.forecast.map(item => item.weather[0].icon)}
                  date={el.date}
                />
              ))}
            </div>

            <HourlyData hourlyData={hourlyData} />
          </div>
        )}
      </>
    );
  }
}

export default FiveDays;
