import React from "react";
import { useState, createContext } from "react";
import "./WeekPanel.css";
import PropTypes from "prop-types";
// var PropTypes = require("prop-types");

export const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "All",
];
                                                                                                                                                                                
export default function WeekPanel() {
  const [currDay, setCurrDay] = useState("All");

  const toggleTab = (currDay) => {
    setCurrDay(currDay);
  };

  let renderWeekDaysTab = weekDay.map((day, index) => {
    return (
      <button
        key={index}
        className={"weekDay " + (currDay === day ? "active-tab" : "tab")}
        onClick={() => toggleTab(day)}
      >
        {day}
      </button>
    );
  });

  let renderWeekDaysTasks = weekDay.map((day, index) => {
    return (
      <p
        key={index}
        className={
          "content " + (currDay === day ? "active-content" : "content")
        }
        onClick={() => toggleTab(day)}
      >
        {day}
      </p>
    );
  });

  return (
    <>
      <div className="weekDaysContainer">{renderWeekDaysTab}</div>
      <div>{renderWeekDaysTasks}</div>
    </>
  );
}
