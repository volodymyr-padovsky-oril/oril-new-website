import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Contacts from "../commons/Contacts";
import Snackbar from "../commons/SnackBar";
import routes from "../routes";
import { Helmet } from 'react-helmet';

import "./index.scss";

class App extends Component {
    onChangePage = (path) => {
        this.setState({ path });
    };

    render() {
        return (
            <Router>
                <Helmet>
                    <title>ORIL</title>
                    <meta name="description" content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting." />
                    <meta name="theme-color" content="#000000" />
                </Helmet>
                <Header redirect={this.onChangePage}/>
                    {routes()}
                <Contacts/>
                <Footer redirect={this.onChangePage}/>
                <Snackbar/>
            </Router>
        );
    }
}

export default App;
