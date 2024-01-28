import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BookedTimeSlots = ({ bookedTimeSlots, selectedDate, selectedTimeSlot }) => {
  if (Object.keys(bookedTimeSlots).length === 0 || !selectedDate) {
    return null;
  }

  const dateBookedTimeSlots = bookedTimeSlots[selectedDate.toISOString().slice(0, 10)] || [];
  const isSelectedTimeSlotBooked = dateBookedTimeSlots.includes(selectedTimeSlot);

  return (
    <Box mt={2}>
      {isSelectedTimeSlotBooked && (
        <Typography variant="body2" color="error">
          The selected time slot is booked. Please select another time slot.
        </Typography>
      )}
      {!isSelectedTimeSlotBooked && (
        <>
          <Typography variant="body2">Booked time slots for the selected date:</Typography>
          <ul>
            {dateBookedTimeSlots.map((timeSlot, index) => (
              <li key={index}>
                {timeSlot}
              </li>
            ))}
          </ul>
    </>
      )}
    </Box>
  );
};

export default BookedTimeSlots;