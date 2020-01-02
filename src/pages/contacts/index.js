import React, {Component} from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Contacts from "../../components/Contacts/Contacts";

import {withRouter} from 'next/router';
import "../../components/Contacts/styles/_contacts.scss";

class ContactUs extends Component {

    render() {
        return (
            <>
                <Header/>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}


export default withRouter(ContactUs);
