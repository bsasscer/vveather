import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './../components/Weather';
import { shallow } from 'enzyme';

it('renders the weather without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
});

