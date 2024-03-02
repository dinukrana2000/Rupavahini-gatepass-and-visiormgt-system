// Cal.js
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from "axios";
import dayjs from 'dayjs';
import './Calender.css';

const Cal = ({ onYearChange, onMonthChange, onDataChange }) => {
  const [data, setData] = useState([]);

  const handleYearChange = async(value) => {
    const clickedYear = value.$y;
    console.log("year", clickedYear);
    const fetchedData = await fetchData(clickedYear);
    console.log(fetchedData)
    setData(fetchedData);
    onYearChange(fetchedData);
  };

  const handleMonthChange =async (value) => {
    const clickedMonth = value.$M + 1; // Adjust month to start from 1
    const clickedYear = value.$y;

    const fetchedData = await fetchData(clickedYear, clickedMonth);
    console.log(fetchedData)
    setData(fetchedData);
    onMonthChange(fetchedData);
  };

  const handleDayClick = async(value) => {
    const clickedDay = value.$D;
    const clickedMonth = value.$M + 1;
    const clickedYear = value.$y;

    console.log("Clicked Day:", clickedDay);
    console.log("Clicked Month:", clickedMonth);
    console.log("Clicked Year:", clickedYear);

    const fetchedData = await fetchDayData(clickedYear, clickedMonth,clickedDay);
    console.log(fetchedData)
    setData(fetchedData);
    onDataChange(fetchedData);
  };

  const fetchData = async (year, month = null, date = null) => {
    let data = [];
    let responseData = [];
    try {
        const response = await axios.get(`http://localhost:4000/requests/${year}`);
        console.log(responseData)
        responseData = response.data; // Assuming responseData is an array of objects with a 'currentDate' property
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    const groupedData = {};
    responseData.forEach(item => {
        const date = new Date(item.currentDate);
        const monthKey = `${date.getMonth() + 1}/${date.getFullYear()}`;
        const dayKey = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        if (!groupedData[monthKey]) {
            groupedData[monthKey] = {};
        }

        if (!groupedData[monthKey][dayKey]) {
            groupedData[monthKey][dayKey] = [];
        }

        groupedData[monthKey][dayKey].push(item);
    });

    if (!month && !date) {
      const keys = Object.keys(groupedData);
      for (let i = 0; i < keys.length; i++) {
          data.push(`Activity for ${keys[i]} `);
          responseData.push(groupedData[keys[i]]);
      }
  } else if (month && !date) {
      const monthKey = `${month}/${year}`;
      if (groupedData[monthKey]) {
          const keys = Object.keys(groupedData[monthKey]);
          for (let i = 0; i < keys.length; i++) {
              data.push(`Activity for ${keys[i]} `);
              responseData.push(groupedData[monthKey][keys[i]]);
          }
      } else {
          // Handle case where data for the selected month is not available
          console.log(`No data available for ${monthKey}`);
      }
  }
  
    return { data, responseData };
};




const fetchDayData=async(year,month,day)=>{
  let data = [];
  let responseData=[]
  try {
      const { data: response } = await axios.get(`http://localhost:4000/requests/${year}/${month}/${day}`);
     // console.log(responseData)
     responseData=response
      if(responseData.length>0){
        data.push(`Activity for ${day}/${month}/${year}`)        
      }
      
  } catch (error) {
      console.error("Error fetching data:", error);
  }

  return {data,responseData}

}


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
