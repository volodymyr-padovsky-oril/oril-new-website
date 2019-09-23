import React, {Component} from "react";
import {project} from "../../../our-projects";
import {Slides} from "../../Slides/components/Slides";

export class PortfolioRealEstate extends Component {
    slides = [project.sparkOffer];

    render() {
        return (<Slides slides={this.slides} />);
    }
}

export default PortfolioRealEstate;
