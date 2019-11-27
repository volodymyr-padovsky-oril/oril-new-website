import React, {Component} from "react";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Contacts from "./components/Contacts";
import routes from "../routes";
import Snackbar from "../commons/SnackBar";
import {Helmet} from 'react-helmet';

import "./index.scss";
import '../index.css';

class Index extends Component {
    onChangePage = (path) => {
        this.setState({path});
    };

    render() {
        return (
            <>
                {/*<Helmet>*/}
                {/*    <title>ORIL</title>*/}
                {/*    <meta name="description" content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting." />*/}
                {/*    <meta name="theme-color" content="#000000" />*/}
                {/*    <meta property="og:title" content="European Travel Destinations"/>*/}
                {/*        <meta property="og:description" content="Offering tour packages for individuals or groups."/>*/}
                {/*            <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg"/>*/}
                {/*                <meta property="og:url" content="http://euro-travel-example.com/index.htm"/>*/}
                {/*</Helmet>*/}
                <Header redirect={this.onChangePage}/>
                {routes()}
                <Contacts/>
                <Footer/>
                {/*<Snackbar/>*/}
            </>
        );
    }
}

export default Index;
