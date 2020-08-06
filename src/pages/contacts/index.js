import React, {Component} from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Contacts from "../../components/Contacts/Contacts";

import {withRouter} from 'next/router';
import "../../components/Contacts/styles/_contacts.scss";
import SEOMetaTags from "../../components/SEOMetaTags";

class ContactUs extends Component {

    render() {
        return (
            <>
                <SEOMetaTags
                    title={"ORIL | Contacts"}
                    url={"/contacts"}
                    // description={}   add custom description for this page
                />
                <Header/>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}


export default withRouter(ContactUs);
