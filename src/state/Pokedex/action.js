import { Promise } from 'es6-promise';
import {
  getPokedex,
  getPokedexDetail,
  addOffset,
  setLoadingPokedex,
  setLoadingPokedexDetail,
  setTotalPokedex,
} from './reducer';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';
const parseURL = (offset, limit) => {
  return `${baseURL}?offset=${offset}&limit=${limit}`;
};
const getPokedexAction = (isScroll = false) => async (dispatch, getState) => {
  const { pokedexReducer } = getState();
  try {
    const offsetFactor = 100;
    const { offset, limit } = pokedexReducer;
    let url = parseURL(offset, limit);
    if (isScroll) {
      url = parseURL(offset + offsetFactor, limit);
    }
    const response = await fetch(url).then(res => res.json());
    if (offset === 0) {
      dispatch(setTotalPokedex(response.count));
    }
    if (isScroll === true) {
      dispatch(addOffset(pokedexReducer.offset + offsetFactor));
    }
    const allData = pokedexReducer.pokedex.concat(response.results);
    dispatch(getPokedex(allData));
    dispatch(setLoadingPokedex(false));
    return await Promise.resolve(response.results);
  } catch (e) {
    dispatch(setLoadingPokedex(false));
    return Promise.reject(e);
  }
};

const getPokedexDetailAction = id => async dispatch => {
  try {
    const url = `${baseURL}/${id}`;
    const response = await fetch(url).then(res => res.json());
    dispatch(getPokedexDetail(response));
    dispatch(setLoadingPokedexDetail(false));
    return await Promise.resolve(response);
  } catch (e) {
    dispatch(setLoadingPokedex(false));
    return Promise.reject(e);
  }
};

export default {
  getPokedexAction,
  getPokedexDetailAction,
  parseURL,
};
