import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { UpvoteButton, DownvoteButton } from './VoteButtons';
import { notify } from '../reducers/notificationReducer';
import EditDeleteMenu from './EditDeleteMenu';
import getEditedThumbail from '../utils/cloudinaryTransform';
import { trimLink, prettifyLink, fixUrl } from '../utils/formatUrl';
import TimeAgo from 'timeago-react';
import getErrorMsg from '../utils/getErrorMsg';

import {
  Paper,
  Typography,
  useMediaQuery,
  CardMedia,
  Link,
  Button,
} from '@material-ui/core';
import { useCardStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import MessageIcon from '@material-ui/icons/Message';
import LinkIcon from '@material-ui/icons/Link';
import ImageIcon from '@material-ui/icons/Image';
import CommentIcon from '@material-ui/icons/Comment';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const PostCard = ({ post, toggleUpvote, toggleDownvote }) => {
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
    commentCount,
    createdAt,
    updatedAt,
  } = post;

  const classes = useCardStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const dispatch = useDispatch();
  const { user, darkMode } = useSelector((state) => state);

  const isUpvoted = user && upvotedBy.includes(user.id);
  const isDownvoted = user && downvotedBy.includes(user.id);

  const handleUpvoteToggle = async () => {
    try {
      if (isUpvoted) {
        dispatch(toggleUpvote(id, upvotedBy.filter((u) => u !== user.id), downvotedBy));
      } else {
        dispatch(toggleUpvote(id, [...upvotedBy, user.id], downvotedBy.filter((d) => d !== user.id)));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleDownvoteToggle = async () => {
    try {
      if (isDownvoted) {
        dispatch(toggleDownvote(id, downvotedBy.filter((d) => d !== user.id), upvotedBy));
      } else {
        dispatch(toggleDownvote(id, [...downvotedBy, user.id], upvotedBy.filter((u) => u !== user.id)));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const linkToShow =
    postType === 'Link'
      ? linkSubmission
      : postType === 'Image'
      ? imageSubmission.imageLink
      : '';

  const formattedLink = trimLink(prettifyLink(linkToShow), 30);

  const voteColor = isUpvoted
    ? '#FF6314'
    : isDownvoted
    ? '#818cf8'
    : theme.palette.text.secondary;

  return (
    <Paper className={classes.root} variant="outlined">
      {/* ── Vote Column ── */}
      <div className={classes.votesWrapper}>
        <UpvoteButton user={user} body={post} handleUpvote={handleUpvoteToggle} size="small" />
        <Typography
          variant="caption"
          style={{
            color: voteColor,
            fontWeight: 800,
            fontSize: '0.75rem',
            lineHeight: 1,
            margin: '2px 0',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {pointsCount}
        </Typography>
        <DownvoteButton user={user} body={post} handleDownvote={handleDownvoteToggle} size="small" />
      </div>

      {/* ── Thumbnail ── */}
      <div className={classes.thumbnailWrapper}>
        {postType === 'Text' ? (
          <RouterLink to={`/comments/${id}`} tabIndex={-1}>
            <div className={classes.thumbnail}>
              <MessageIcon className={classes.thumbnailIcon} />
            </div>
          </RouterLink>
        ) : postType === 'Link' ? (
          <a href={fixUrl(linkSubmission)} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <div className={classes.thumbnail}>
              <LinkIcon className={classes.thumbnailIcon} />
            </div>
          </a>
        ) : (
          <a href={imageSubmission.imageLink} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <div className={classes.thumbnail} style={{ padding: 0 }}>
              <CardMedia
                style={{ width: '100%', height: '100%' }}
                image={getEditedThumbail(imageSubmission.imageLink)}
                title={title}
              />
            </div>
          </a>
        )}
      </div>

      {/* ── Post Content ── */}
      <div className={classes.postInfoWrapper}>
        {/* Metadata row */}
        <Typography
          variant="caption"
          style={{ color: theme.palette.text.secondary, marginBottom: 4, display: 'block' }}
        >
          <Link
            component={RouterLink}
            to={`/r/${subreddit.subredditName}`}
            style={{ color: theme.palette.primary.main, fontWeight: 700 }}
          >
            r/{subreddit.subredditName}
          </Link>
          {' · '}
          <span>u/{author.username}</span>
          {' · '}
          <TimeAgo datetime={new Date(createdAt)} />
          {createdAt !== updatedAt && ' · edited'}
        </Typography>

        {/* Title */}
        <Typography variant="body2" className={classes.title}>
          <RouterLink
            to={`/comments/${id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {title}
          </RouterLink>
          {postType !== 'Text' && formattedLink && (
            <Typography component="span" variant="caption" style={{ marginLeft: 6 }}>
              <Link
                href={postType === 'Link' ? fixUrl(linkSubmission) : imageSubmission.imageLink}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}
              >
                {formattedLink}
                <OpenInNewIcon style={{ fontSize: 10 }} />
              </Link>
            </Typography>
          )}
        </Typography>

        {/* Action bar */}
        <div className={classes.bottomBtns}>
          <Button
            startIcon={<CommentIcon style={{ fontSize: '0.9rem' }} />}
            className={classes.commentsBtn}
            component={RouterLink}
            to={`/comments/${id}`}
            size="small"
          >
            {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
          </Button>
          {user && user.id === author.id && (
            <EditDeleteMenu
              id={id}
              isMobile={isMobile}
              title={title}
              postType={postType}
              subreddit={subreddit}
              textSubmission={textSubmission}
              linkSubmission={linkSubmission}
            />
          )}
        </div>
      </div>
    </Paper>
  );
};

export default PostCard;
