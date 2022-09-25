import React from 'react'
import { useContext } from 'react';
import { WeekContext } from "./WeekPanel";
import { weekDay } from './WeekPanel';

export default function Tasks() {

  const currDay = useContext(WeekContext);
  
  let renderWeekDaysTasks = weekDay.map((day, index) => {
    return (
      <p
        key={index}
        className={
          "content " + (currDay === day ? "active-content" : "content")
        }
      >
        {day}
      </p>
    );
  });
  return (
    <>
      <div>{renderWeekDaysTasks}</div>
    </>
  )
}
