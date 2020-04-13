import React from "react";
import moment from "moment";
import style from "./SingleDay.module.css";

const SingleDay = ({ minTemp, maxTemp, icon, date }) => {
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
      <div className={style.single_day_card}>
        <p className={style.p_date}>{moment.unix(date).format("dddd")}</p>
        <p className={style.p_day_now}>
          {moment.unix(date).format("DD")} {moment.unix(date).format("MMMM")}
        </p>
        <img
          className={style.img}
          src={`https://openweathermap.org/img/wn/${iconImg}.png`}
          alt="weather"
        />

        <div className={style.div_min_max}>
          <div>
            <p className={style.sign}>min.</p>
            <p className={style.small_temp}>{minTemp}&#176;</p>
          </div>
          <div>
            <p className={style.sign}>max.</p>
            <p className={style.small_temp}>{maxTemp}&#176;</p>
          </div>
        </div>
        {/* <button className={style.btn_more_info} id={date} onClick={onClick}>
          more info
        </button> */}
      </div>
    </div>
  );
};

export default SingleDay;
