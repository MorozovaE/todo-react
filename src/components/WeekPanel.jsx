import React from 'react';
import "./WeekPanel.css";

export default function WeekPanel() {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "All"];

  const renderWeekDays = weekDays.map((day, index) => (
    <button key={index} className='weekDay'>{day}</button>
  ));

  return (
      <div className='weekDaysContainer'>{renderWeekDays}</div>
  )
}
