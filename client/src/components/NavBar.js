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
  IconButton,
  Divider,
  useMediaQuery,
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
          minHeight: 54,
          padding: isMobile ? '0 8px' : '0 16px',
          gap: 8,
        }}
      >
        {!searchOpen && (
          <>
            {/* LEFT: Logo */}
            <div className={classes.logoWrapper}>
              <Button
                className={classes.logo}
                component={RouterLink}
                to="/"
                startIcon={
                  <WhatshotIcon
                    style={{
                      fontSize: 20,
                      color: theme.palette.primary.main,
                    }}
                  />
                }
                disableRipple
              >
                {isSmall ? 'AGS' : 'Ayush Gupta Social'}
              </Button>
            </div>

            {/* CENTER: Search */}
            {!isMobile && (
              <div className={classes.search} style={{ flex: 1, maxWidth: 520 }}>
                <SearchBar />
              </div>
            )}

            {/* SPACER on mobile */}
            {isMobile && <div style={{ flex: 1 }} />}

            {/* RIGHT: Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
              <ThemeToggle />
              {isMobile ? (
                <>
                  <IconButton
                    className={classes.searchBtn}
                    size="small"
                    onClick={() => setSearchOpen(true)}
                    color="inherit"
                  >
                    <SearchIcon style={{ fontSize: '1.2rem' }} />
                  </IconButton>
                  <MobileUserMenu user={user} handleLogout={handleLogout} />
                </>
              ) : (
                <DesktopUserMenu user={user} handleLogout={handleLogout} />
              )}
            </div>
          </>
        )}

        {/* MOBILE search mode */}
        {searchOpen && isMobile && (
          <SearchBar isMobile={true} setSearchOpen={setSearchOpen} />
        )}
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default NavBar;
