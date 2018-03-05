import React from 'react';
import { shallow } from 'enzyme';
import Issue from './Issue';
import testData from '../_mockTestData.js';

it('<Issue /> renders without crashing', () => {
  shallow(<Issue data={testData[0]}/>)
});
