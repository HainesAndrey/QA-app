import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './index.css';

import Question from './components/question/question';
import adults from './data/adults.json';
import children from './data/children.json';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/adults/:id" render={({match}) => (
              <Question questions={adults[match.params.id]}/>)}>
          </Route>
          <Route path="/children/:id" render={({match}) => (
              <Question questions={children[match.params.id]}/>)}>
          </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);
