import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from './index';

describe('WRAPPER TEST', () => {
  it('RENDER CORRECTLY', () => {
    const wrapper = shallow(
      <Wrapper>
        <div>A</div>
      </Wrapper>,
    );
    expect(wrapper.exists()).toBeTruthy();
  });
});
