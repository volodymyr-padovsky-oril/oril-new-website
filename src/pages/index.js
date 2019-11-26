import React, {Component} from "react";
import Link from 'next/link';
import Header from "../commons/Header";
import Footer from "../commons/Footer";
// import Contacts from "./Contacts";
import Snackbar from "../commons/SnackBar";
import {Helmet} from 'react-helmet';
import {Route, Switch, Redirect} from "react-router-dom";


import "./index.scss";
// import Home from "./Home/components/Home";
// import Services from "./Services/components/Services";
// import Portfolio from "./Portfolio/components/Portfolio";

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
                {/*<Header redirect={this.onChangePage}/>*/}
                {/*<Link href="/contacts"><div className="menu">contacts</div></Link>*/}
                {/*<Link href="/test/testing"><div className="menu">test</div></Link>*/}
                <Link href="/testing"><div className="menu">test2</div></Link>
                {/*<Link href="/services" component={Services}/>*/}
                {/*<Link href="/portfolio" component={Portfolio}/>*/}
                {/*<Link href="/blog"/>*/}
                {/*<Link href="/contact"/>*/}
                {/*<Contacts/>*/}
                {/*<Footer redirect={this.onChangePage}/>*/}
                {/*<Snackbar/>*/}
            </>
        );
    }
}

export default Index;
