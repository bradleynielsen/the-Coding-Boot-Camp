import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
			<Route path="/:subredditId" component={Listing} />

			<IndexRoute component={Listing} />
    </Route>
  </Router>
);
