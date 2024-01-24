import React from "react";
import "./Request.css";
import Grid from '@mui/material/Grid';
import Alert from "../Alert/Alert";

const Request = () => {
 

  return (
    <div>
      <div className="blur-image">
        <div className="rectangle-col">
        <Grid container className="rectangle" spacing={0}>
      <Grid item xs={12} sm={6}  >
        <div className="request">  Request 1</div>
      

      </Grid>
      <Grid item xs={12} sm={6}  textAlign="right">
        <div className="cancel"><Alert/></div>
        
      </Grid>
    </Grid>
        </div>
        <div className="rectangle-col">
        <Grid container className="rectangle" spacing={0}>
      <Grid item xs={12} sm={6}  >
        <div className="request">  Request 2</div>
      

      </Grid>
      <Grid item xs={12} sm={6}  textAlign="right">
        <div className="cancel"><Alert/></div>
        
      </Grid>
    </Grid>
        </div>

        <div className="rectangle-col">
        <Grid container className="rectangle" spacing={0}>
      <Grid item xs={12} sm={6}  >
        <div className="request">  Request 3</div>
      

      </Grid>
      <Grid item xs={12} sm={6}  textAlign="right">
        <div className="cancel"><Alert/></div>
        
      </Grid>
    </Grid>
        </div>
        <div className="rectangle-col">
        <Grid container className="rectangle" spacing={0}>
      <Grid item xs={12} sm={6}  >
        <div className="request">  Request 4</div>
      

      </Grid>
      <Grid item xs={12} sm={6}  textAlign="right">
        <div className="cancel"><Alert/></div>
        
      </Grid>
    </Grid>
        </div>
      </div>
    </div>
  );
};

export default Request;
