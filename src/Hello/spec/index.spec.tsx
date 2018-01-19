import * as React from 'react';
import * as enzyme from 'enzyme';

import Hello from '../';

describe('<Show /> Tests', () => {
  it('renders the heading', () => {
    const result = enzyme.shallow(<Hello />).contains(<h1>Hello!</h1>);
    expect(result).toBeTruthy();
  });
});
