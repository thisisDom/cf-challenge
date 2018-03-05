import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { shallow } from 'enzyme';
import Issue from './Issue';
import testData from '../_mockTestData.js';

it('<Issue /> renders without crashing', () => {
  shallow(<Issue data={testData[0]}/>)
=======
import ReactDOM from 'react-dom';
=======
import { shallow } from 'enzyme';
>>>>>>> 7f7f160... Implement Sorting on issues
import Issue from './Issue';
import testData from '../_mockTestData.js';

it('<Issue /> renders without crashing', () => {
<<<<<<< HEAD
  const div = document.createElement('div');
  const data = testDate[0];
  ReactDOM.render(<Issue data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> 77a5642... Add package to run sass scripts with npm build & npm start
=======
  shallow(<Issue data={testData[0]}/>)
>>>>>>> 7f7f160... Implement Sorting on issues
});
