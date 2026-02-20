import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchResults,
  toggleUpvote,
  toggleDownvote,
  loadSearchPosts,
} from '../reducers/searchReducer';
import { notify } from '../reducers/notificationReducer';
import PostCard from './PostCard';
import LoadMoreButton from './LoadMoreButton';
import LoadingSpinner from './LoadingSpinner';
import getErrorMsg from '../utils/getErrorMsg';

import { Paper, Typography, Divider } from '@material-ui/core';
import { useSearchPageStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const SearchResults = () => {
  const classes = useSearchPageStyles();
  const theme = useTheme();
  const { query } = useParams();
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        await dispatch(setSearchResults(query));
        setLoading(false);
        if (page !== 1) setPage(1);
      } catch (err) {
        dispatch(notify(getErrorMsg(err), 'error'));
        setLoading(false);
      }
    };
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      await dispatch(loadSearchPosts(query, page + 1));
      setPage((prev) => prev + 1);
      setLoadingMore(false);
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      {/* ── Search Header ── */}
      <Paper
        variant="outlined"
        className={classes.infoPaper}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 18px',
          background: theme.palette.type === 'dark' ? 'rgba(255,99,20,0.06)' : 'rgba(255,99,20,0.04)',
          borderColor: 'rgba(255,99,20,0.25)',
        }}
      >
        <SearchIcon style={{ color: theme.palette.primary.main, fontSize: 22 }} />
        <div>
          <Typography variant="caption" style={{ opacity: 0.6, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
            Search results
          </Typography>
          <Typography variant="subtitle1" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            "{query}"
          </Typography>
        </div>
      </Paper>

      <Divider style={{ margin: '0' }} />

      {/* ── Results ── */}
      {loading ? (
        <LoadingSpinner text="Searching posts..." />
      ) : (
        <>
          {!searchResults || searchResults.results.length === 0 ? (
            <div className={classes.noResults}>
              <SentimentVeryDissatisfiedIcon className={classes.sorryIcon} />
              <Typography variant="h6" style={{ fontWeight: 700 }}>
                No results found
              </Typography>
              <Typography variant="body2" style={{ opacity: 0.6, marginTop: 6 }}>
                We couldn't find any posts matching "{query}". Try a different keyword.
              </Typography>
            </div>
          ) : (
            <>
              {searchResults.results.map((p) => (
                <PostCard
                  key={p.id}
                  post={p}
                  toggleUpvote={toggleUpvote}
                  toggleDownvote={toggleDownvote}
                />
              ))}
              {'next' in searchResults && (
                <div className={classes.loadBtnWrapper}>
                  <LoadMoreButton handleLoadPosts={handleLoadMore} loading={loadingMore} />
                </div>
              )}
            </>
          )}
        </>
      )}
    </Paper>
  );
};

export default SearchResults;
