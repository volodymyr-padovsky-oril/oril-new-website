// pages/_app.js
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import {SEND_GET_IN_TOUCH_MESSAGE_FAILURE, SEND_GET_IN_TOUCH_MESSAGE_SUCCESS} from "../actions/message";
import {CLOSE_SNACKBAR, OPEN_SNACKBAR} from "../actions/helper";

const reducer = (state = {foo: ''}, action) => {
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

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        // ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}

export default withRedux(makeStore)(MyApp);