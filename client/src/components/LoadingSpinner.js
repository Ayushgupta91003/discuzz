import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

/* ── Full-page / inline spinner ── */
const LoadingSpinner = ({ text }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      padding: '4em 2em',
    }}
  >
    <CircularProgress size={36} thickness={4} color="primary" />
    {text && (
      <Typography
        variant="caption"
        style={{ opacity: 0.55, fontWeight: 600, letterSpacing: '0.04em' }}
      >
        {text}
      </Typography>
    )}
  </div>
);

/* ── Single PostCard skeleton ── */
export const PostCardSkeleton = () => (
  <div
    style={{
      display: 'flex',
      borderRadius: 10,
      marginBottom: 8,
      overflow: 'hidden',
      border: '1px solid rgba(139,148,158,0.15)',
    }}
  >
    {/* vote col */}
    <div
      style={{
        width: 40,
        background: 'rgba(139,148,158,0.07)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 0',
        gap: 6,
        flexShrink: 0,
      }}
    >
      <Skeleton variant="circle" width={20} height={20} />
      <Skeleton variant="text" width={16} height={14} />
      <Skeleton variant="circle" width={20} height={20} />
    </div>
    {/* thumbnail */}
    <div style={{ padding: '0 10px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
      <Skeleton variant="rect" width={72} height={80} style={{ borderRadius: 6 }} />
    </div>
    {/* content */}
    <div style={{ flex: 1, padding: '12px 14px 10px 6px', minWidth: 0 }}>
      <Skeleton variant="text" width="80%" height={20} />
      <Skeleton variant="text" width="55%" height={16} style={{ marginTop: 6 }} />
      <Skeleton variant="text" width="40%" height={14} style={{ marginTop: 8 }} />
    </div>
  </div>
);

/* ── List of PostCard skeletons ── */
export const PostListSkeleton = ({ count = 4 }) => (
  <div>
    {Array.from({ length: count }).map((_, i) => (
      <PostCardSkeleton key={i} />
    ))}
  </div>
);

/* ── Sidebar skeleton ── */
export const SidebarSkeleton = () => (
  <div
    style={{
      width: 296,
      borderRadius: 10,
      border: '1px solid rgba(139,148,158,0.15)',
      padding: 16,
    }}
  >
    <Skeleton variant="text" width="60%" height={18} style={{ marginBottom: 12 }} />
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <Skeleton variant="text" width="55%" height={16} />
        <Skeleton variant="rect" width={52} height={24} style={{ borderRadius: 999 }} />
      </div>
    ))}
  </div>
);

/* ── Comment skeleton ── */
export const CommentSkeleton = () => (
  <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
    <Skeleton variant="circle" width={24} height={24} style={{ flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <Skeleton variant="text" width="30%" height={14} />
      <Skeleton variant="text" width="90%" height={16} style={{ marginTop: 6 }} />
      <Skeleton variant="text" width="76%" height={16} />
      <Skeleton variant="text" width="50%" height={16} />
    </div>
  </div>
);

export default LoadingSpinner;
