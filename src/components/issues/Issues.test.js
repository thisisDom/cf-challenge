import React from 'react';
import { shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios'
import Issues from './Issues';

afterEach(() => {
    mockAxios.reset();
});

it('<Issues /> renders without crashing', () => {
  shallow(<Issues />);
});
