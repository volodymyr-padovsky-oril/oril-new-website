import {
    SEND_GET_IN_TOUCH_MESSAGE_SUCCESS,
    SEND_GET_IN_TOUCH_MESSAGE_FAILURE
} from '../actions/message';

const message = (state = '', action) => {
    switch (action.type) {
        case SEND_GET_IN_TOUCH_MESSAGE_SUCCESS:
        case SEND_GET_IN_TOUCH_MESSAGE_FAILURE:
        default:
            return state
    }
};

export default message;