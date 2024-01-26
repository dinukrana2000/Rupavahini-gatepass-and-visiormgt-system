import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    width: '180px',
    height: '58px',
    borderRadius: '66px',
    backgroundColor: '#973535',
    color: '#ffffff', 
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing:'2px',
    margin: '5px 0 5px 0',
    '&:hover': {
        backgroundColor: '#EEC01F', 
    },
});

const SubmitButton = ({ label, onClick }) => {
    return (
        
        <StyledButton variant="contained" color="primary" onClick={onClick}>
            {label}
        </StyledButton>
    
    );
};

export default SubmitButton;