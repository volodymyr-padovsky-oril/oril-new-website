import React, {Component} from "react";
import {project} from "../../our-projects";
import {Slides} from "../Slides/Slides";

export class PortfolioIoT extends Component {
    slides = [
        project.nuravine,
        project.cc,
        project.vicki
    ];

    render() {
        return (<Slides slides={this.slides} />);
    }
}

export default PortfolioIoT;
