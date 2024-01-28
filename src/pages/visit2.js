import React, { useState } from 'react';
import {Container,Paper,Typography,TextField,Grid,Radio,FormControlLabel,RadioGroup,FormLabel} from '@mui/material';
import { styled } from '@mui/system';
import SubmitButton from '../components/SubmitButton';
import BasicDatePicker from '../components/datepicker';
import ConfirmSubmission from '../components/submitconfirm';

const StyledContainer = styled(Container)({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  
  const StyledPaper = styled(Paper)({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
  
  const useStyles = {
    form: {
      width: '100%',
    },
  
    section: {
      marginBottom: '16px',
      marginTop: '5px',
    },
  
    sectionTitle: {
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif',
      letterSpacing: '2px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
  
    bg: {
      backgroundColor: '#D6C9CA',
    },
  };
  
  function Visit2() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      category: '',
      timeslot: '',
      note: '',
      dateofArrival: null,
    });
  
    const [validationErrors, setValidationErrors] = useState({});
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setFormData({
        category: '',
        timeslot: '',
        note: '',
        dateofArrival: null,
      });
      setValidationErrors({});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = {};
      if (!formData.category.trim()) {
        errors.category = 'Please select a category';
      }
      if (!formData.timeslot.trim()) {
        errors.timeslot = 'Please select a time slot';
      }
      if (!formData.dateofArrival) {
        errors.dateofArrival = 'Date is required';
      }
  
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
      } else {
        handleOpen();
      }
    };
  
    const handleConfirmSubmit = () => {
      console.log('Form submitted!', formData);
      handleClose();
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    };
  
    const handleDateChange = async (date) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        dateofArrival: date,
      }));
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        dateofArrival: '',
      }));
    };
  
    return (
      <div style={useStyles.bg}>
        <StyledContainer component="main" maxWidth="lg">
          <StyledPaper elevation={3}>
            <form style={useStyles.form} onSubmit={handleSubmit}>
              <Grid item xs={8}>
                <FormLabel id="category">Category</FormLabel>
                {validationErrors.category && (
                  <Typography variant="caption" color="error">
                    {validationErrors.category}
                  </Typography>
                )}
                <RadioGroup
                  row
                  aria-labelledby="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <FormControlLabel value="school" control={<Radio />} label="School" />
                  <FormControlLabel value="university" control={<Radio />} label="University" />
                  <FormControlLabel value="technical_college " control={<Radio />} label="Technical college" />
                  <FormControlLabel value="other_institute " control={<Radio />} label="Other institute" />
                </RadioGroup>
              </Grid>
  
              <Grid container spacing={2} style={useStyles.section}>
                <Grid item xs={8}>
                  <BasicDatePicker
                    id="dateofArrival"
                    value={formData.dateofArrival}
                    handleDateChange={handleDateChange}
                  />
                  {validationErrors.dateofArrival && (
                    <Typography variant="caption" color="error">
                      {validationErrors.dateofArrival}
                    </Typography>
                  )}
                </Grid>
  
                <Grid item xs={8}>
                  <FormLabel id="timeslot">Time Slots</FormLabel>
                  {validationErrors.timeslot && (
                    <Typography variant="caption" color="error">
                      {validationErrors.timeslot}
                    </Typography>
                  )}
                  <RadioGroup
                    aria-labelledby="timeslot"
                    name="timeslot"
                    value={formData.timeslot}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel value="9.00-10.30" control={<Radio />} label="9.00 AM - 10.30 AM" />
                    <FormControlLabel value="11.00-12.30" control={<Radio />} label="11.00 AM - 12.30 PM" />
                    <FormControlLabel value="1.00-2.30" control={<Radio />} label="1.00 PM - 2.30 PM" />
                    <FormControlLabel value="3.00-4.30" control={<Radio />} label="3.00 PM - 4.30 PM" />
                  </RadioGroup>
                </Grid>
              </Grid>
  
              <Typography variant="body2">If all time slots are booked, you can request any time period from here</Typography>
  
              <Grid container spacing={2} style={useStyles.section}>
                <Grid item xs={8}>
                  <TextField
                    variant="standard"
                    fullWidth
                    id="note"
                    label="Note"
                    name="note"
                    autoComplete="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    style={useStyles.section}
                  />
                </Grid>
              </Grid>
  
              <SubmitButton label="Next" onClick={handleSubmit} />
            </form>
          </StyledPaper>
  
          {/* Confirmation Dialog */}
          <ConfirmSubmission open={open} handleClose={handleClose} handleConfirmSubmit={handleConfirmSubmit} />
        </StyledContainer>
      </div>
    );
  }
  
  export default Visit2;