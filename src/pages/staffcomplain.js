import React, { useState } from 'react';
import {Container,Paper,Typography,TextField,Grid} from '@mui/material';
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
  
function StaffComplain() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username : '',
    empId : '',
    designation:'',
    complaintDate: null,
    title:'',
    details : '',
    
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // Reset form-related state or perform cleanup if needed
    setOpen(false);
    setFormData({
        username : '',
        empId : '',
        designation:'',
        complaintDate: null,
        title:'',
        details : '',
    });
    setValidationErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Name is required';
    }
    if (!formData.empId.trim()) {
      errors.empId = 'Employee ID is required';
    }
    if (!formData.designation.trim()) {
      errors.designation = 'Designation is required';
    }
    if (!formData.complaintDate) {
      errors.complaintDate = 'Date is required';
    }
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }
    if (!formData.details.trim()) {
        errors.details = 'Details is required';
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
      [name]: '',
    }));
  };

  const handleDateChange = async (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      complaintDate: date,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      complaintDate: '',
    }));
  };
  return (
    <div style={useStyles.bg}>
    <StyledContainer component="main" maxWidth="lg">
      <StyledPaper elevation={3}>
      <Typography variant="h6" style={useStyles.sectionTitle}>Personal Details</Typography>
        <form style={useStyles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2} style={useStyles.section}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Name"
                name="username"
                autoComplete="username"
                autoFocus
                value={formData.username}
                onChange={handleInputChange}
                error={!!validationErrors.username}
                helperText={validationErrors.username}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="empId"
                label="Employee ID"
                name="empId"
                autoComplete="empId"
                value={formData.empId}
                onChange={handleInputChange}
                error={!!validationErrors.empId}
                helperText={validationErrors.empId}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={useStyles.section}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="designation"
                label="Designation"
                name="designation"
                autoComplete="designation"
                value={formData.designation}
                onChange={handleInputChange}
                error={!!validationErrors.designation}
                helperText={validationErrors.designation}
              />
            </Grid>
            <Grid item xs={6}>
            <BasicDatePicker
                    id="complaintDate"
                    value={formData.complaintDate}
                    handleDateChange={handleDateChange}
                  />
                  {validationErrors.complaintDate && (
                    <Typography variant="caption" color="error">
                      {validationErrors.complaintDate}
                    </Typography>
                  )}
            </Grid>
          </Grid>

          <Typography variant="h6" style={useStyles.sectionTitle}>Complain</Typography>

            <Grid item xs={6} style={useStyles.section}>
              <TextField
                variant="outlined"
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
                value={formData.title}
                onChange={handleInputChange}
                error={!!validationErrors.title}
                helperText={validationErrors.title}
              />
            </Grid>
           
            <Grid style={useStyles.section}>
              <TextField
                variant="standard"
                fullWidth
                id="details"
                label="Your complain"
                name="details"
                autoComplete="details"
                value={formData.details}
                onChange={handleInputChange}
                error={!!validationErrors.details}
                helperText={validationErrors.details}
                
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

export default StaffComplain;
