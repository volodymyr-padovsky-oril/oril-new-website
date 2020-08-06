import React, {Component} from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Contacts from "../../components/Contacts/Contacts";

import {withRouter} from 'next/router';
import "../../components/Contacts/styles/_contacts.scss";
import SEOMetaTags from "../../components/SEOMetaTags";

class ContactUs extends Component {

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
                    title={"ORIL | Contacts"}
                    url={"/contacts"}
                    // description={}   add custom description for this page
                />
                <Header/>
                <Contacts data={this.state.data}/>
                <Footer/>
            </>
        );
    }
}


export default withRouter(ContactUs);
