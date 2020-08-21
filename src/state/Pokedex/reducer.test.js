import { reducer } from './reducer';
import * as types from './type';

describe('POKEDEX REDUCER', () => {
  it('RETURN INITIAL STATE', () => {
    expect(reducer(undefined, {})).toEqual({
      loadingPokedex: true,
      loadingPokedexDetail: true,
      pokedex: [],
      totalPokedex: 0,
      pokedexdetail: [],
      offset: 0,
      limit: 100,
    });
  });

  it('GET POKEDEX', () => {
    expect(
      reducer([], {
        type: types.GET_POKEDEX,
        payload: [
          {
            name: 'cloyster',
            url: 'https://pokeapi.co/api/v2/pokemon/91/',
          },
        ],
      }),
    ).toEqual({
      pokedex: [
        {
          name: 'cloyster',
          url: 'https://pokeapi.co/api/v2/pokemon/91/',
        },
      ],
    });
  });

  it('GET POKEDEX DETAIL', () => {
    expect(
      reducer([], {
        type: types.GET_POKEDEX_DETAIL,
        payload: {
          abilities: [
            {
              ability: {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/',
              },
              is_hidden: false,
              slot: 1,
            },
            {
              ability: {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/',
              },
              is_hidden: true,
              slot: 3,
            },
          ],
        },
      }),
    ).toEqual({
      pokedexdetail: {
        abilities: [
          {
            ability: {
              name: 'overgrow',
              url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: 'chlorophyll',
              url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            is_hidden: true,
            slot: 3,
          },
        ],
      },
    });
  });

  it('ADD OFFSET', () => {
    expect(
      reducer([], {
        type: types.ADD_OFFSET,
        payload: 10,
      }),
    ).toEqual({
      offset: 10,
    });
  });

  it('SET LOADING POKEDEX', () => {
    expect(
      reducer([], {
        type: types.SET_LOADING_POKEDEX,
        payload: false,
      }),
    ).toEqual({
      loadingPokedex: false,
    });
  });

  it('SET LOADING POKEDEX DETAIL', () => {
    expect(
      reducer([], {
        type: types.SET_LOADING_POKEDEX_DETAIL,
        payload: false,
      }),
    ).toEqual({
      loadingPokedexDetail: false,
    });
  });

  it('SET TOTAL POKEDEX', () => {
    expect(
      reducer([], {
        type: types.SET_TOTAL_POKEDEX,
        payload: 100,
      }),
    ).toEqual({
      totalPokedex: 100,
    });
  });
});
