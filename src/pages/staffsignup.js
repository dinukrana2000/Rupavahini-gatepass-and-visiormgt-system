import React, { useState } from 'react';
import {
  Container,
  Paper,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/system';
import RightSideImage from '../assets/rafiki.png';
import SubmitButton from '../components/SubmitButton';
import ConfirmSubmission from '../components/submitconfirm';

const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const useStyles = {
  form: {
    width: '100%',
  },

  section: {
    marginBottom: '10px',
    marginTop: '5px',
  },

  sectionTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '1dvh',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  r_image: {
    maxWidth: '100%',
    height: 'auto',
  },
  bg: {
    backgroundColor: '#D6C9CA',
  },
  bgimg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    maxWidth: '100%',
    height: 'auto',
  },
};

function Staff() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    empId: '',
    division: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      username: '',
      empId: '',
      division: '',
      email: '',
      contactNo: '',
      password: '',
      confirmPassword: '',
    });
    setValidationErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Full name is required';
    }
    if (!formData.empId.trim()) {
      errors.empId = 'Employee ID is required';
    }
    if (!formData.division.trim()) {
      errors.division = 'Division is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.contactNo.trim()) {
      errors.contactNo = 'Contact number is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div style={useStyles.bg}>
      {/*  <img src={shape_1} alt="Right Side Image" style={useStyles.bgimg} />*/}
      <StyledContainer component="main" maxWidth="lg">
        <StyledPaper elevation={3}>
          <form style={useStyles.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" style={useStyles.sectionTitle}>
                  Create Account
                </Typography>

                <TextField
                  variant="outlined"
                  fullWidth
                  id="username"
                  label="Full Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={formData.username}
                  onChange={handleInputChange}
                  error={!!validationErrors.username}
                  helperText={validationErrors.username}
                  style={useStyles.section}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  id="empId"
                  label="Employee ID"
                  name="empId"
                  autoComplete="empId"
                  autoFocus
                  value={formData.empId}
                  onChange={handleInputChange}
                  error={!!validationErrors.empId}
                  helperText={validationErrors.empId}
                  style={useStyles.section}
                />

                <FormControl fullWidth>
                  <InputLabel id="Division">Division</InputLabel>
                  <Select
                    labelId="Division"
                    id="division"
                    name="division"
                    autoComplete="division"
                    label="Division"
                    autoFocus
                    value={formData.division}
                    onChange={handleInputChange}
                    style={useStyles.section}
                  >
                    <MenuItem value="division1">Division 1</MenuItem>
                    <MenuItem value="division2">Division 2</MenuItem>
                    <MenuItem value="division3">Division 3</MenuItem>
                    <MenuItem value="division4">Division 4</MenuItem>
                    <MenuItem value="division5">Division 5</MenuItem>
                    <MenuItem value="division6">Division 6</MenuItem>
                  </Select>
                  {validationErrors.division && (
                    <Typography variant="caption" color="error">
                      {validationErrors.division}
                    </Typography>
                  )}
                </FormControl>

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
                  style={useStyles.section}
                />

                <TextField
                  variant="outlined"
                  fullWidth
                  id="contactNo"
                  label="Contact number"
                  name="contactNo"
                  autoComplete="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  error={!!validationErrors.contactNo}
                  helperText={validationErrors.contactNo}
                  style={useStyles.section}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleInputChange}
                      error={!!validationErrors.password}
                      helperText={validationErrors.password}
                      style={useStyles.section}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="confirmPassword"
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      error={!!validationErrors.confirmPassword}
                      helperText={validationErrors.confirmPassword}
                      style={useStyles.section}
                    />
                  </Grid>
                </Grid>
                <Grid style={{ display: 'flex', justifyContent: 'center' }}>
                  <SubmitButton label="Sign Up" onClick={handleSubmit} />
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={RightSideImage} alt="signup" style={useStyles.r_image} />
              </Grid>
            </Grid>
          </form>

          {/* Confirmation Dialog */}
          <ConfirmSubmission open={open} handleClose={handleClose} handleConfirmSubmit={handleConfirmSubmit} />
        </StyledPaper>
      </StyledContainer>
    </div>
  );
}

export default Staff;
