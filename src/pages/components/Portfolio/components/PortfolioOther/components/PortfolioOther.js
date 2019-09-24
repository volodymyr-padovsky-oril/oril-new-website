import React, {Component} from 'react';
import Swiper from "react-id-swiper";
import Slide from "../../Slide/components/Slide";
import {params} from '../../../../../../slider-config';
import {project} from '../../../our-projects';

export class PortfolioOther extends Component {
    render() {
        return (
            <div className="slider-wrapper">
                <Swiper {...params}>
                    <div><Slide data={project.greenVision} /></div>
                    <div><Slide data={project.stick} /></div>
                    <div><Slide data={project.plusDelta} /></div>
                </Swiper>
            </div>
        );
    }
}

export default PortfolioOther;
