import React from 'react';
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
});
