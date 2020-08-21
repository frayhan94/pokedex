import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Card from './index';

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

it('CARD RENDER HEADER AND MEDIA', () => {
  act(() => {
    render(
      <Card alignCenter justifyCenter>
        <Card.Header>
          <Card.Media>
            <div>A</div>
          </Card.Media>
        </Card.Header>
      </Card>,
      container,
    );
  });
  expect(container.textContent).toBe('A');
});

it('CARD RENDER BODY', () => {
  act(() => {
    render(
      <Card>
        <Card.Body>
          <div>B</div>
        </Card.Body>
      </Card>,
      container,
    );
  });
  expect(container.textContent).toBe('B');
});

it('CARD RENDER FOOTER', () => {
  act(() => {
    render(
      <Card>
        <Card.Footer>
          <div>C</div>
        </Card.Footer>
      </Card>,
      container,
    );
  });
  expect(container.textContent).toBe('C');
});
