import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import Helmet from "react-helmet";

class Index extends React.Component {

    render() {
        return (
            <>
                <Helmet
                    title="ORIL"
                    meta={[
                        {
                            name: 'viewport',
                            content: 'width=device-width, initial-scale=1',
                        },
                        {property: 'og:title', content: 'ORIL'},
                        {
                            property: 'og:description',
                            content: 'ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting.'
                        },
                        {property: "og:image", content: 'https://oril.co/assets/img/link-logo.png'},
                        {property: "og:url", content: 'oril.co'}
                    ]}
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
