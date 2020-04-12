import { takeEvery, call, put } from "redux-saga/effects";
import { FACTS_TYPES } from 'store/actions/facts';
import { getFacts as getFactsApi } from "store/api/facts";

function * getFacts() {
  try {
    const response = yield call(getFactsApi);

    put({ type: FACTS_TYPES.GET_FACTS_SUCCESS, payload: response });
  } catch (error) {
    put({ type: FACTS_TYPES.GET_FACTS_SUCCESS, payload: { error } });
  }
}

export function* facts() {
  yield takeEvery(FACTS_TYPES.GET_FACTS, getFacts);
};