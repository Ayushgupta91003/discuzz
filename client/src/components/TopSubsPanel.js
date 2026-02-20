import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSubscribe } from '../reducers/subReducer';
import { notify } from '../reducers/notificationReducer';
import SubFormModal from './SubFormModal';
import { SidebarSkeleton } from './LoadingSpinner';
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
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

const TopSubsPanel = () => {
  const { subs, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useSubPanelStyles();
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down('md'));

  if (isNotDesktop) return null;

  const loggedUser = storageService.loadUser() || user;
  const loadingSubs = !subs || !subs.topSubs;

  const isSubscribed = (subscribedBy) => user && subscribedBy.includes(user.id);

  const handleJoin = async (id, subscribedBy, subredditName) => {
    try {
      const updatedSubscribedBy = subscribedBy.includes(user.id)
        ? subscribedBy.filter((s) => s !== user.id)
        : [...subscribedBy, user.id];

      dispatch(toggleSubscribe(id, updatedSubscribedBy));
      dispatch(
        notify(
          subscribedBy.includes(user.id)
            ? `Left r/${subredditName}`
            : `Joined r/${subredditName}!`,
          'success'
        )
      );
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  if (loadingSubs) return <SidebarSkeleton />;

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
        <WhatshotIcon style={{ fontSize: 15, color: theme.palette.primary.main }} />
        <Typography className={classes.title}>Top Communities</Typography>
      </div>
      <Divider style={{ marginBottom: 10 }} />

      {/* List */}
      <div className={classes.listPaper}>
        {subs.topSubs.map((s, i) => (
          <div key={s.id} className={classes.listWrapper}>
            {/* Rank + Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 }}>
              <Typography
                variant="caption"
                style={{
                  fontWeight: 800,
                  color: theme.palette.text.disabled,
                  minWidth: 16,
                  fontSize: '0.7rem',
                }}
              >
                {i + 1}
              </Typography>
              <div style={{ minWidth: 0 }}>
                <Typography variant="body2" className={classes.listItem} noWrap>
                  <Link
                    component={RouterLink}
                    to={`/r/${s.subredditName}`}
                    style={{ fontWeight: 700, color: theme.palette.primary.main }}
                  >
                    r/{s.subredditName}
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  style={{ color: theme.palette.text.secondary, fontSize: '0.72rem' }}
                >
                  {s.subscriberCount.toLocaleString()} members
                </Typography>
              </div>
            </div>

            {/* Join / Leave button */}
            {loggedUser && user && (
              <Button
                variant={isSubscribed(s.subscribedBy) ? 'outlined' : 'contained'}
                color="primary"
                size="small"
                style={{ minWidth: 60, flexShrink: 0, fontSize: '0.72rem', padding: '3px 10px' }}
                startIcon={
                  isSubscribed(s.subscribedBy)
                    ? <CheckIcon style={{ fontSize: 11 }} />
                    : <AddIcon style={{ fontSize: 11 }} />
                }
                onClick={() => handleJoin(s.id, s.subscribedBy, s.subredditName)}
              >
                {isSubscribed(s.subscribedBy) ? 'Joined' : 'Join'}
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Create Community */}
      {loggedUser && (
        <>
          <Divider style={{ margin: '12px 0 10px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <GroupAddIcon style={{ fontSize: 14, color: theme.palette.text.secondary }} />
            <Typography
              variant="caption"
              style={{ color: theme.palette.text.secondary, fontWeight: 600, fontSize: '0.72rem' }}
            >
              Create your own community
            </Typography>
          </div>
          <SubFormModal />
        </>
      )}
    </Paper>
  );
};

export default TopSubsPanel;
