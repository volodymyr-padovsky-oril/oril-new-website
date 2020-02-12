import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import SEOMetaTags from "../components/SEOMetaTags";
import axios from 'axios';

// import fetch from 'unfetch'
// import useSWR from 'swr'
//
// const API_URL = 'https://api.github.com'
// async function fetcher(path) {
//     const res = await fetch(API_URL + path)
//     const json = await res.json()
//     return json
// }

class Index extends React.Component {

    // static async getInitialProps(ctx) {
    //     const res = await axios.get('https://api.ipdata.co/en?api-key=04b4e64842a9fd97b191d94431fcc4605964bc8c65174d5e6c052025');
    //     return {data: res.data}
    // }

    // static async getInitialProps() {
    //     let res = await fetch('https://api.ipdata.co/en?api-key=04b4e64842a9fd97b191d94431fcc4605964bc8c65174d5e6c052025')
    //     let contriesObj = await res.json();
    //     console.log(contriesObj)
    //     return {countries: contriesObj.country_name}
    // }

    // static async getInitialProps() {
    //     let res = await fetch('https://api.ipdata.co/en?api-key=04b4e64842a9fd97b191d94431fcc4605964bc8c65174d5e6c052025')
    //     let countriesObj = await res.json()
    //     console.log('getInitialProps', countriesObj)
    //     return countriesObj
    // }

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
        // const { data, error } = useSWR('/repos/zeit/next.js', res)
        // console.log('swr', this.props.json);
        // const{countriesObj} = this.props;
        console.log('this.props.contriesObj', this.state.data);
        // console.log('data', this.props.data)

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
                {/*if (error) return <div>failed to load</div>*/}
                {/*if (!data) return <div>loading...</div>*/}
                {/*return <div>Next stars: {data.stargazers_count}</div>*/}
                <Header/>
                <Home/>
                <Contacts contriesObj={this.state.data}/>
                <Footer/>
            </>
        )
    }
}

export default Index;
