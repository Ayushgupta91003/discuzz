import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSubscribe } from '../reducers/subReducer';
import { notify } from '../reducers/notificationReducer';
import SubFormModal from './SubFormModal';
import LoadingSpinner from './LoadingSpinner';
import getErrorMsg from '../utils/getErrorMsg';
import storageService from '../utils/localStorage';

import {
  Paper,
  Typography,
  useMediaQuery,
  Link,
  Button,
  Divider,
} from '@material-ui/core';
import { useSubPanelStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const TopSubsPanel = () => {
  const { subs, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useSubPanelStyles();
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down('md'));

  if (isNotDesktop) {
    return null;
  }

  const loggedUser = storageService.loadUser() || user;

  const loadingSubs = !subs || !subs.topSubs;

  const isSubscribed = (subscribedBy, user) => {
    return subscribedBy.includes(user.id);
  };

  const handleJoinSub = async (id, subscribedBy, subredditName) => {
    try {
      let updatedSubscribedBy;
      if (subscribedBy.includes(user.id)) {
        updatedSubscribedBy = subscribedBy.filter((s) => s !== user.id);
      } else {
        updatedSubscribedBy = [...subscribedBy, user.id];
      }
      dispatch(toggleSubscribe(id, updatedSubscribedBy));
      const message = subscribedBy.includes(user.id)
        ? `Unsubscribed from r/${subredditName}`
        : `Subscribed to r/${subredditName}!`;
      dispatch(notify(message, 'success'));
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
        <WhatshotIcon style={{ fontSize: 16, color: theme.palette.primary.main }} />
        <Typography
          variant="overline"
          className={classes.title}
          style={{ marginBottom: 0 }}
        >
          Top Communities
        </Typography>
      </div>
      <Divider style={{ marginBottom: 12 }} />

      {loadingSubs ? (
        <LoadingSpinner text="Loading..." />
      ) : (
        <div className={classes.listPaper}>
          {subs.topSubs.map((s, i) => (
            <div key={s.id} className={classes.listWrapper}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                <Typography
                  variant="caption"
                  style={{
                    fontWeight: 700,
                    color: theme.palette.text.secondary,
                    minWidth: 18,
                  }}
                >
                  {i + 1}
                </Typography>
                <Typography variant="body2" className={classes.listItem} noWrap>
                  <Link
                    component={RouterLink}
                    to={`/r/${s.subredditName}`}
                    color="primary"
                    style={{ fontWeight: 600 }}
                  >
                    r/{s.subredditName}
                  </Link>
                  <br />
                  <Typography
                    variant="caption"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    {s.subscriberCount.toLocaleString()} members
                  </Typography>
                </Typography>
              </div>
              {loggedUser && user && (
                <Button
                  variant={isSubscribed(s.subscribedBy, user) ? 'outlined' : 'contained'}
                  color="primary"
                  size="small"
                  style={{ minWidth: 64, borderRadius: 20, flexShrink: 0 }}
                  startIcon={
                    isSubscribed(s.subscribedBy, user) ? (
                      <CheckIcon style={{ fontSize: 12 }} />
                    ) : (
                      <AddIcon style={{ fontSize: 12 }} />
                    )
                  }
                  onClick={() =>
                    handleJoinSub(s.id, s.subscribedBy, s.subredditName)
                  }
                >
                  {isSubscribed(s.subscribedBy, user) ? 'Joined' : 'Join'}
                </Button>
              )}
            </div>
          ))}
        </div>
      )}

      {loggedUser && (
        <div style={{ marginTop: 12 }}>
          <Divider style={{ marginBottom: 12 }} />
          <SubFormModal />
        </div>
      )}
    </Paper>
  );
};

export default TopSubsPanel;
