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
                    title="Contacts | ORIL"
                    meta={[{ property: 'og:title', content: 'Contacts' }]}
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
