import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { UpvoteButton, DownvoteButton } from './VoteButtons';
import CommentsAndButtons from './CommentAndButtons';
import ReplyAndButtons from './ReplyAndButtons';
import {
  toggleCommentUpvote,
  toggleCommentDownvote,
  toggleReplyUpvote,
  toggleReplyDownvote,
} from '../reducers/postCommentsReducer';
import { notify } from '../reducers/notificationReducer';
import TimeAgo from 'timeago-react';
import getErrorMsg from '../utils/getErrorMsg';

import { Typography, Link, useMediaQuery } from '@material-ui/core';
import { usePostCommentsStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import ForumIcon from '@material-ui/icons/Forum';

const CommentsDisplay = ({ comments, postId, isMobile }) => {
  const classes = usePostCommentsStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { darkMode } = useSelector((state) => state);

  const handleCommentUpvote = async (commentId) => {
    const { upvotedBy, downvotedBy } = comments.find((c) => c.id === commentId);
    try {
      if (upvotedBy.includes(user.id)) {
        dispatch(toggleCommentUpvote(postId, commentId, upvotedBy.filter((u) => u !== user.id), downvotedBy));
      } else {
        dispatch(toggleCommentUpvote(postId, commentId, [...upvotedBy, user.id], downvotedBy.filter((d) => d !== user.id)));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleCommentDownvote = async (commentId) => {
    const { upvotedBy, downvotedBy } = comments.find((c) => c.id === commentId);
    try {
      if (downvotedBy.includes(user.id)) {
        dispatch(toggleCommentDownvote(postId, commentId, downvotedBy.filter((d) => d !== user.id), upvotedBy));
      } else {
        dispatch(toggleCommentDownvote(postId, commentId, [...downvotedBy, user.id], upvotedBy.filter((u) => u !== user.id)));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleReplyUpvote = async (commentId, replyId) => {
    const { upvotedBy, downvotedBy } = comments
      .find((c) => c.id === commentId)
      .replies.find((r) => r.id === replyId);
    try {
      if (upvotedBy.includes(user.id)) {
        dispatch(toggleReplyUpvote(postId, commentId, replyId, upvotedBy.filter((u) => u !== user.id), downvotedBy));
      } else {
        dispatch(toggleReplyUpvote(postId, commentId, replyId, [...upvotedBy, user.id], downvotedBy.filter((d) => d !== user.id)));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleReplyDownvote = async (commentId, replyId) => {
    const { upvotedBy, downvotedBy } = comments
      .find((c) => c.id === commentId)
      .replies.find((r) => r.id === replyId);
    try {
      if (downvotedBy.includes(user.id)) {
        dispatch(toggleReplyDownvote(postId, commentId, replyId, downvotedBy.filter((d) => d !== user.id), upvotedBy));
      } else {
        dispatch(toggleReplyDownvote(postId, commentId, replyId, [...downvotedBy, user.id], upvotedBy.filter((u) => u !== user.id)));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  if (!comments || comments.length === 0) {
    return (
      <div className={classes.noCommentsBanner}>
        <ForumIcon style={{ fontSize: '3rem', marginBottom: 12, opacity: 0.3 }} />
        <Typography variant="h6" style={{ fontWeight: 700, marginBottom: 6 }}>
          No comments yet
        </Typography>
        <Typography variant="body2" style={{ opacity: 0.6 }}>
          Be the first to share your thoughts!
        </Typography>
      </div>
    );
  }

  const commentVoteColor = (upvotedBy, downvotedBy) =>
    user && upvotedBy.includes(user.id)
      ? '#FF6314'
      : user && downvotedBy.includes(user.id)
      ? '#818cf8'
      : theme.palette.text.secondary;

  return (
    <div className={classes.commentsContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={classes.wholeComment}>
          {/* ── Comment ── */}
          <div className={classes.commentWrapper}>
            {/* Vote column */}
            <div className={classes.commentVotesWrapper}>
              <UpvoteButton
                user={user}
                body={comment}
                handleUpvote={() => handleCommentUpvote(comment.id)}
                size="small"
              />
              <Typography
                variant="caption"
                style={{
                  color: commentVoteColor(comment.upvotedBy, comment.downvotedBy),
                  fontWeight: 800,
                  fontSize: '0.7rem',
                  lineHeight: 1,
                  margin: '1px 0',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {comment.pointsCount}
              </Typography>
              <DownvoteButton
                user={user}
                body={comment}
                handleDownvote={() => handleCommentDownvote(comment.id)}
                size="small"
              />
            </div>

            {/* Comment content */}
            <div className={classes.commentDetails}>
              <Typography
                variant="caption"
                style={{ marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <Link
                  component={RouterLink}
                  to={`/u/${comment.commentedBy.username}`}
                  style={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  u/{comment.commentedBy.username}
                </Link>
                <span style={{ color: theme.palette.text.secondary }}>·</span>
                <TimeAgo
                  datetime={new Date(comment.createdAt)}
                  style={{ color: theme.palette.text.secondary }}
                />
                {comment.createdAt !== comment.updatedAt && (
                  <em style={{ color: theme.palette.text.disabled, fontSize: '0.7rem' }}>
                    · edited
                  </em>
                )}
              </Typography>

              <CommentsAndButtons
                isMobile={isMobile}
                comment={comment}
                postId={postId}
                user={user}
              />
            </div>
          </div>

          {/* ── Replies ── */}
          {comment.replies && comment.replies.length > 0 && (
            <div className={classes.replyWrapper}>
              {comment.replies.map((reply) => (
                <div key={reply.id} className={classes.commentWrapper}>
                  {/* Reply vote column */}
                  <div className={classes.commentVotesWrapper}>
                    <UpvoteButton
                      user={user}
                      body={reply}
                      handleUpvote={() => handleReplyUpvote(comment.id, reply.id)}
                      size="small"
                    />
                    <Typography
                      variant="caption"
                      style={{
                        color: commentVoteColor(reply.upvotedBy, reply.downvotedBy),
                        fontWeight: 800,
                        fontSize: '0.7rem',
                        lineHeight: 1,
                        margin: '1px 0',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {reply.pointsCount}
                    </Typography>
                    <DownvoteButton
                      user={user}
                      body={reply}
                      handleDownvote={() => handleReplyDownvote(comment.id, reply.id)}
                      size="small"
                    />
                  </div>

                  {/* Reply content */}
                  <div className={classes.commentDetails}>
                    <Typography
                      variant="caption"
                      style={{ marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      <Link
                        component={RouterLink}
                        to={`/u/${reply.repliedBy.username}`}
                        style={{ fontWeight: 700, color: theme.palette.primary.main }}
                      >
                        u/{reply.repliedBy.username}
                      </Link>
                      <span style={{ color: theme.palette.text.secondary }}>·</span>
                      <TimeAgo
                        datetime={new Date(reply.createdAt)}
                        style={{ color: theme.palette.text.secondary }}
                      />
                    </Typography>

                    <ReplyAndButtons
                      isMobile={isMobile}
                      reply={reply}
                      comment={comment}
                      postId={postId}
                      user={user}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsDisplay;
