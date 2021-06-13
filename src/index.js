import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './index.css';

import Question from './components/question/question';

import adultQuestions1 from './data/block1/adultQuestions.json';
import childQuestions1 from './data/block1/childQuestions.json';

import adultQuestions2 from './data/block2/adultQuestions.json';
import childQuestions2 from './data/block2/childQuestions.json';

import adultQuestions3 from './data/block3/adultQuestions.json';
import childQuestions3 from './data/block3/childQuestions.json';

import adultQuestions4 from './data/block4/adultQuestions.json';
import childQuestions4 from './data/block4/childQuestions.json';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/block1/adults">
              <Question questions={adultQuestions1}/>
          </Route>
          <Route path="/block1/children">
              <Question questions={childQuestions1}/>
          </Route>

          <Route path="/block2/adults">
              <Question questions={adultQuestions2}/>
          </Route>
          <Route path="/block2/children">
              <Question questions={childQuestions2}/>
          </Route>

          <Route path="/block3/adults">
              <Question questions={adultQuestions3}/>
          </Route>
          <Route path="/block3/children">
              <Question questions={childQuestions3}/>
          </Route>

          <Route path="/block4/adults">
              <Question questions={adultQuestions4}/>
          </Route>
          <Route path="/block4/children">
              <Question questions={childQuestions4}/>
          </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);
