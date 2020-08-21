import { handleActions, createActions } from 'redux-actions';
import {
  GET_POKEDEX,
  GET_POKEDEX_DETAIL,
  ADD_OFFSET,
  SET_TOTAL_POKEDEX,
  SET_LOADING_POKEDEX,
  SET_LOADING_POKEDEX_DETAIL,
} from './type';

const initialState = {
  loadingPokedex: true,
  loadingPokedexDetail: true,
  pokedex: [],
  totalPokedex: 0,
  pokedexdetail: [],
  offset: 0,
  limit: 100,
};

const {
  getPokedex,
  getPokedexDetail,
  addOffset,
  setLoadingPokedex,
  setLoadingPokedexDetail,
  setTotalPokedex,
} = createActions(
  GET_POKEDEX,
  GET_POKEDEX_DETAIL,
  ADD_OFFSET,
  SET_TOTAL_POKEDEX,
  SET_LOADING_POKEDEX,
  SET_LOADING_POKEDEX_DETAIL,
);

const reducer = handleActions(
  {
    [getPokedex](state, { payload: pokedex }) {
      return {
        ...state,
        pokedex,
      };
    },

    [getPokedexDetail](state, { payload: pokedexdetail }) {
      return {
        ...state,
        pokedexdetail,
      };
    },

    [addOffset](state, { payload: offset }) {
      return {
        ...state,
        offset,
      };
    },

    [setLoadingPokedex](state, { payload: loadingPokedex }) {
      return {
        ...state,
        loadingPokedex,
      };
    },
    [setLoadingPokedexDetail](state, { payload: loadingPokedexDetail }) {
      return {
        ...state,
        loadingPokedexDetail,
      };
    },

    [setTotalPokedex](state, { payload: totalPokedex }) {
      return {
        ...state,
        totalPokedex,
      };
    },
  },
  initialState,
);

export {
  reducer,
  initialState,
  getPokedex,
  getPokedexDetail,
  addOffset,
  setLoadingPokedex,
  setLoadingPokedexDetail,
  setTotalPokedex,
};
