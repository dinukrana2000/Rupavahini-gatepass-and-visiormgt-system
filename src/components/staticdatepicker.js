import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const ResponsiveDatePickers = ({ id, value, onChange }) => {
    const handleDateChange = (newDate) => {
      // Convert dayjs date to a format you want to use
      const formattedDate = newDate.format('YYYY-MM-DD');
      // Call the onChange callback with the selected date
      onChange(formattedDate);
    };
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['StaticDatePicker']}>
          <DemoItem label="Static variant">
          <DatePicker
          label="Controlled picker"
          value={value} // Set the selected date from the parent component's state
              onChange={handleDateChange} // Handle date change and update parent component's state
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    );
  };
  
export default ResponsiveDatePickers;