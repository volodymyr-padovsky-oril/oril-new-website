import React, {Component} from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Contacts from "../../components/Contacts/Contacts";

import {withRouter} from 'next/router';
import "../../components/Contacts/styles/_contacts.scss";
import Head from "next/dist/next-server/lib/head";

class ContactUs extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>ORIL | Contact</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta property="og:url" content="https://oril.co"/>
                    <meta property="og:title" content="ORIL | Contact"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:description"
                          content="ORIL is a software development company focusing on web, mobile app and IoT products, MVP for software startups and IT consulting."/>
                    <meta property="og:image" content="https://oril.co/assets/img/link-logo.png"/>
                </Head>
                <Header/>
                <Contacts/>
                <Footer/>
            </>
        );
    }
}


export default withRouter(ContactUs);
