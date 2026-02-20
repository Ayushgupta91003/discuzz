import React from 'react';
import { Paper, Tabs, Tab, useMediaQuery } from '@material-ui/core';
import { useSortTabStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import StarIcon from '@material-ui/icons/Star';
import UpdateIcon from '@material-ui/icons/Update';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const SortTabBar = ({ sortBy, handleTabChange, subscribedTab, user }) => {
  const classes = useSortTabStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const tabStyle = {
    minHeight: 34,
    fontSize: isMobile ? '0.72rem' : '0.8rem',
    padding: isMobile ? '4px 6px' : '4px 10px',
  };

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <Tabs
        value={sortBy}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="sort posts"
        scrollButtons="auto"
        variant="scrollable"
        style={{ minHeight: 40 }}
      >
        <Tab
          label={isMobile ? 'Hot' : 'Hot'}
          icon={<WhatshotIcon style={{ fontSize: '0.95rem' }} />}
          value="hot"
          style={tabStyle}
        />
        <Tab
          label={isMobile ? 'New' : 'New'}
          icon={<FiberNewIcon style={{ fontSize: '0.95rem' }} />}
          value="new"
          style={tabStyle}
        />
        <Tab
          label={isMobile ? 'Top' : 'Top'}
          icon={<TrendingUpIcon style={{ fontSize: '0.95rem' }} />}
          value="top"
          style={tabStyle}
        />
        <Tab
          label={isMobile ? 'Best' : 'Best'}
          icon={<StarIcon style={{ fontSize: '0.95rem' }} />}
          value="best"
          style={tabStyle}
        />
        <Tab
          label={isMobile ? 'Old' : 'Old'}
          icon={<UpdateIcon style={{ fontSize: '0.95rem' }} />}
          value="old"
          style={tabStyle}
        />
        {user && subscribedTab && (
          <Tab
            label="Subscribed"
            icon={<BookmarkIcon style={{ fontSize: '0.95rem' }} />}
            value="subscribed"
            style={tabStyle}
          />
        )}
      </Tabs>
    </Paper>
  );
};

export default SortTabBar;
