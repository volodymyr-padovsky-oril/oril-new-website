import { createAction } from 'redux-actions';

export const SEND_GET_IN_TOUCH_MESSAGE_REQUEST = 'SEND_GET_IN_TOUCH_MESSAGE_REQUEST';
export const SEND_GET_IN_TOUCH_MESSAGE_SUCCESS = 'SEND_GET_IN_TOUCH_MESSAGE_SUCCESS';
export const SEND_GET_IN_TOUCH_MESSAGE_FAILURE = 'SEND_GET_IN_TOUCH_MESSAGE_FAILURE';

export const sendGetInTouchMessageRequest = createAction(SEND_GET_IN_TOUCH_MESSAGE_REQUEST);
export const sendGetInTouchMessageSuccess = createAction(SEND_GET_IN_TOUCH_MESSAGE_SUCCESS);
export const sendGetInTouchMessageFailure = createAction(SEND_GET_IN_TOUCH_MESSAGE_FAILURE);