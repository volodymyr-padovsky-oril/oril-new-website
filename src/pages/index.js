import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import SEOMetaTags from "../components/SEOMetaTags";
import axios from 'axios';

class Index extends React.Component {

    static async getInitialProps(ctx) {
        const res = await axios.get('https://ipapi.co/json/');
        return {data: res.data}
    }

    render() {
        console.log('data', this.props.data)
        return (
            <>
                <SEOMetaTags
                    title={"ORIL"}
                    url={"/"}
                />
                <Header/>
                <Home/>
                <Contacts data={this.props.data}/>
                <Footer/>
            </>
        )
    }
}

export default Index;
