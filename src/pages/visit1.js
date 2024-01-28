import React, { useState } from 'react';
import {Container,Paper,Typography,TextField,Grid} from '@mui/material';
import { styled } from '@mui/system';
import SubmitButton from '../components/SubmitButton';
import BasicDateTimePicker from '../components/datetimeappointment';
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
    marginTop:'5px',
  
  },

  sectionTitle: {
    textAlign: 'center', 
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '2px',
    fontWeight: 'bold',
    marginTop: '20px'  
  },

  bg:{
    backgroundColor: '#D6C9CA',
  }
};

function Visit1() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    requesterName : '',
    requesteremail : '',
    requesterNIC : '',
    requesterPhoneno : '',
    officerName : '',
    selectedDateTime: null,
    appoinmentReason : '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // Reset form-related state or perform cleanup if needed
    setOpen(false);
    setFormData({
      requesterName : '',
      requesteremail : '',
      requesterNIC : '',
      requesterPhoneno : '',
      officerName : '',
      selectedDateTime: null,
      appoinmentReason : '',
    });
    setValidationErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.requesterName.trim()) {
      errors.requesterName = 'Full name is required';
    }
    if (!formData.requesteremail.trim()) {
      errors.requesteremail = 'Email is required';
    } else if (!isValidEmail(formData.requesteremail)) {
      errors.requesteremail = 'Invalid email format';
    }
    if (!formData.requesterNIC.trim()) {
      errors.requesterNIC = 'NIC is required';
    }
    if (!formData.requesterPhoneno.trim()) {
      errors.requesterPhoneno = 'Phone number is required';
    }
    if (!formData.officerName.trim()) {
      errors.officerName = 'Full name is required';
    }
    if (!formData.selectedDateTime) {
      errors.selectedDateTime = 'Date and Time are required';
    }
    if (!formData.appoinmentReason.trim()) {
      errors.appoinmentReason = 'Reason is required';
    }

    // If there are validation errors, update state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      // If no validation errors, proceed with form submission
      handleOpen();
    }
  };

  const handleConfirmSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!',formData);
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
      [name]: '', // Clear validation error when the field is edited
    }));
  };
  const handleDateTimeChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedDateTime: date,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      selectedDateTime: '',
    }));
  };

  
  const isValidEmail = (requesteremail) => {
    // email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(requesteremail);
  };

  return (
    <div style={useStyles.bg}>
    <StyledContainer component="main" maxWidth="lg">
      <StyledPaper elevation={3}>
      <Typography variant="h6" style={useStyles.sectionTitle}>Visitor Details</Typography>
        <form style={useStyles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2} style={useStyles.section}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="requesterName"
                label="Full name"
                name="requesterName"
                autoComplete="requesterName"
                autoFocus
                value={formData.requesterName}
                onChange={handleInputChange}
                error={!!validationErrors.requesterName}
                helperText={validationErrors.requesterName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="requesteremail"
                label="Email Address"
                name="requesteremail"
                autoComplete="requesteremail"
                value={formData.requesteremail}
                onChange={handleInputChange}
                error={!!validationErrors.requesteremail}
                helperText={validationErrors.requesteremail}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={useStyles.section}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="requesterNIC"
                label="NIC"
                name="requesterNIC"
                autoComplete="requesterNIC"
                value={formData.requesterNIC}
                onChange={handleInputChange}
                error={!!validationErrors.requesterNIC}
                helperText={validationErrors.requesterNIC}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="requesterPhoneno"
                label="Phone number"
                name="requesterPhoneno"
                autoComplete="requesterPhoneno"
                value={formData.requesterPhoneno}
                onChange={handleInputChange}
                error={!!validationErrors.requesterPhoneno}
                helperText={validationErrors.requesterPhoneno}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" style={useStyles.sectionTitle}>Appointment Request</Typography>

            <Grid item xs={6} style={useStyles.section}>
              <TextField
                fullWidth
                variant="outlined"
                id="officerName"
                label="Full name"
                name="officerName"
                autoComplete="officerName"
                autoFocus
                value={formData.officerName}
                onChange={handleInputChange}
                error={!!validationErrors.officerName}
                helperText={validationErrors.officerName}
              />
            </Grid>
            <Grid style={useStyles.section}>
            <BasicDateTimePicker
                id="selectedDateTime"
                value={formData.selectedDateTime}
                handleDateTimeChange={handleDateTimeChange}
              />
              {validationErrors.selectedDateTime && (
                <Typography variant="caption" color="error">
                  {validationErrors.selectedDateTime}
                </Typography>
              )}
               
            </Grid>
            <Grid style={useStyles.section}>
              <TextField
                variant="standard"
                fullWidth
                id="appoinmentReason"
                label="Reason"
                name="appoinmentReason"
                autoComplete="appoinmentReason"
                value={formData.appoinmentReason}
                onChange={handleInputChange}
                error={!!validationErrors.appoinmentReason}
                helperText={validationErrors.appoinmentReason}
                
              />
            </Grid>
        

          <Grid style={{ display: 'flex', justifyContent: 'center' }}>
        <SubmitButton label="Submit" onClick={handleSubmit} /> 
        </Grid>
        
        </form>
      </StyledPaper>

      {/* Confirmation Dialog */}
      <ConfirmSubmission open={open} handleClose={handleClose} handleConfirmSubmit={handleConfirmSubmit} />
    </StyledContainer>
    </div>
  );
}

export default Visit1;
