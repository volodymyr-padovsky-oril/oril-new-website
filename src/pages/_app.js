import React from "react";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../store/configure-store.js'
import Layout from "../components/Layout/Layout";
import TagManager from 'react-gtm-module';
import '../components/Portfolio/_portfolio.scss';
import '../components/Home/components/OurWorks/_our-works.scss';
import Head from "next/head";

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
                        <Head>
                            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                            <link rel="manifest" href="/site.webmanifest" />
                            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                            <meta name="theme-color" content="#ffffff" />
                        </Head>
                        <Component {...pageProps} />
                    </Provider>
                </Layout>
            </>
        )
    }

}

export default withRedux(configureStore)(withReduxSaga(MyApp))
