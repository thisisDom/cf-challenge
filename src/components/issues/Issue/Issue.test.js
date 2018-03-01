import React from 'react';
import ReactDOM from 'react-dom';
import Issue from './Issue';
import testData from '../_IssuesData.test.js';

it('<Issue /> renders without crashing', () => {
  const div = document.createElement('div');
  const data = testDate[0];
  ReactDOM.render(<Issue data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
