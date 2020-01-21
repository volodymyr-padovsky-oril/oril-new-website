import React, {Component} from "react";
import Intro from "../../components/Intro/Intro";
import Design from "../../components/Design/Design";
import Development from "../../components/Development/Development";
import {parse} from "query-string";
import {scrollTo} from "../../commons/utils/scroll";
import {later} from "../../commons/utils/main";
import Header from "../../commons/Header";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../commons/Footer";
import {withRouter} from "next/router";
import SEOMetaTags from "../../components/SEOMetaTags";

class Services extends Component {
  componentDidMount() {
    const query = parse(window.location.hash);
    const string = Object.keys(query)[0];
    const arr = ['web', 'mobile', 'iot', 'blockchain'];
    const test = string && arr.some(el => string.includes(el));

    console.log('test1', test);

    if (string && test) {
      later(1).then(() => scrollTo('#development'));
    } else if (string && string.includes('ui-design')) {
      later(1).then(() => scrollTo('#design'));
    } else if (string && string.includes('product-development')) {
      later(1).then(() => scrollTo('#development'));
    }
  }

  render() {
    return (
      <>
        <SEOMetaTags
          title={"ORIL | Services"}
          url={"/services"}
          // description={}   add custom description for this page
        />
        <Header redirect={this.onChangePage}/>
        <section className="services">
          <Intro/>
          <Design/>
          <Development/>
        </section>
        <Contacts/>
        <Footer/>
      </>
    );
  }
}

export default withRouter(Services);
