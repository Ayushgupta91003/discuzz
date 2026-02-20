import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostFormModal from './components/PostFormModal';
import PostList from './components/PostList';
import PostCommentsPage from './components/PostCommentsPage';
import UserPage from './components/UserPage';
import SubPage from './components/SubPage';
import TopSubsPanel from './components/TopSubsPanel';
import SearchResults from './components/SearchResults';
import NotFoundPage from './components/NotFoundPage';

import { Container } from '@material-ui/core/';
import { useMainPaperStyles } from './styles/muiStyles';

const Routes = () => {
  const classes = useMainPaperStyles();

  return (
    <Switch>
      <Route exact path="/">
        <div className={classes.homepage}>
          <div className={classes.postsPanel}>
            <PostFormModal />
            <PostList />
          </div>
          <TopSubsPanel />
        </div>
      </Route>
      <Route exact path="/comments/:id">
        <Container disableGutters maxWidth="md" style={{ padding: '0 12px' }}>
          <PostCommentsPage />
        </Container>
      </Route>
      <Route exact path="/u/:username">
        <Container disableGutters maxWidth="md" style={{ padding: '0 12px' }}>
          <UserPage />
        </Container>
      </Route>
      <Route exact path="/r/:sub">
        <Container disableGutters maxWidth="md" style={{ padding: '0 12px' }}>
          <SubPage />
        </Container>
      </Route>
      <Route exact path="/search/:query">
        <Container disableGutters maxWidth="md" style={{ padding: '0 12px' }}>
          <SearchResults />
        </Container>
      </Route>
      <Route>
        <Container disableGutters maxWidth="md" style={{ padding: '0 12px' }}>
          <NotFoundPage />
        </Container>
      </Route>
    </Switch>
  );
};

export default Routes;

