import { RootState } from "../reducers";

export const getFacts = (state: RootState) => {
  return state.catFacts.facts;
};