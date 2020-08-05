import {
    SEND_GET_IN_TOUCH_MESSAGE_SUCCESS,
    SEND_GET_IN_TOUCH_MESSAGE_FAILURE
} from '../actions/message';

import {
    OPEN_SNACKBAR,
    CLOSE_SNACKBAR,
} from '../actions/helper';

const initialState = {
    text: '',
    isSnackbarOpen: false,
    isMenuExpanded: false
};

const helper = (state = initialState, action) => {
    switch (action.type) {
        case SEND_GET_IN_TOUCH_MESSAGE_SUCCESS:
        case SEND_GET_IN_TOUCH_MESSAGE_FAILURE:
        case OPEN_SNACKBAR:
            return {
                ...state,
                text: action.payload,
                isSnackbarOpen: true
            };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                text: '',
                isSnackbarOpen: false
            };
        default:
            return state
    }
};

export default helper;