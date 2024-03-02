import React, { useState } from 'react'
import './Activity.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import BasicTable from '../..//Table/BasicTable';
import Drawer from "../../Drawer/Drawer";
import { useLocation } from 'react-router-dom';
const Activity = () => {
 const [data, setData] = useState(item);
  const location = useLocation();
  const item =location.state;
  console.log(item)
  return (
    <><Drawer/>
         <div className="blur-image">
          <div>{data.empId}</div>
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
    </>
  )
}

export default Activity