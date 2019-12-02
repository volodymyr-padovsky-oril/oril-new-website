import React, {Component} from "react";
import Swiper from "react-id-swiper";
import {params} from "../../../../slider-config";
import Slide from "../Slide/Slide";

export class Slides extends Component {
    render() {
        return (
            <>
                <div className="slider-wrapper">
                    {/*<Swiper {...params}>*/}
                        {
                            this.props.slides.map((slide, index) => (
                                <div key={'slide-' + index}>
                                    <Slide data={slide} />
                                </div>
                            ))
                        }
                    {/*</Swiper>*/}
                </div>
                <div className="slider-mobile-wrapper">
                    {
                        this.props.slides.map((slide, index) => (
                            <div key={'slide-' + index}>
                                <Slide data={slide} />
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
}

export default Slides;
