import React from 'react'
import './Activity.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BasicTable from '../Table/BasicTable';

const Activity = () => {
  return (
    
         <div className="blur-image">
            <Grid container spacing={2} columns={16}>
  <Grid item xs={16} sx={{display:"flex",flexDirection:"column",justifyContent:"",alignItems:"center"}}>
   
          <div style={{marginBottom:"20px"}}> <label style={{color:"black"}}>Officer Name:</label> <TextField id="outlined-basic"  variant="standard" /></div>

          <div> <label style={{color:"black"}}>Date:</label> <TextField id="outlined-basic"  variant="standard" /></div>
      </Grid>
      
      <Grid item xs={16}  sx={{display:"flex",flexDirection:"column",justifyContent:"",alignItems:"center"}}>
        <BasicTable/>
      </Grid>
</Grid>

      
    </div>
  )
}

export default Activity