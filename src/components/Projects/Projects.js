import React, {Component} from "react";
import BaseTabs from "../../commons/BaseTabs";
import PortfolioLifestyleAndFitness from "../PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness";
import PortfolioOther from "../PortfolioOther/PortfolioOther";
import PortfolioIoT from "../PortfolioIoT/PortfolioIoT";
import PortfolioRealEstate from "../PortfolioRealEstate/PortfolioRealEstate";
import PortfolioMarketplace from "../PortfolioMarketplace/PortfolioMarketplace";

export class Projects extends Component {
    tabs = [
        { id: 'iot', title: 'IoT', component: () => <PortfolioIoT/> },
        //TODO: change to real estate
        { id: 'blockchain', title: 'Blockchain', component: () => <PortfolioRealEstate/> },
        { id: 'marketplace', title: 'Marketplace', component: () => <PortfolioMarketplace/> },
        { id: 'lifestyle-and-fitness', title: 'Lifestyle & Fitness', component: () => <PortfolioLifestyleAndFitness/> },
        { id: 'other', title: 'Other', component: () => <PortfolioOther/> }
    ];

    render() {
        return (
          <section className="portfolio__projects" id="products">
              <div className="container">
                  <BaseTabs tabs={this.tabs} pathname="portfolio" />
              </div>
          </section>
        );
    }
}

export default Projects;
