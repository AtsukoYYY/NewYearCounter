import "./styles.css";
import React, { useState } from "react";

const Counter = (props) => {
  const xday = {
    name: props.name,
    date: new Date(props.date)
  };
  const now = new Date();

  const CalcDay = (xday, now) => {
    if (xday - now < 0) return 0;
    return Math.floor((xday - now) / 86400000);
  };
  const CalcHour = (xday, now) => {
    if (xday - now < 0) return 0;
    return Math.floor((xday - now) / 3600000) % 24;
  };
  const CalcMinute = (xday, now) => {
    if (xday - now < 0) return 0;
    return Math.floor((xday - now) / 60000) % 60;
  };
  const CalcSecond = (xday, now) => {
    if (xday - now < 0) return 0;
    return Math.floor((xday - now) / 1000) % 60;
  };

  const [day, setDay] = useState(CalcDay(xday.date, now));
  const [hour, setHour] = useState(CalcHour(xday.date, now));
  const [minute, setMinute] = useState(CalcMinute(xday.date, now));
  const [second, setSecond] = useState(CalcSecond(xday.date, now));

  const UpdateTime = () => {
    const now = new Date();
    setSecond(CalcSecond(xday.date, now));
    setMinute(CalcMinute(xday.date, now));
    setHour(CalcHour(xday.date, now));
    setDay(CalcDay(xday.date, now));
  };

  setInterval(UpdateTime, 500);

  return (
    <div className="counterContainer">
      <h4 className="title">{xday.name}まで、あと</h4>
      <div className="timerContainer">
        <p className="timer">{day}日</p>
        <p className="timer">{hour}時間</p>
        <p className="timer">{minute}分</p>
        <p className="timer">{second}秒</p>
      </div>
    </div>
  );
};
export default Counter;
