import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../reducers/themeReducer';
import { IconButton, Tooltip } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const ThemeToggle = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <Tooltip title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={() => dispatch(toggleDarkMode(!darkMode))}
        color="inherit"
        size="small"
        style={{ padding: 6 }}
      >
        {darkMode ? (
          <Brightness7Icon style={{ fontSize: 20 }} />
        ) : (
          <Brightness4Icon style={{ fontSize: 20 }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
