
import React, { useState } from "react";

function Calendar() {
  const [date, setDate] = useState(new Date());

  function handlePrevMonth() {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  }

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const emptyDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptyDays.push(i);
  }

  return (
    <div className="calendar-container">
    <h2>{date.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
    <div className="calendar-buttons">
      <button onClick={handlePrevMonth}>Prev</button>
      <button onClick={handleNextMonth}>Next</button>
    </div>
    <table className="calendar-table">
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
          <th>Mon</th>
        </tr>
      </thead>
      <tbody>
        {emptyDays.map(() => <td className="calendar-empty"></td>)}
        {days.map(day => <td className="calendar-day">{day}</td>)}
      </tbody>
    </table>
  </div>
  );
}

export default Calendar;