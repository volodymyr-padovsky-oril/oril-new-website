import React, {Component} from "react";
import {project} from "../../../our-projects";
import {Slides} from "../../Slides/components/Slides";

export class PortfolioLifestyleAndFitness extends Component {
    slides = [
        project.as,
        project.laced
    ];

    render() {
        return (<Slides slides={this.slides} />);
    }
}

export default PortfolioLifestyleAndFitness;
