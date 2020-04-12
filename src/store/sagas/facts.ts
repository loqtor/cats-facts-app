import { takeEvery } from "redux-saga/effects";
import { FACTS_TYPES } from 'store/actions/facts';

const getFacts = () => {
  console.log('At the example function, yes.');
}

export function* facts() {
  yield takeEvery(FACTS_TYPES.GET_FACTS, getFacts);
};