import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSub,
  toggleUpvote,
  toggleDownvote,
  toggleSubscribe,
  editDescription,
  loadSubPosts,
} from '../reducers/subPageReducer';
import { notify } from '../reducers/notificationReducer';
import SortTabBar from './SortTabBar';
import PostCard from './PostCard';
import LoadMoreButton from './LoadMoreButton';
import PostFormModal from './PostFormModal';
import ErrorPage from './ErrorPage';
import LoadingSpinner from './LoadingSpinner';
import getErrorMsg from '../utils/getErrorMsg';

import {
  Paper,
  Typography,
  Button,
  Link,
  TextField,
  Chip,
  Divider,
} from '@material-ui/core';
import { useSubPageStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import CakeIcon from '@material-ui/icons/Cake';
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ForumIcon from '@material-ui/icons/Forum';

const SubPage = () => {
  const classes = useSubPageStyles();
  const theme = useTheme();
  const { sub } = useParams();
  const dispatch = useDispatch();
  const { user, subPage } = useSelector((state) => state);
  const [editOpen, setEditOpen] = useState(false);
  const [descInput, setDescInput] = useState('');
  const [sortBy, setSortBy] = useState('hot');
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(false);
  const [pageError, setPageError] = useState(null);

  useEffect(() => {
    const getSub = async () => {
      try {
        await dispatch(fetchSub(sub, 'hot'));
        setPageLoading(false);
      } catch (err) {
        setPageError(getErrorMsg(err));
      }
    };
    getSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sub]);

  useEffect(() => {
    if (subPage) setDescInput(subPage.subDetails.description);
  }, [subPage]);

  if (pageError) {
    return (
      <Paper variant="outlined" className={classes.mainPaper}>
        <ErrorPage errorMsg={pageError} />
      </Paper>
    );
  }

  if (!subPage || pageLoading) {
    return (
      <Paper variant="outlined" className={classes.mainPaper}>
        <LoadingSpinner text="Fetching community..." />
      </Paper>
    );
  }

  const { subredditName, subscribedBy, subscriberCount, description, admin, createdAt, id } =
    subPage.subDetails;

  const isSubscribed = user && subscribedBy.includes(user.id);

  const handleSubJoin = async () => {
    try {
      const updatedSubscribedBy = isSubscribed
        ? subscribedBy.filter((s) => s !== user.id)
        : [...subscribedBy, user.id];
      await dispatch(toggleSubscribe(id, updatedSubscribedBy));
      dispatch(notify(isSubscribed ? `Left r/${subredditName}` : `Joined r/${subredditName}!`, 'success'));
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleEditDescription = async () => {
    try {
      await dispatch(editDescription(id, descInput));
      setEditOpen(false);
      dispatch(notify('Description updated!', 'success'));
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleTabChange = async (e, newValue) => {
    try {
      setPostsLoading(true);
      await dispatch(fetchSub(sub, newValue));
      setSortBy(newValue);
      setPostsLoading(false);
      if (page !== 1) setPage(1);
    } catch (err) {
      setPostsLoading(false);
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleLoadPosts = async () => {
    try {
      setLoadingMore(true);
      await dispatch(loadSubPosts(sub, sortBy, page + 1));
      setPage((prev) => prev + 1);
      setLoadingMore(false);
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const joinedDate = String(new Date(createdAt)).split(' ').slice(1, 4).join(' ');

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      {/* ── Community Header ── */}
      <div className={classes.subInfoWrapper}>
        <div className={classes.firstPanel}>
          {/* Community name */}
          <div className={classes.iconText}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: `linear-gradient(135deg, #FF6314 0%, #FF8A50 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ForumIcon style={{ color: '#fff', fontSize: 22 }} />
            </div>
            <div>
              <Typography variant="h5" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                r/{subredditName}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 3 }}>
                <Chip
                  icon={<GroupIcon style={{ fontSize: 12 }} />}
                  label={`${subscriberCount.toLocaleString()} members`}
                  size="small"
                  color="primary"
                  variant="outlined"
                  style={{ height: 22, fontSize: '0.72rem', fontWeight: 700 }}
                />
                <Typography
                  variant="caption"
                  style={{ color: theme.palette.text.secondary, display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <CakeIcon style={{ fontSize: 13 }} /> Created {joinedDate}
                </Typography>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className={classes.description} style={{ marginTop: 10 }}>
            {!editOpen ? (
              <>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}
                >
                  {description || 'No description yet.'}
                </Typography>
                {user && user.id === admin.id && (
                  <Button
                    onClick={() => setEditOpen(true)}
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<EditIcon style={{ fontSize: 13 }} />}
                    style={{ padding: '2px 10px', fontSize: '0.75rem' }}
                  >
                    Edit
                  </Button>
                )}
              </>
            ) : (
              <div className={classes.inputDiv} style={{ width: '100%' }}>
                <TextField
                  multiline
                  required
                  fullWidth
                  rows={2}
                  rowsMax={Infinity}
                  value={descInput}
                  onChange={(e) => setDescInput(e.target.value)}
                  variant="outlined"
                  size="small"
                />
                <div className={classes.submitBtns}>
                  <Button onClick={() => setEditOpen(false)} color="primary" variant="outlined" size="small">
                    Cancel
                  </Button>
                  <Button onClick={handleEditDescription} color="primary" variant="contained" size="small">
                    Update
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Admin */}
          <Typography
            variant="caption"
            style={{ color: theme.palette.text.secondary, marginTop: 8, display: 'flex', alignItems: 'center', gap: 4 }}
          >
            <PersonIcon style={{ fontSize: 13 }} />
            <span>Admin:</span>
            <Link
              component={RouterLink}
              to={`/u/${admin.username}`}
              style={{ color: theme.palette.primary.main, fontWeight: 700 }}
            >
              u/{admin.username}
            </Link>
          </Typography>
        </div>

        {/* Right panel */}
        <div className={classes.secondPanel}>
          {user && (
            <Button
              color="primary"
              variant={isSubscribed ? 'outlined' : 'contained'}
              startIcon={isSubscribed ? <CheckIcon style={{ fontSize: 14 }} /> : <AddIcon style={{ fontSize: 14 }} />}
              className={classes.joinBtn}
              onClick={handleSubJoin}
              size="small"
            >
              {isSubscribed ? 'Joined' : 'Join'}
            </Button>
          )}
        </div>
      </div>

      {/* ── Posts ── */}
      <div style={{ padding: '0 12px' }}>
        <PostFormModal fromSubreddit={{ subredditName, id }} />
        <SortTabBar sortBy={sortBy} handleTabChange={handleTabChange} />

        {postsLoading ? (
          <LoadingSpinner text="Loading posts..." />
        ) : (
          <>
            {subPage.posts.results.length !== 0 ? (
              subPage.posts.results.map((p) => (
                <PostCard key={p.id} post={p} toggleUpvote={toggleUpvote} toggleDownvote={toggleDownvote} />
              ))
            ) : (
              <div className={classes.noPosts}>
                <PostAddIcon style={{ fontSize: '3rem', opacity: 0.3, marginBottom: 12 }} />
                <Typography variant="h6" style={{ fontWeight: 700 }}>
                  No posts yet
                </Typography>
                <Typography variant="body2" style={{ opacity: 0.6, marginTop: 4 }}>
                  Be the first one to post in r/{subredditName}!
                </Typography>
              </div>
            )}
            {'next' in subPage.posts && (
              <LoadMoreButton handleLoadPosts={handleLoadPosts} loading={loadingMore} />
            )}
          </>
        )}
      </div>
    </Paper>
  );
};

export default SubPage;
