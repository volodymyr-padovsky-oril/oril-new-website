import React, {Component} from "react";
import {project} from "../../../our-projects";
import {Slides} from "../../Slides/components/Slides";

export class PortfolioMarketplace extends Component {
    slides = [
        project.myn,
        project.gowago,
        project.hoozeOn,
        project.rialto,
        project.riceToRiches
    ];

    render() {
        return (<Slides slides={this.slides} />);
    }
}

export default PortfolioMarketplace;
