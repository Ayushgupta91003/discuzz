import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const btnStyle = (active, color, darkMode) => ({
  padding: 4,
  borderRadius: 4,
  color: active ? color : darkMode ? '#6e7681' : '#b0b8c1',
  transition: 'color 0.15s, background 0.15s',
});

export const UpvoteButton = ({ user, body, handleUpvote, size = 'small' }) => {
  const { darkMode } = useSelector((s) => s);
  const isUpvoted = user && body.upvotedBy.includes(user.id);
  const iconSize = size === 'small' ? '1.1rem' : '1.3rem';

  return (
    <Tooltip title={user ? 'Upvote' : 'Login to vote'} placement="left" arrow>
      <span>
        <IconButton
          onClick={user ? handleUpvote : undefined}
          disabled={!user}
          size="small"
          style={{
            ...btnStyle(isUpvoted, '#FF6314', darkMode),
            ...(isUpvoted && {
              backgroundColor: 'rgba(255,99,20,0.12)',
            }),
          }}
          disableRipple={!user}
        >
          <ArrowUpwardIcon style={{ fontSize: iconSize }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export const DownvoteButton = ({ user, body, handleDownvote, size = 'small' }) => {
  const { darkMode } = useSelector((s) => s);
  const isDownvoted = user && body.downvotedBy.includes(user.id);
  const iconSize = size === 'small' ? '1.1rem' : '1.3rem';

  return (
    <Tooltip title={user ? 'Downvote' : 'Login to vote'} placement="left" arrow>
      <span>
        <IconButton
          onClick={user ? handleDownvote : undefined}
          disabled={!user}
          size="small"
          style={{
            ...btnStyle(isDownvoted, '#818cf8', darkMode),
            ...(isDownvoted && {
              backgroundColor: 'rgba(129,140,248,0.12)',
            }),
          }}
          disableRipple={!user}
        >
          <ArrowDownwardIcon style={{ fontSize: iconSize }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};
