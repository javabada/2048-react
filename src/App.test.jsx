import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Grid from './Grid';

describe('<App />', () => {
  it('renders a <Grid /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Grid).length).toBe(1);
  });
});
