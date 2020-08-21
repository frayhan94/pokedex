import React from 'react';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import PokeDetail from './index';

const mockStore = configureMockStore();

describe('RENDER POKE DETAIL', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      pokedexReducer: {
        loadingPokedexDetail: false,
        pokedexdetail: {
          base_experience: 4,
          weight: 10,
          height: 20,
          name: 'ABC',
          sprites: {
            front_default: 'http://google.com',
          },
        },
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = renderer.create(
      <Provider store={store}>
        <PokeDetail match={{ params: { id: 1 } }} />
      </Provider>,
    );
  });

  it('RENDER CORRECTLY', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
