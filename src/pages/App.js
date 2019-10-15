import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Contacts from "../commons/Contacts";
import Snackbar from "../commons/SnackBar";
import routes from "../routes";

import "./index.scss";

class App extends Component {
    onChangePage = (path) => {
        this.setState({ path });
    };

    render() {
        return (
            <Router>
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
