import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BasicDatePicker = ({id,value,handleDateChange}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date" 
            id = {id}
            value={dayjs(value)} // Set the selected date from the parent component's state
            onChange={handleDateChange}// Handle date change and update parent component's state 
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default BasicDatePicker;