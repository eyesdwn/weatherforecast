import React from "react";
import moment from "moment";
import style from "./SingleDay.module.css";

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
    <div className={style.cardsWrapper}>
      <div className={style.singleDayCard}>
        <p className={style.date}>{moment.unix(date).format("dddd")}</p>
        <p className={style.dayNow}>
          {moment.unix(date).format("DD")} {moment.unix(date).format("MMMM")}
        </p>
        <img
          className={style.img}
          src={`https://openweathermap.org/img/wn/${iconImg}.png`}
          alt="weather"
        />

        <div className={style.minMax}>
          <div>
            <p className={style.sign}>min.</p>
            <p className={style.smallTemp}>{minTemp}&#176;</p>
          </div>
          <div>
            <p className={style.sign}>max.</p>
            <p className={style.smallTemp}>{maxTemp}&#176;</p>
          </div>
        </div>
        <button className={style.btnMoreInfo} onClick={onClick} id={date}>
          more info
        </button>
      </div>
    </div>
  );
};

export default SingleDay;
