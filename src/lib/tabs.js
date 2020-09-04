import PortfolioMarketplace from "../components/PortfolioMarketplace/PortfolioMarketplace";
import PortfolioLifestyleAndFitness from "../components/PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness";
import PortfolioIoT from "../components/PortfolioIoT/PortfolioIoT";
import PortfolioRealEstate from "../components/PortfolioRealEstate/PortfolioRealEstate";
import PortfolioOther from "../components/PortfolioOther/PortfolioOther";
import PortfolioFinTech from "../components/PortfolioFinTech/PortfolioFinTech";
import React from "react";

export const tabs = [
    { id: 'real-estate',  href: '/portfolio/real-estate', title: 'Real Estate', component: () => <PortfolioRealEstate/> },
    { id: 'iot', title: 'IoT', href: '/portfolio/iot',  component: () => <PortfolioIoT/> },
    { id: 'fin-tech',  href: '/portfolio/fin-tech', title: 'FinTech', component: () => <PortfolioFinTech/> },
    { id: 'marketplace',  href: '/portfolio/marketplace', title: 'Marketplace', component: () => <PortfolioMarketplace/> },
    { id: 'lifestyle-and-fitness', href: '/portfolio/lifestyle', title: 'Health & Fitness', component: () => <PortfolioLifestyleAndFitness/> },
    { id: 'other', href: '/portfolio/other', title: 'Other', component: () => <PortfolioOther/> }
];