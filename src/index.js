import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Question from './components/question/question';
import childQuestions from './data/childQuestions.json';
import adultQuestions from './data/adultQuestions.json';

ReactDOM.render(
  <>
    <Question questions={childQuestions}/>
  </>,
  document.getElementById('root')
);
