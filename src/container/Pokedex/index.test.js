import React from 'react';
import renderer from 'react-test-renderer';

import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Poke from './index';

const mockStore = configureMockStore();

describe('RENDER POKE DASHBOARD', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      pokedexReducer: {
        loadingPokedex: false,
        pokedex: [],
        totalPokedex: 0,
        offset: 0,
        limit: 100,
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = renderer.create(
      <Provider store={store}>
        <Poke />
      </Provider>,
    );
  });

  it('RENDER CORRECTLY', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
