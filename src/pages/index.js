import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import Head from 'next/head'

class Index extends React.Component {

    render() {
        return (
            <>
                <Head>
                    <title>Main page | ORIL</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta property="og:url" content="https://oril.co"/>
                    <meta property="og:title" content="ORIL"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:description"
                          content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting."/>
                    <meta property="og:image" content="https://oril.co/assets/img/link-logo.png"/>
                </Head>
                <Header/>
                <Home/>
                <Contacts/>
                <Footer/>
            </>
        )
    }
}

export default Index;
