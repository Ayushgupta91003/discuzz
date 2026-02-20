import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Paper, Typography, Button } from '@material-ui/core';
import { useNotFoundPageStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import HomeIcon from '@material-ui/icons/Home';

const NotFoundPage = () => {
  const classes = useNotFoundPageStyles();
  const theme = useTheme();

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <div className={classes.textWrapper}>
        {/* Big icon */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: theme.palette.type === 'dark'
              ? 'rgba(255,99,20,0.1)'
              : 'rgba(255,99,20,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <SentimentVeryDissatisfiedIcon
            className={classes.icon}
            style={{ fontSize: '3rem', color: theme.palette.primary.main }}
          />
        </div>

        <Typography
          variant="h1"
          style={{
            fontWeight: 900,
            fontSize: '5rem',
            color: theme.palette.primary.main,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          style={{
            fontWeight: 700,
            marginTop: 10,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          style={{ color: theme.palette.text.secondary, maxWidth: 380, textAlign: 'center', lineHeight: 1.6 }}
        >
          Looks like this page got lost in the void. The page you're looking for doesn't exist or has been moved.
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<HomeIcon />}
          style={{ marginTop: 28, borderRadius: 999, padding: '10px 28px', fontWeight: 700 }}
        >
          Back to Home
        </Button>
      </div>
    </Paper>
  );
};

export default NotFoundPage;
