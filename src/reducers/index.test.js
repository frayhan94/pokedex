import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';

const store = createStore(reducers, applyMiddleware(thunk));

describe('REDUCER TEST', () => {
  it('GET POKE', () => {
    expect(store.getState().pokedexReducer).toEqual({
      limit: 100,
      loadingPokedex: true,
      loadingPokedexDetail: true,
      offset: 0,
      pokedex: [],
      pokedexdetail: [],
      totalPokedex: 0,
    });
  });
});
