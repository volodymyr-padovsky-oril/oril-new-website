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
            yield put(sendGetInTouchMessageSuccess('Thank you for your message, we will get back to you within 24 hours'));
        } else{
            yield put(sendGetInTouchMessageFailure('Sorry, there seem to be a problem, please contact us directly at contact@oril.co'));
        }
    } catch (e) {
        console.log(SEND_GET_IN_TOUCH_MESSAGE_REQUEST, e);
        yield put(sendGetInTouchMessageFailure('Sorry, there seem to be a problem, please contact us directly at contact@oril.co'));
    }
}

function* watchMessageSaga() {
    yield takeEvery(SEND_GET_IN_TOUCH_MESSAGE_REQUEST, messageSaga);
}

export default watchMessageSaga;