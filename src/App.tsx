import "./styles.css";
import React from "react";
import Counter from "./Counter";

export default function App() {
  const nextYear = new Date().getFullYear() + 1;
  const nextGantan = new Date(nextYear + "/1/1");
  const name = "新年";
  return (
    <div className="App">
      <Counter name={name} date={nextGantan} />
    </div>
  );
}
