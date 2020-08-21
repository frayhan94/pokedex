import { combineReducers } from 'redux';
import { pokedexReducer } from '../state/index';

const reducers = combineReducers({
  pokedexReducer,
});

export default reducers;
