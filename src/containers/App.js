import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import Services from "./Servic";

class App extends Component {
    state = {
        path: ''
    };

    componentWillMount() {
        const path = window.location.pathname;
        this.updatePath(path);
    }

    render() {
        return (
            <Router>
                <Header path={this.state.path} redirect={this.onChangePage}/>
                <div className="App">
                    <Redirect from="/" to="/home"/>
                    <Route path="/home" component={Home}/>
                    <Route path="/services" component={Services}/>
                </div>
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
