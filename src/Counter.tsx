import "./styles.css";
import React, { useState } from "react";
type Props = {
  name: string;
  date: Date;
};
const Counter = (props: Props) => {
  const xday = {
    name: props.name,
    date: new Date(props.date)
  };
  const now = new Date();

  const CalcDay = (xday: Date, now: Date) => {
    const diff = xday.getTime() - now.getTime();
    if (diff < 0) return 0;
    return Math.floor(diff / 86400000);
  };
  const CalcHour = (xday: Date, now: Date) => {
    const diff = xday.getTime() - now.getTime();
    if (diff < 0) return 0;
    return Math.floor(diff / 3600000) % 24;
  };
  const CalcMinute = (xday: Date, now: Date) => {
    const diff = xday.getTime() - now.getTime();
    if (diff < 0) return 0;
    return Math.floor(diff / 60000) % 60;
  };
  const CalcSecond = (xday: Date, now: Date) => {
    const diff = xday.getTime() - now.getTime();
    if (diff < 0) return 0;
    return Math.floor(diff / 1000) % 60;
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
