import React, {Component} from "react";
import Header from "../commons/Header";
import Contacts from "./Contacts";

import "./index.scss";
import '../index.css';
import Home from "./Home";

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
                <Home/>
                <Contacts/>
            </>
        );
    }
}

export default Index;
