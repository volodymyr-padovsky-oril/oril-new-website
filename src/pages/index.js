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
        return (
            <>
                <SEOMetaTags
                    title={"ORIL"}
                    url={"/"}
                    description={"One-stop shop for your digital product"}
                    image={"https://oril.co/assets/img/link-logo.png"}
                    openGraph={{
                        description: "One-stop shop for your digital product",
                        image: "https://oril.co/assets/img/link-logo.png"
                    }}
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
