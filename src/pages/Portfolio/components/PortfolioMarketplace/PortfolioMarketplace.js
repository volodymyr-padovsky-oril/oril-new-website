import React, {Component} from "react";
import {project} from "../../our-projects";
import {Slides} from "../Slides/Slides";

export class PortfolioMarketplace extends Component {
    slides = [
        project.gowago,
        project.rialto,
        project.hoozeOn,
        project.myn,
    ];

    render() {
        return (<Slides slides={this.slides} />);
    }
}

export default PortfolioMarketplace;
