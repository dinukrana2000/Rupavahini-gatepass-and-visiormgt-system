import React from 'react';
import Drawer from '../../Components/Drawer/Drawer';
import { styled } from '@mui/material/styles';
import VisitRupavahiniBt from '../../Components/UserRequestButtons/VisitRupavahiniBt';
import AppoinmentBt from '../../Components/UserRequestButtons/AppoinmentBt';


//const GlobalStyle = styled('div')({
  //height: '100vh',
 // overflow: 'hidden',
//});

const CenteredContent = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1, 
});

const BodyWithBackground = styled('div')({
  backgroundImage: 'url("https://eapl15616.weebly.com/uploads/1/4/6/1/146126864/minimal-amazing-interior-design_orig.jpg")',
  backgroundSize: 'cover',
  height: '100vh',
  overflow: 'hidden',
});

function UserReq() {
  return (
    <BodyWithBackground>
      <Drawer>
        <main>
          <CenteredContent>
            
             <VisitRupavahiniBt/>
          <br/>
            <AppoinmentBt/>
            
          </CenteredContent>
        </main>
      </Drawer>
    </BodyWithBackground>
  );
}

export default UserReq;
