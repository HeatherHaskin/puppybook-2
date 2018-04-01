'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePuppyContainer from './SinglePuppyContainer';

ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
      <div className="jumbotron">
        <Router>
          <Switch>
            <Route exact path="/puppies" component={AllPuppiesContainer} />
            <Route path="/puppies/:puppyId" component={SinglePuppyContainer} />
            <Route component={AllPuppiesContainer} />
          </Switch>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
