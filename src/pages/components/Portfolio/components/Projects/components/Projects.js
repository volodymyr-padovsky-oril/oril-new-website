import React, {Component} from 'react';
import BaseTabs from "../../../../../../commons/BaseTabs";
import PortfolioWeb from "../../PortfolioWeb/components/PortfolioWeb";
import PortfolioMobile from "../../PortfolioMobile/components/PortfolioMobile";
import PortfolioIoT from "../../PortfolioIoT/components/PortfolioIoT";
import PortfolioRealEstate from "../../PortfolioRealEstate/components/PortfolioRealEstate";
import PortfolioBlockchain from "../../PortfolioBlockchain/components/PortfolioBlockchain";
import PortfolioMarketplace from "../../PortfolioMarketplace/components/PortfolioMarketplace";

export class Projects extends Component {
    tabs = [
        { id: 'web', title: 'Web', component: () => <PortfolioWeb/> },
        { id: 'mobile', title: 'Mobile', component: () => <PortfolioMobile/> },
        { id: 'iot', title: 'IoT', component: () => <PortfolioIoT/> },
        { id: 'real-estate', title: 'Real estate', component: () => <PortfolioRealEstate/> },
        { id: 'blockchain', title: 'Blockchain', component: () => <PortfolioBlockchain/> },
        { id: 'marketplace', title: 'Marketplace', component: () => <PortfolioMarketplace/> }
    ];

    render() {
        return (
          <section className="portfolio__projects" id="products" ref={this.props.section}>
              <div className="container">
                  <BaseTabs tabs={this.tabs} pathname="portfolio" startIndex={2} />
              </div>
          </section>
        );
    }
}

export default Projects;
