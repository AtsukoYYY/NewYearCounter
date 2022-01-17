import "./styles.css";
import React from "react";
import Counter from "./Counter";

export default function App() {
  const nextYear = new Date().getFullYear() + 1;
  const nextGantan = nextYear + "/1/1";
  return (
    <div className="App">
      <Counter name="新年" date={nextGantan} />
    </div>
  );
}
