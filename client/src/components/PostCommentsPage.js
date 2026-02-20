import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPostComments,
  toggleUpvote,
  toggleDownvote,
} from '../reducers/postCommentsReducer';
import { notify } from '../reducers/notificationReducer';
import CommentInput from './CommentInput';
import { UpvoteButton, DownvoteButton } from './VoteButtons';
import EditDeleteMenu from './EditDeleteMenu';
import CommentsDisplay from './CommentsDisplay';
import SortCommentsMenu from './SortCommentsMenu';
import ErrorPage from './ErrorPage';
import LoadingSpinner from './LoadingSpinner';
import TimeAgo from 'timeago-react';
import { trimLink, prettifyLink, fixUrl } from '../utils/formatUrl';
import getErrorMsg from '../utils/getErrorMsg';
import parse from 'html-react-parser';

import {
  Paper,
  useMediaQuery,
  Typography,
  Link,
  Divider,
} from '@material-ui/core';
import { usePostCommentsStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CommentIcon from '@material-ui/icons/Comment';

const PostCommentsPage = () => {
  const { id: postId } = useParams();
  const post = useSelector((state) => state.postComments);
  const { user, darkMode } = useSelector((state) => state);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageError, setPageError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getComments = async () => {
      try {
        await dispatch(fetchPostComments(postId));
        setPageLoading(false);
      } catch (err) {
        setPageError(getErrorMsg(err));
      }
    };
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const classes = usePostCommentsStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  if (pageError) {
    return (
      <Paper variant="outlined" className={classes.mainPaper}>
        <ErrorPage errorMsg={pageError} />
      </Paper>
    );
  }

  if (!post || pageLoading) {
    return (
      <Paper variant="outlined" className={classes.mainPaper}>
        <LoadingSpinner text={'Fetching post comments...'} />
      </Paper>
    );
  }

  const {
    id,
    title,
    postType,
    textSubmission,
    linkSubmission,
    imageSubmission,
    subreddit,
    author,
    upvotedBy,
    downvotedBy,
    pointsCount,
    comments,
    commentCount,
    createdAt,
    updatedAt,
  } = post;

  const isUpvoted = user && upvotedBy.includes(user.id);
  const isDownvoted = user && downvotedBy.includes(user.id);

  const handleUpvoteToggle = async () => {
    try {
      if (isUpvoted) {
        const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
        dispatch(toggleUpvote(id, updatedUpvotedBy, downvotedBy));
      } else {
        const updatedUpvotedBy = [...upvotedBy, user.id];
        const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
        dispatch(toggleUpvote(id, updatedUpvotedBy, updatedDownvotedBy));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleDownvoteToggle = async () => {
    try {
      if (isDownvoted) {
        const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
        dispatch(toggleDownvote(id, updatedDownvotedBy, upvotedBy));
      } else {
        const updatedDownvotedBy = [...downvotedBy, user.id];
        const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
        dispatch(toggleDownvote(id, updatedDownvotedBy, updatedUpvotedBy));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const formattedLink =
    postType === 'Link' && trimLink(prettifyLink(linkSubmission), 70);

  const voteColor = isUpvoted ? '#FF6314' : isDownvoted ? '#7B7CFF' : theme.palette.text.secondary;

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <div className={classes.topPortion}>
        <div className={classes.votesWrapper}>
          <UpvoteButton
            user={user}
            body={post}
            handleUpvote={handleUpvoteToggle}
            size="small"
          />
          <Typography
            variant="caption"
            style={{ color: voteColor, fontWeight: 700, fontSize: '0.8rem' }}
          >
            {pointsCount}
          </Typography>
          <DownvoteButton
            user={user}
            body={post}
            handleDownvote={handleDownvoteToggle}
            size="small"
          />
        </div>
        <div className={classes.postDetails}>
          <Typography variant="caption" style={{ color: theme.palette.text.secondary, marginBottom: 4 }}>
            <Link
              component={RouterLink}
              to={`/r/${subreddit.subredditName}`}
              color="primary"
              style={{ fontWeight: 600 }}
            >
              r/{subreddit.subredditName}
            </Link>
            {' · '}
            <span>Posted by </span>
            <Link
              component={RouterLink}
              to={`/u/${author.username}`}
              color="inherit"
            >
              u/{author.username}
            </Link>
            {' · '}
            <TimeAgo datetime={new Date(createdAt)} />
            {createdAt !== updatedAt && (
              <em>
                {' · edited '}<TimeAgo datetime={new Date(updatedAt)} />
              </em>
            )}
          </Typography>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          {postType === 'Text' ? (
            <div style={{ lineHeight: 1.7 }}>{parse(textSubmission)}</div>
          ) : postType === 'Image' ? (
            <div className={classes.imagePost}>
              <a
                href={imageSubmission.imageLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={title}
                  src={imageSubmission.imageLink}
                  className={classes.image}
                />
              </a>
            </div>
          ) : (
            <Link
              href={fixUrl(linkSubmission)}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              {formattedLink} <OpenInNewIcon style={{ fontSize: 13, verticalAlign: 'middle' }} />
            </Link>
          )}
          <div className={classes.bottomBar}>
            <div className={classes.bottomButton}>
              <CommentIcon className={classes.commentIcon} style={{ fontSize: 16 }} />
              <Typography variant="caption" style={{ fontWeight: 600 }}>
                {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
              </Typography>
            </div>
            {user && user.id === author.id && (
              <EditDeleteMenu
                id={id}
                isMobile={isMobile}
                title={title}
                postType={postType}
                subreddit={subreddit}
                buttonType="buttonGroup"
                textSubmission={textSubmission}
                linkSubmission={linkSubmission}
              />
            )}
          </div>
          <CommentInput user={user} postId={id} isMobile={isMobile} />
          <SortCommentsMenu />
        </div>
      </div>
      <Divider className={classes.divider} />
      <CommentsDisplay comments={comments} postId={id} isMobile={isMobile} />
    </Paper>
  );
};

export default PostCommentsPage;

