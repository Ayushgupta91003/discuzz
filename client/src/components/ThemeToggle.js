import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../reducers/themeReducer';
import { Tooltip, IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((s) => s);

  return (
    <Tooltip title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} arrow>
      <IconButton
        onClick={() => dispatch(toggleDarkMode())}
        size="small"
        style={{ borderRadius: 8, padding: 7 }}
        color="inherit"
      >
        {darkMode ? (
          <Brightness7Icon style={{ fontSize: '1.25rem' }} />
        ) : (
          <Brightness4Icon style={{ fontSize: '1.25rem' }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
