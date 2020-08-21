import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SET_LOADING_POKEDEX } from './type';
import action from './action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('PARSE URL', () => {
    const parse = action.parseURL(0, 10);
    expect(parse).toMatch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
  });

  it('GET POKE', () => {
    fetchMock.getOnce('https://pokeapi.co/api/v2/pokemon', {
      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore({
      loadingPokedex: true,
      loadingPokedexDetail: true,
      pokedex: [],
      totalPokedex: 0,
      pokedexdetail: [],
      offset: 0,
      limit: 100,
    });

    store.dispatch(action.getPokedexAction(false));
    expect(store.getActions()).toEqual([
      {
        payload: false,
        type: SET_LOADING_POKEDEX,
      },
    ]);
  });

  it('GET POKE DETAIL', () => {
    fetchMock.getOnce('https://pokeapi.co/api/v2/pokemon', {
      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore({
      loadingPokedex: true,
      loadingPokedexDetail: true,
      pokedex: [],
      totalPokedex: 0,
      pokedexdetail: [],
      offset: 0,
      limit: 100,
    });

    store.dispatch(action.getPokedexDetailAction(1));
    expect(store.getActions()).toEqual([
      {
        payload: false,
        type: SET_LOADING_POKEDEX,
      },
    ]);
  });
});
