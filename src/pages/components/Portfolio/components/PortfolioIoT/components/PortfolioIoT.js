import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import Slide from "../../Slide/components/Slide";
import {params} from '../../../../../../slider-config';
import {project} from '../../../our-projects';

export class PortfolioIoT extends Component {
    render() {
        return (
            <div className="slider-wrapper">
                <Swiper {...params}>
                    <div><Slide data={project.nuravine} /></div>
                    <div><Slide data={project.cc} /></div>
                    <div><Slide data={project.vicki} /></div>
                </Swiper>
            </div>
        );
    }
}

export default PortfolioIoT;
