import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './index.css';

import Question from './components/question/question';

import adultQuestions from './data/adultQuestions.json';
import childQuestions from './data/childQuestions.json';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/adults">
              <Question questions={adultQuestions}/>
          </Route>
          <Route path="/children">
              <Question questions={childQuestions}/>
          </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);
