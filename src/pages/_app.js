import React from "react";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../store/configure-store.js'
import Layout from "../components/Layout/Layout";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    id: 'GTM-TGVMH8P'
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ctx})
        }
        return {pageProps}
    }

    componentDidMount () {
        TagManager.initialize(tagManagerArgs)
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <>
                <Layout>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </Layout>
            </>
        )
    }

}

export default withRedux(configureStore)(withReduxSaga(MyApp))
