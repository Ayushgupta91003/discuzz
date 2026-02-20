import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { logoutUser } from '../reducers/userReducer';
import { notify } from '../reducers/notificationReducer';
import MobileUserMenu from './MobileUserMenu';
import DesktopUserMenu from './DesktopUserMenu';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  IconButton,
  Divider,
} from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useNavStyles();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(notify(`u/${user.username} logged out`, 'success'));
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar
        style={{
          minHeight: 56,
          padding: isMobile ? '0 8px' : '0 16px',
          gap: 8,
        }}
      >
        {!searchOpen && (
          <>
            <div className={classes.leftPortion}>
              <div className={classes.logoWrapper}>
                <Button
                  className={classes.logo}
                  color="primary"
                  component={RouterLink}
                  to="/"
                  startIcon={
                    <WhatshotIcon
                      style={{ fontSize: 22, color: theme.palette.primary.main }}
                    />
                  }
                >
                  {isSmall ? 'AGS' : 'Ayush Gupta Social'}
                </Button>
              </div>
              {!isMobile && (
                <div className={classes.search}>
                  <SearchBar />
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <ThemeToggle />
              {isMobile ? (
                <>
                  <IconButton
                    color="primary"
                    size="small"
                    className={classes.searchBtn}
                    onClick={() => setSearchOpen((prev) => !prev)}
                  >
                    <SearchIcon fontSize="small" />
                  </IconButton>
                  <MobileUserMenu user={user} handleLogout={handleLogout} />
                </>
              ) : (
                <DesktopUserMenu user={user} handleLogout={handleLogout} />
              )}
            </div>
          </>
        )}
        {searchOpen && isMobile && (
          <SearchBar isMobile={true} setSearchOpen={setSearchOpen} />
        )}
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default NavBar;
