import { combineReducers } from 'redux'
import { FactsState, catFacts } from './reducers/facts';

export const RootReducer = combineReducers({
  catFacts,
});

export type RootState = {
  catFacts: FactsState,
};