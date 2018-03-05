import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios'
import Issues from './Issues';

afterEach(() => {
    mockAxios.reset();
});

it('<Issues /> renders without crashing', () => {
  shallow(<Issues />);
=======
import ReactDOM from 'react-dom';
import Issues from './Issues';

it('<Issues/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Issues />, div);
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> 77a5642... Add package to run sass scripts with npm build & npm start
=======
import { shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios'
import Issues from './Issues';

afterEach(() => {
    mockAxios.reset();
});

it('<Issues /> renders without crashing', () => {
  shallow(<Issues />);
>>>>>>> 7f7f160... Implement Sorting on issues
});
