import React, {Component} from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Contacts from "../../components/Contacts/Contacts";

import {withRouter} from 'next/router';
import Helmet from 'react-helmet';
import "../../components/Contacts/styles/_contacts.scss";

class ContactUs extends Component {

    render() {
        return (
            <>
                <Helmet
                    title="Contacts | ORIL"
                    meta={[{ property: 'og:title', content: 'Contacts' }]}
                />
                <Header/>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}


export default withRouter(ContactUs);
