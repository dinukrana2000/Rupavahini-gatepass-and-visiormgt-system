import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing:'2px',
    
});

const SendButton = ({ label, onClick }) => {
    return (
        
        <StyledButton variant="text" color="primary" onClick={onClick}>
            {label}
        </StyledButton>
    
    );
};

export default SendButton;