import React from 'react';
import { Typography, CircularProgress } from '@material-ui/core';

const LoadingSpinner = ({ text }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4em 2em',
        gap: 16,
      }}
    >
      <CircularProgress size={40} thickness={4} color="primary" />
      {text && (
        <Typography variant="body2" color="textSecondary">
          {text}
        </Typography>
      )}
    </div>
  );
};

export default LoadingSpinner;
