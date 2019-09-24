import React, {Component} from 'react';
import Swiper from "react-id-swiper";
import {params} from "../../../../../../slider-config";
import Slide from "../../Slide/components/Slide";
import {project} from '../../../our-projects';

export class PortfolioRealEstate extends Component {
    render() {
        return (
            <div className="slider-wrapper">
                <Swiper {...params}>
                    <div><Slide data={project.sparkOffer} /></div>
                </Swiper>
            </div>
        );
    }
}

export default PortfolioRealEstate;
