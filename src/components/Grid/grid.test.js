import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Grid from './index';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('GRID RENDER WITH SPLIT', () => {
  act(() => {
    render(
      <Grid split={1} justifyCenter>
        <div>A</div>
      </Grid>,
      container,
    );
  });
  expect(container.textContent).toBe('A');
});
