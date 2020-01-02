import React from 'react';
import {connect} from 'react-redux';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';

class Counter extends React.Component {
    // static async getInitialProps({ store, isServer }) {
    //     store.dispatch(tickClock(isServer));
    //     store.dispatch(increment());
    //     if (!store.getState().placeholderData) {
    //         store.dispatch(loadData());
    //     }
    // }
    //
    // componentDidMount() {
    //     this.props.dispatch(startClock());
    // }



    render() {
        return (
            <>
                <Header/>
                <Home/>
                <Contacts/>
                <Footer/>
            </>
        )
    }
}

export default connect()(Counter);
