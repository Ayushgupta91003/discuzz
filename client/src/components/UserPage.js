import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, loadUserPosts } from '../reducers/userPageReducer';
import { notify } from '../reducers/notificationReducer';
import UserPostCard from './UserPostCard';
import LoadMoreButton from './LoadMoreButton';
import ErrorPage from './ErrorPage';
import LoadingSpinner from './LoadingSpinner';
import getErrorMsg from '../utils/getErrorMsg';
import getCircularAvatar from '../utils/cloudinaryTransform';

import {
  Paper,
  Typography,
  Avatar,
  Divider,
  Chip,
} from '@material-ui/core';
import { useUserPageStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import CakeIcon from '@material-ui/icons/Cake';
import ArticleIcon from '@material-ui/icons/Description';
import CommentIcon from '@material-ui/icons/ModeComment';
import StarIcon from '@material-ui/icons/Star';
import PostAddIcon from '@material-ui/icons/PostAdd';

const UserPage = () => {
  const classes = useUserPageStyles();
  const theme = useTheme();
  const { username } = useParams();
  const dispatch = useDispatch();
  const userPage = useSelector((state) => state.userPage);
  const loggedUser = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageError, setPageError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        await dispatch(fetchUser(username));
        setPageLoading(false);
      } catch (err) {
        setPageError(getErrorMsg(err));
      }
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  if (pageError) {
    return (
      <Paper variant="outlined" className={classes.mainPaper}>
        <ErrorPage errorMsg={pageError} />
      </Paper>
    );
  }

  if (!userPage || pageLoading) {
    return (
      <Paper variant="outlined" className={classes.mainPaper}>
        <LoadingSpinner text="Fetching profile..." />
      </Paper>
    );
  }

  const { userData, posts } = userPage;
  const { avatar, createdAt, totalComments, karmaPoints } = userData;
  const totalKarma = (karmaPoints.commentKarma || 0) + (karmaPoints.postKarma || 0);

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      await dispatch(loadUserPosts(username, page + 1));
      setPage((prev) => prev + 1);
      setLoadingMore(false);
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const joinedDate = String(new Date(createdAt)).split(' ').slice(1, 4).join(' ');

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      {/* ── Profile Header ── */}
      <div className={classes.userInfoWrapper}>
        <div className={classes.avatarWrapper}>
          <Avatar
            className={classes.avatar}
            alt={username}
            src={avatar ? getCircularAvatar(avatar) : null}
          >
            {!avatar && username[0].toUpperCase()}
          </Avatar>
        </div>

        <div className={classes.rightWrapper}>
          <Typography variant="h5" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            u/{username}
          </Typography>

          <Typography
            variant="body2"
            style={{
              color: theme.palette.text.secondary,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginTop: 4,
            }}
          >
            <CakeIcon style={{ fontSize: 14 }} /> Joined {joinedDate}
          </Typography>

          {/* Stats row */}
          <div className={classes.twoItemsDiv} style={{ marginTop: 14, gap: 10, flexWrap: 'wrap' }}>
            <Chip
              icon={<StarIcon style={{ fontSize: 13 }} />}
              label={`${totalKarma.toLocaleString()} karma`}
              color="primary"
              size="small"
              style={{ fontWeight: 700, height: 26 }}
            />
            <Chip
              icon={<ArticleIcon style={{ fontSize: 13 }} />}
              label={`${posts.results.length} posts`}
              variant="outlined"
              size="small"
              style={{ height: 26 }}
            />
            <Chip
              icon={<CommentIcon style={{ fontSize: 13 }} />}
              label={`${(totalComments || 0).toLocaleString()} comments`}
              variant="outlined"
              size="small"
              style={{ height: 26 }}
            />
          </div>
        </div>
      </div>

      <Divider style={{ margin: '0 16px' }} />

      {/* ── Posts Section ── */}
      <Paper
        elevation={0}
        className={classes.postsPaper}
        style={{ background: 'transparent' }}
      >
        <Typography
          variant="subtitle2"
          style={{
            fontWeight: 700,
            padding: '14px 16px 8px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: theme.palette.text.secondary,
            fontSize: '0.7rem',
          }}
        >
          Posts
        </Typography>

        {posts.results.length !== 0 ? (
          posts.results.map((p) => <UserPostCard key={p.id} post={p} />)
        ) : (
          <div className={classes.noPosts}>
            <PostAddIcon style={{ fontSize: '3rem', opacity: 0.3, marginBottom: 12 }} />
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              No posts yet
            </Typography>
            <Typography variant="body2" style={{ opacity: 0.6, marginTop: 4 }}>
              {loggedUser && loggedUser.username === username
                ? 'Create your first post!'
                : `u/${username} hasn't posted anything yet.`}
            </Typography>
          </div>
        )}

        {'next' in posts && (
          <div className={classes.loadBtnWrapper}>
            <LoadMoreButton handleLoadPosts={handleLoadMore} loading={loadingMore} />
          </div>
        )}
      </Paper>
    </Paper>
  );
};

export default UserPage;
