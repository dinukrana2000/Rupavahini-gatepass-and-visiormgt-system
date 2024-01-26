import React, { useState } from 'react';
import {Container,Paper,TextField,MenuItem,Select,InputLabel,Typography,FormControlLabel,FormLabel,Radio,Button,Grid,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, RadioGroup, FormControl} from '@mui/material';
import { styled } from '@mui/system';
import SubmitButton from '../components/SubmitButton';
import ResponsiveDatePickers from '../components/staticdatepicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
//import SendButton from '../components/SendButton';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
//import { DatePicker } from '@mui/x-date-pickers';
//import format from 'date-fns/format';
//const session = useSession();//tokens
//const supabase = useSupabaseClient();//talk to supabase
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '40px',
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
    color:'black',
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '2px',
    fontWeight: 'bold',
    marginTop: '20px'  
  },

  bg:{
    backgroundColor: '#D6C9CA',
  }
};

function Visit2(){
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        timeslot: '',
        visitdate: new Date().toISOString().split('T')[0],
        note: ''
    });

 
    const [validationErrors, setValidationErrors] = useState({});
    

    const handleOpen = () =>{
        setOpen(true);
    };
    const handleClose = () => {
        // Reset form-related state or perform cleanup if needed
        setOpen(false);
        setFormData({
            category: '',
            timeslot: '',
            visitdate:new Date().toISOString().split('T')[0],
            note: ''
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
            errors.timeslot = 'Time slot is required';
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

      

      

    return (
        <div style={useStyles.bg}>
        <StyledContainer component="main" maxWidth="lg">
          <StyledPaper elevation={3}>
          
            <form style={useStyles.form} onSubmit={handleSubmit}>
            <Grid item xs={8}>
            <FormLabel id="category" >Category  </FormLabel>
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
     <ResponsiveDatePickers id="visitdate"
              value={formData.visitdate}
              onChange={(newDate) => setFormData({ ...formData, visitdate: newDate })}
 ></ResponsiveDatePickers>

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
            {/*<Grid item xs={4} style={{marginTop:'25px'}}>
                    <SendButton label= "Send" onClick={handleSubmit}/>
              </Grid>*/}
                </Grid>
    
              <SubmitButton label="Next" onClick={handleSubmit} />
            </form>
    
    
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
     
      </StyledPaper>
    </StyledContainer>
    </div>
  );
    

}

export default Visit2;
