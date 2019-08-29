import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Contacts from "../commons/Contacts";
import routes from "../routes";

import './index.scss';

class App extends Component {
    state = {
        path: window.location.pathname
    };

    render() {
        return (
            <Router>
                <Header path={this.state.path} redirect={this.onChangePage}/>
                    {routes()}
                <Contacts/>
                <Footer path={this.state.path} redirect={this.onChangePage}/>
            </Router>
        );
    }

    onChangePage = (path) => {
        this.setState({ path });
    };
}

export default App;
