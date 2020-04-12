import { all } from 'redux-saga/effects'
import { facts } from 'store/sagas/facts';

export default function* rootSaga() {
  yield all([
    facts(),
  ]);
};
