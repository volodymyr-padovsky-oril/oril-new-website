import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import SEOMetaTags from "../components/SEOMetaTags";
import axios from 'axios';

class Index extends React.Component {

    static async getInitialProps(ctx) {
        const res = await axios.get('https://api.ipdata.co/en?api-key=04b4e64842a9fd97b191d94431fcc4605964bc8c65174d5e6c052025');
        return {data: res.data}
    }
    componentDidMount() {
        console.log('data-index', this.props.data.country_name);
    }
    render() {
        return (
            <>
                <SEOMetaTags
                    title={"ORIL"}
                    url={"/"}
                    description={"One-stop shop for your digital product"}
                    image={"https://oril.co/assets/img/link-logo.png"}
                    openGraph={{
                        description: "One-stop shop for your digital product",
                        image: "https://oril.co/assets/img/link-logo.png"
                    }}
                />
                <Header/>
                <Home/>
                <Contacts data={this.props.data}/>
                <Footer/>
            </>
        )
    }
}

export default Index;
