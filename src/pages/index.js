import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import Head from 'next/head'
import {NextSeo} from 'next-seo';

class Index extends React.Component {

  render() {
    return (
      <>
        {/*<Head>*/}
        {/*    <title>ORIL</title>*/}
        {/*    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>*/}
        {/*    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>*/}
        {/*    <meta property="og:url" content="https://oril.co"/>*/}
        {/*    <meta property="og:title" content="ORIL"/>*/}
        {/*    <meta property="og:type" content="website" />*/}
        {/*    <meta property="og:description"*/}
        {/*          content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting."/>*/}
        {/*    <meta property="og:image" content="https://oril.co/assets/img/link-logo.png"/>*/}
        {/*</Head>*/}

        <NextSeo
          title="ORIL"
          description="ORIL is a software development company"
          openGraph={{
            type: 'website',
            url: 'https://oril.co/',
            title: 'ORIL',
            description: 'ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting.',
            site_name: 'ORIL',
            images: [
              {
                url: 'https://oril.co/assets/img/link-logo.png',
                width: 800,
                height: 600,
                alt: 'Oril logo image',
              }
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
