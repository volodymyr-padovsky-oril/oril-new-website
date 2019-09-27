import React, {Component} from 'react';
import Swiper from "react-id-swiper";
import {params} from "../../../../../../slider-config";
import Slide from "../../Slide/components/Slide";
import {project} from '../../../our-projects';

export class PortfolioMarketplace extends Component {
    render() {
        return (
            <div className="slider-wrapper">
                <Swiper {...params}>
                    <div><Slide data={project.myn} /></div>
                    <div><Slide data={project.gowago} /></div>
                    <div><Slide data={project.hoozeOn} /></div>
                    <div><Slide data={project.rialto} /></div>
                    <div><Slide data={project.riceToRiches} /></div>
                </Swiper>
            </div>
        );
    }
}

export default PortfolioMarketplace;