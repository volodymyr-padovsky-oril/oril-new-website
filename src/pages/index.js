import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import Head from 'next/head'
import { NextSeo } from 'next-seo';

class Index extends React.Component {

    render() {
        return (
            <>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.example.com/page',
                        title: 'Open Graph Title',
                        description: 'Open Graph Description',
                        images: [
                            {
                                url: 'https://www.example.ie/og-image.jpg',
                                width: 800,
                                height: 600,
                                alt: 'Og Image Alt',
                            },
                            {
                                url: 'https://www.example.ie/og-image-2.jpg',
                                width: 800,
                                height: 600,
                                alt: 'Og Image Alt 2',
                            },
                        ],
                    }}
                />
                <Header/>
                <Home/>
                <Contacts/>
                <Footer/>
            </>
        )
    }
}

export default Index;
