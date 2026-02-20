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

import { Paper, Typography, Link, Divider, useMediaQuery, Chip } from '@material-ui/core';
import { usePostCommentsStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CommentIcon from '@material-ui/icons/Comment';
import ImageIcon from '@material-ui/icons/Image';
import LinkIcon from '@material-ui/icons/Link';
import SubjectIcon from '@material-ui/icons/Subject';

const PostCommentsPage = () => {
  const { id: postId } = useParams();
  const post = useSelector((state) => state.postComments);
  const { user } = useSelector((state) => state);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageError, setPageError] = useState(null);
  const dispatch = useDispatch();

  const classes = usePostCommentsStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

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
        <LoadingSpinner text="Fetching post..." />
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

  const formattedLink = postType === 'Link' && trimLink(prettifyLink(linkSubmission), 70);
  const voteColor = isUpvoted ? '#FF6314' : isDownvoted ? '#818cf8' : theme.palette.text.secondary;

  const typeIcon =
    postType === 'Text' ? <SubjectIcon style={{ fontSize: 13 }} /> :
    postType === 'Link' ? <LinkIcon style={{ fontSize: 13 }} /> :
    <ImageIcon style={{ fontSize: 13 }} />;

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <div className={classes.topPortion}>
        {/* ── Vote Column ── */}
        <div className={classes.votesWrapper}>
          <UpvoteButton user={user} body={post} handleUpvote={handleUpvoteToggle} />
          <Typography
            variant="caption"
            style={{
              color: voteColor,
              fontWeight: 800,
              fontSize: '0.8rem',
              lineHeight: 1,
              margin: '3px 0',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {pointsCount}
          </Typography>
          <DownvoteButton user={user} body={post} handleDownvote={handleDownvoteToggle} />
        </div>

        {/* ── Post Details ── */}
        <div className={classes.postDetails}>
          {/* Metadata */}
          <Typography
            variant="caption"
            style={{ color: theme.palette.text.secondary, marginBottom: 6, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}
          >
            <Chip
              icon={typeIcon}
              label={postType}
              size="small"
              variant="outlined"
              style={{ height: 20, fontSize: '0.68rem', fontWeight: 700 }}
            />
            <Link
              component={RouterLink}
              to={`/r/${subreddit.subredditName}`}
              style={{ color: theme.palette.primary.main, fontWeight: 700 }}
            >
              r/{subreddit.subredditName}
            </Link>
            <span>·</span>
            <span>Posted by</span>
            <Link
              component={RouterLink}
              to={`/u/${author.username}`}
              style={{ color: theme.palette.text.secondary, fontWeight: 600 }}
            >
              u/{author.username}
            </Link>
            <span>·</span>
            <TimeAgo datetime={new Date(createdAt)} />
            {createdAt !== updatedAt && (
              <em style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                · edited <TimeAgo datetime={new Date(updatedAt)} />
              </em>
            )}
          </Typography>

          {/* Title */}
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>

          {/* Content */}
          {postType === 'Text' && textSubmission ? (
            <div
              className="post-text-content"
              style={{ lineHeight: 1.75, color: theme.palette.text.primary }}
            >
              {parse(textSubmission)}
            </div>
          ) : postType === 'Image' ? (
            <div className={classes.imagePost}>
              <a href={imageSubmission.imageLink} target="_blank" rel="noopener noreferrer">
                <img alt={title} src={imageSubmission.imageLink} className={classes.image} />
              </a>
            </div>
          ) : postType === 'Link' ? (
            <Link
              href={fixUrl(linkSubmission)}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.875rem' }}
            >
              {formattedLink}
              <OpenInNewIcon style={{ fontSize: 13 }} />
            </Link>
          ) : null}

          {/* Action bar */}
          <div className={classes.bottomBar}>
            <div className={classes.bottomButton}>
              <CommentIcon className={classes.commentIcon} />
              <span>
                {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
              </span>
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

          {/* Comment Input */}
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

