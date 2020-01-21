import React from 'react';

import Header from '../commons/Header';
import Home from './home';
import Contacts from "../components/Contacts/Contacts";
import Footer from "../commons/Footer";
import "./index.scss";
import '../index.css';
import SEOMetaTags from "../components/SEOMetaTags";

class Index extends React.Component {

  render() {

    return (
      <>
        <SEOMetaTags
          title={"ORIL"}
          url={"/"}
        />
        <Header/>
        <Home/>
        <Contacts/>
        <Footer/>
      </>
    )
  }
}

export default Index;
