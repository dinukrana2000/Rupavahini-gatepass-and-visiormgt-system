import React, { useState } from 'react';
import {Container,Paper,Typography,TextField,Button,Grid,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,} from '@mui/material';
import { styled } from '@mui/system';
import SubmitButton from '../components/SubmitButton';

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
    fullname_v : '',
    email : '',
    NIC : '',
    phonenumber : '',
    fullname_a : '',
    appoinment_time : '',
    appoinment_date : new Date().toISOString().split('T')[0],
    reason : '',
  });

  const [validationErrors, setValidationErrors] = useState({});
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // Reset form-related state or perform cleanup if needed
    setOpen(false);
    setFormData({
      fullname_v : '',
      email : '',
      NIC : '',
      phonenumber : '',
      fullname_a : '',
      appoinment_time : '',
      appoinment_date : new Date().toISOString().split('T')[0],
      reason : '',
    });
    setValidationErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullname_v.trim()) {
      errors.fullname_v = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.NIC.trim()) {
      errors.NIC = 'NIC is required';
    }
    if (!formData.phonenumber.trim()) {
      errors.phonenumber = 'Phone number is required';
    }
    if (!formData.fullname_a.trim()) {
      errors.fullname_a = 'Full name for appointment is required';
    }
    if (!formData.appoinment_time.trim()) {
      errors.appoinment_time = 'Appointment time is required';
    }
    if (!formData.reason.trim()) {
      errors.reason = 'Reason is required';
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
  const isValidEmail = (email) => {
    // email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
                fullWidth
                id="fullname_v"
                label="Full name"
                name="fullname_v"
                autoComplete="fullname"
                autoFocus
                value={formData.fullname_v}
                onChange={handleInputChange}
                error={!!validationErrors.fullname_v}
                helperText={validationErrors.fullname_v}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!validationErrors.email}
                helperText={validationErrors.email}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={useStyles.section}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="nic"
                label="NIC"
                name="NIC"
                autoComplete="nic"
                value={formData.NIC}
                onChange={handleInputChange}
                error={!!validationErrors.NIC}
                helperText={validationErrors.NIC}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="phonenumber"
                label="Phone number"
                name="phonenumber"
                autoComplete="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                error={!!validationErrors.phonenumber}
                helperText={validationErrors.phonenumber}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" style={useStyles.sectionTitle}>Appointment Request</Typography>

          <Grid container spacing={2} style={useStyles.section}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="fullname_a"
                label="Full name"
                name="fullname_a"
                autoComplete="fullname"
                autoFocus
                value={formData.fullname_a}
                onChange={handleInputChange}
                error={!!validationErrors.fullname_a}
                helperText={validationErrors.fullname_a}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="appoinment_time"
                label="Appointment time"
                name="appoinment_time"
                autoComplete="appoinment_time"
                value={formData.appoinment_time}
                onChange={handleInputChange}
                error={!!validationErrors.appoinment_time}
                helperText={validationErrors.appoinment_time}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={useStyles.section}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="appoinment_date"
                label="Appointment date"
                name="appoinment_date"
                autoComplete="appoinment_date"
                type="date"
                value={formData.appoinment_date}
                onChange={handleInputChange}
                error={!!validationErrors.appoinment_date}
                helperText={validationErrors.appoinment_date}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="standard"
                fullWidth
                id="reason"
                label="Reason"
                name="reason"
                autoComplete="reason"
                value={formData.reason}
                onChange={handleInputChange}
                error={!!validationErrors.reason}
                helperText={validationErrors.reason}
                
              />
            </Grid>
          </Grid>

          <Grid style={{ display: 'flex', justifyContent: 'center' }}>
        <SubmitButton label="Sign Up" onClick={handleSubmit} /> 
        </Grid>
        
        </form>
      </StyledPaper>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to submit the form?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmSubmit} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </StyledContainer>
    </div>
  );
}

export default Visit1;
