import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import Services from "./Servic";
import Contacts from "./Contacts";

import './index.scss';

class App extends Component {
    state = {
        path: window.location.pathname
    };

    render() {
        return (
            <Router>
                <Header path={this.state.path} redirect={this.onChangePage}/>
                <div className="App">
                    <Switch>
                        <Route exect path="/home" component={Home}/>
                        <Route exect path="/services" component={Services}/>
                        <Route exect path="/contact"/>
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </div>
                <Contacts/>
                <Footer path={this.state.path} redirect={this.onChangePage}/>
            </Router>
        );
    }

    onChangePage = (path) => {
        this.updatePath(path);
    };

    updatePath = (path) => {
        this.setState({
            path
        })
    }
}

export default App;
