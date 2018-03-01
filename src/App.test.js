import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('<App/> renders without crashing', () => {
<<<<<<< HEAD
  shallow(<App />);
=======
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> 77a5642... Add package to run sass scripts with npm build & npm start
});
