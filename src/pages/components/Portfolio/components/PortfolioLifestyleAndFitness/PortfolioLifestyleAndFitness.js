import React, {Component} from "react";
import {project} from "../../our-projects";
import {Slides} from "../Slides/Slides";

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
