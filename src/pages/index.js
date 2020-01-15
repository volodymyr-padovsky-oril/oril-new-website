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
                    <title>The Rock (1996)</title>
                    <meta property="og:title" content="The Rock" />
                    <meta property="og:type" content="video.movie" />
                    <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
                    <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
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
