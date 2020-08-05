import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import SEOMetaTags from "../components/SEOMetaTags";

class Index extends React.Component {

    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch(`https://api.ipdata.co/en?api-key=04b4e64842a9fd97b191d94431fcc4605964bc8c65174d5e6c052025`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        return (
            <>
                <SEOMetaTags
                    title={"ORIL"}
                    url={"/"}
                    description={"One-stop shop for your digital product"}
                />
                <Header/>
                <Home/>
                <Contacts data={this.state.data}/>
                <Footer/>
            </>
        )
    }
}

export default Index;
