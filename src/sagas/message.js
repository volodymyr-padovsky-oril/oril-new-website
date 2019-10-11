import { call, put, takeEvery } from 'redux-saga/effects';

import { sendGetInTouchMail } from '../api/message';

import {
    SEND_GET_IN_TOUCH_MESSAGE_REQUEST,
    sendGetInTouchMessageSuccess,
    sendGetInTouchMessageFailure
} from '../actions/message';

function* messageSaga(action) {
    try {
        const response = yield call(sendGetInTouchMail, action.payload);
        if(parseInt(response.status) === 200){
            yield put(sendGetInTouchMessageSuccess('Message sent'));
        } else{
            yield put(sendGetInTouchMessageFailure('Message not sent'));
        }
    } catch (e) {
        console.log(SEND_GET_IN_TOUCH_MESSAGE_REQUEST, e);
        yield put(sendGetInTouchMessageFailure('Message not sent'));
    }
}

function* watchMessageSaga() {
    yield takeEvery(SEND_GET_IN_TOUCH_MESSAGE_REQUEST, messageSaga);
}

export default watchMessageSaga;