import React, {Component} from "react";
import PortfolioIntro from "../../components/PortfolioIntro/PortfolioIntro";
import Projects from "../../components/Projects/Projects";
import {parse} from "query-string";
import {scrollTo} from "../../commons/utils/scroll";
import Header from "../../commons/Header";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../commons/Footer";
import {project} from "../../lib/our-projects";
import {withRouter} from "next/router";
import SEOMetaTags from "../../components/SEOMetaTags";

class Portfolio extends Component {
  componentDidMount() {
    const query = parse(window.location.hash);
    const string = Object.keys(query)[0];
    const arr = ['web', 'mobile', 'iot', 'blockchain', 'lifestyle-and-fitness'];
    const test = string && arr.some(el => string.includes(el));

    string && test
      ? scrollTo('#products')
      : window.scrollTo(0, 0);
  }

  static getInitialProps() {
    return {
      project: project
    }
  }

  render() {
    return (
      <>
        <SEOMetaTags
          title={"ORIL | Portfolio"}
          url={"/portfolio"}
          // description={}   add custom description for this page
        />
        <Header redirect={this.onChangePage}/>
        <section className="portfolio">
          <PortfolioIntro/>
          <Projects slides={this.props.project}/>
        </section>
        <Contacts/>
        <Footer/>
      </>
    );
  }
}

export default withRouter(Portfolio);
