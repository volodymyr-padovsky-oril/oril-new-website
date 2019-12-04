import React, {Component} from "react";
import {project} from "../../our-projects";
import {Slides} from "../Slides/Slides";

export class PortfolioOther extends Component {
    slides = [
        project.greenVision,
        project.stick,
        project.plusDelta
    ];

    render() {
        return (<Slides slides={this.slides} />);
    }
}

export default PortfolioOther;
