// import React from "react";
// import style from "./InfoForDay.module.css";
// import pressureImg from "./pressure.png";
// import humidityImg from "./humidity.png";
// import windImg from "./wind.png";

// const InfoForDay = ({ arrOfChosenDay }) => {
//   return (
//     <div className={style.moreinfo}>
//       {arrOfChosenDay.map(el => (
//         <div key={el.dt} className={style.day}>
//           <p className={style.time_info}>{`${
//             el.dt_txt.split(" ")[1].split(":")[0]
//           } :00`}</p>
//           <img
//             className={style.img}
//             src={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`}
//             alt="weather"
//           />
//           <p className={style.temp_info}>{Math.round(el.main.temp)}&#176;</p>
//           <p>
//             <img className={style.icon_img} src={pressureImg} alt="pressure" />
//             {Math.round(el.main.pressure / 1.3)} mm
//           </p>
//           <p>
//             <img className={style.icon_img} src={humidityImg} alt="humidity" />
//             {el.main.humidity} %
//           </p>
//           <p>
//             <img className={style.icon_img} src={windImg} alt="wind" />
//             {el.wind.speed} m/s
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InfoForDay;
