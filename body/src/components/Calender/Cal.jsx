import  React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import './Calender.css';


const Cal = ({onDateClick}) => {
  
  const reports = {
    2021: {
      1: {
        1: '2021 January 1 report',
        // Add more reports for January if needed
      },
      // Add more months for 2021 if needed
    },
    // Add more years if needed
  };
  const [clickedReport, setClickedReport] = useState('');

const handleClick = (value) => {
    const clickedDate = value.$D;
    const clickedMonth = value.$M + 1;
    const clickedYear = value.$y;

    // Check if there's a report available for the clicked date
    const report = reports[clickedYear]?.[clickedMonth]?.[clickedDate] || '';

    setClickedReport(report);

    console.log('Clicked Report:', report);
  };
  return (
 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateCalendar']}>
      <DateCalendar
         orientation="landscape"
        referenceDate={dayjs('2023-04-17')}
        views={['year', 'month', 'day']}
        className='calender'
        onChange={handleClick}
      />
    </DemoContainer>
  </LocalizationProvider>
  )
}

export default Cal