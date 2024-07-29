import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../media/59f3c6f515f26d28b3da2b051c77ffa5.jpg';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#D4D4D4', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '100px', height: '100px' }} />
    <Typography fontSize="28px" fontWeight="bolder" fontFamily="Alegreya" color="#790001" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;