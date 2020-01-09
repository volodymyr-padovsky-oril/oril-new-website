import React from "react";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../store/configure-store.js'
import Layout from "../components/Layout/Layout";
import Helmet from 'react-helmet';

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ctx})
        }
        return {pageProps}
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <>
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    title="ORIL"
                    meta={[
                        {
                            name: 'viewport',
                            content: 'width=device-width, initial-scale=1',
                        },
                        {property: 'og:title', content: 'ORIL'},
                    ]}
                />
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
