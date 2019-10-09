import React, {Component} from "react";
import {project} from "../../our-projects";
import {Slides} from "../Slides/Slides";

export class PortfolioBlockchain extends Component {
    slides = [project.scroogeBot];

    render() {
        return (<Slides slides={this.slides} />);
    }
}

export default PortfolioBlockchain;
