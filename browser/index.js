'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
import SinglePuppyContainer from './SinglePuppyContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container flexbox-container">
        <div className="jumbotron">
          <Route exact path="/puppies" component={AllPuppiesContainer} />
          <Route path="/puppies/:puppyId" component={SinglePuppyContainer} />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
