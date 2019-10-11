import { all } from 'redux-saga/effects';
import message from './message';

export default function* rootSaga() {
    yield all([
        message()
    ]);
}