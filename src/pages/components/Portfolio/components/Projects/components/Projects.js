import React, {Component} from "react";
import BaseTabs from "../../../../../../commons/BaseTabs";
import PortfolioLifestyleAndFitness from "../../PortfolioLifestyleAndFitness/components/PortfolioLifestyleAndFitness";
import PortfolioOther from "../../PortfolioOther/components/PortfolioOther";
import PortfolioIoT from "../../PortfolioIoT/components/PortfolioIoT";
import PortfolioRealEstate from "../../PortfolioRealEstate/components/PortfolioRealEstate";
import PortfolioBlockchain from "../../PortfolioBlockchain/components/PortfolioBlockchain";
import PortfolioMarketplace from "../../PortfolioMarketplace/components/PortfolioMarketplace";

export class Projects extends Component {
    tabs = [
        { id: 'iot', title: 'IoT', component: () => <PortfolioIoT/> },
        { id: 'real-estate', title: 'Real estate', component: () => <PortfolioRealEstate/> },
        { id: 'blockchain', title: 'Blockchain', component: () => <PortfolioBlockchain/> },
        { id: 'lifestyle-and-fitness', title: 'Lifestyle & Fitness', component: () => <PortfolioLifestyleAndFitness/> },
        { id: 'marketplace', title: 'Marketplace', component: () => <PortfolioMarketplace/> },
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
