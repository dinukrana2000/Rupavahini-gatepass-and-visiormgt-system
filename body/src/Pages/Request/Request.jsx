import React, {useEffect, useState} from "react";
import "./Request.css";
import Grid from '@mui/material/Grid';
import Alert from "../../Components/Alert/Alert";
import Drawer from "../../Components/Drawer/Drawer";
import axios from "axios";

const Request = () => {
 
  const [visitRequests, setVisitRequests] = useState([]);
  const [appoinmentRequests, setAppoinmentRequests] = useState([]);
/* const handleDeleteRequest = (requestId) => {
  
  const updatedRequests = requests.filter(request => request.id !== requestId);
  
  setRequests(updatedRequests);
};
 */
useEffect(()=>async()=>{
await axios.get('http://localhost:4000/user/:username')
.then(response => {
    // Handle the response data
    console.log(response.data); // Assuming response.data is an array of requests
    setVisitRequests(response.data); // Assuming response.data is the array of requests from your database
})
.catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
});
},[visitRequests])

useEffect(()=>async()=>{
  await axios.get('http://localhost:4000/appoinmentreq/:username')
  .then(response => {
      // Handle the response data
      console.log(response.data); // Assuming response.data is an array of requests
      setAppoinmentRequests(response.data); // Assuming response.data is the array of requests from your database
  })
  .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
  });
  },[appoinmentRequests])
  

  return (
    <>
    <Drawer/>
    <div>
      <div className="blur-image">
     {/*  {requests.map(request => (
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
      ))} */}
      </div>
      </div>
      </>
  );
};

export default Request;
