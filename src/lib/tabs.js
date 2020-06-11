import PortfolioMarketplace from "../components/PortfolioMarketplace/PortfolioMarketplace";
import PortfolioLifestyleAndFitness from "../components/PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness";
import PortfolioIoT from "../components/PortfolioIoT/PortfolioIoT";
import PortfolioBlockchain from "../components/PortfolioBlockchain/PortfolioBlockchain";
import PortfolioOther from "../components/PortfolioOther/PortfolioOther";
import React from "react";

export const tabs = [
    { id: 'marketplace',  href: '/portfolio/marketplace', title: 'Marketplace', component: () => <PortfolioMarketplace/> },
    { id: 'lifestyle-and-fitness', href: '/portfolio/lifestyle', title: 'Lifestyle & Fitness', component: () => <PortfolioLifestyleAndFitness/> },
    { id: 'iot', title: 'IoT', href: '/portfolio/iot',  component: () => <PortfolioIoT/> },
    { id: 'blockchain', href: '/portfolio/blockchain', title: 'Blockchain', component: () => <PortfolioBlockchain/> },
    { id: 'other', href: '/portfolio/other', title: 'Other', component: () => <PortfolioOther/> }
];