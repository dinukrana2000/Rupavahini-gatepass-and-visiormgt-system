import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const BasicDateTimePicker = ({id,value,handleDateTimeChange}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker  label="Select Appointment Date and Time"
            id = {id}
            value={dayjs(value)} // Set the selected date from the parent component's state
            onChange={handleDateTimeChange}// Handle date change and update parent component's state 
            />
      </DemoContainer>
    </LocalizationProvider>
  );
};
  
export default BasicDateTimePicker;