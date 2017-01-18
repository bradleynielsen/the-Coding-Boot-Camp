import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'
import SecondPage from '../pages/SecondPage'
import ThirdPage from '../pages/ThirdPage'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="secondpage" component={SecondPage}/>
      <Route path="thirdpage" component={ThirdPage}/>

      <IndexRoute component={Welcome} />
    </Route>
  </Router>
);
