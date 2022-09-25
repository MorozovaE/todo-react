import React from "react";
import { useState,createContext } from "react";
import "./WeekPanel.css";
import Tasks from "./Tasks";

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
export const WeekContext = createContext();

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
 
  return (
    <>
    <WeekContext.Provider value={currDay}>
      <div className="weekDaysContainer">{renderWeekDaysTab}</div>
      {/* <div>{renderWeekDaysTasks}</div> */}
      <Tasks/>
    </WeekContext.Provider>
    </>
  );
}
