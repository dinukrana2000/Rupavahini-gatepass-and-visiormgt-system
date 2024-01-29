import React, {useState} from "react";
import "./Request.css";
import Grid from '@mui/material/Grid';
import Alert from "../Alert/Alert";
import Drawer from "../Drawer/Drawer";

const Request = () => {
 
  const [requests, setRequests] = useState([
    { id: 1, text: "Request 1" },
    { id: 2, text: "Request 2" },
    { id: 3, text: "Request 3" },
    { id: 4, text: "Request 4" }
]);
const handleDeleteRequest = (requestId) => {
  
  const updatedRequests = requests.filter(request => request.id !== requestId);
  
  setRequests(updatedRequests);
};

  return (
    <>
    <Drawer/>
    <div>
      <div className="blur-image">
      {requests.map(request => (
        <div className="rectangle-col" key={request.id}>
        <Grid container className="rectangle" spacing={0}>
      <Grid item xs={12} sm={6}  >
        <div className="request">{request.text}</div>
      

      </Grid>
      <Grid item xs={12} sm={6}  textAlign="right">
        <div className="cancel"><Alert requestId={request.id} onDelete={handleDeleteRequest}/></div>
        
      </Grid>
    </Grid>
        </div>
      ))}
      </div>
      </div>
      </>
  );
};

export default Request;
