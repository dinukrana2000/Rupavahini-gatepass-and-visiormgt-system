// Cal.js
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import './Calender.css';

const Cal = ({ onYearChange, onMonthChange, onDataChange }) => {
  const [data, setData] = useState([]);

  const handleYearChange = (value) => {
    const clickedYear = value.$y;
    console.log("year", clickedYear);
    const fetchedData = fetchData(clickedYear);
    setData(fetchedData);
    onYearChange(fetchedData);
  };

  const handleMonthChange = (value) => {
    const clickedMonth = value.$M + 1; // Adjust month to start from 1
    const clickedYear = value.$y;

    const fetchedData = fetchData(clickedYear, clickedMonth);
    setData(fetchedData);
    onMonthChange(fetchedData);
  };

  const handleDayClick = (value) => {
    const clickedDay = value.$D;
    const clickedMonth = value.$M + 1;
    const clickedYear = value.$y;

    console.log("Clicked Day:", clickedDay);
    console.log("Clicked Month:", clickedMonth);
    console.log("Clicked Year:", clickedYear);

    const fetchedData = [`Activity ${clickedDay}/${clickedMonth}/${clickedYear}`];
    setData(fetchedData);
    onDataChange(fetchedData);
  };

  const fetchData = (year, month = null) => {
    const data = [];

    if (month) {
      const daysInMonth = new Date(year, month, 0).getDate();

      for (let i = 1; i <= daysInMonth; i++) {
        data.push(`Activity ${i}/${month}/${year}`);
      }
    } else {
      for (let i = 1; i <= 12; i++) {
        data.push(`Activity for ${i}/${year}`);
      }
    }

    return data;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DateCalendar
          orientation="landscape"
          views={['year', 'month', 'day']}
          className='calender'
          onYearChange={handleYearChange}
          onMonthChange={handleMonthChange}
          onChange={handleDayClick}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default Cal;
