import React from "react";
import moment from "moment";
import style from "./SingleDay.module.css";
// import { Link } from "react-router-dom";

const SingleDay = ({ minTemp, maxTemp, icon, date, onClick }) => {
  let iconImg = icon.find((el, index, arr) => {
    if (parseInt(el) !== parseInt(arr[index + 1])) {
      let quantity = icon.filter(item => el === item);
      let large = 0;
      if (quantity.length > large) {
        large = quantity.length;
        return parseInt(el);
      }
    }
  });

  return (
    <button className={style.linkButton} onClick={onClick} id={date}>
      <div className={style.singleDayCard} id={date}>
        <p id={date} className={style.date}>
          {moment.unix(date).format("dddd")}
        </p>
        <p id={date} className={style.dayNow}>
          {moment.unix(date).format("DD")} {moment.unix(date).format("MMMM")}
        </p>
        <img
          id={date}
          className={style.img}
          src={`https://openweathermap.org/img/wn/${iconImg}.png`}
          alt="weather"
        />

        <div id={date} className={style.minMax}>
          <div id={date}>
            <p id={date} className={style.sign}>
              min.
            </p>
            <p id={date} className={style.smallTemp}>
              {minTemp}&#176;
            </p>
          </div>
          <div id={date}>
            <p id={date} className={style.sign}>
              max.
            </p>
            <p id={date} className={style.smallTemp}>
              {maxTemp}&#176;
            </p>
          </div>
        </div>
        {/* <button className={style.btnMoreInfo} onClick={onClick} id={date}>
        more info
      </button> */}
      </div>
    </button>
  );
};

export default SingleDay;
