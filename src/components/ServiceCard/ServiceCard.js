import React, {Component} from "react";
import './_service-card.scss';
import Bubble from "../../commons/Bubble";
import Link from "next/link";
import VizSensor from "react-visibility-sensor";

class ServiceCard extends Component {
    state = {
        imgViz: false
    };

    render() {
        const {direction} = this.props;
        return (
            <section className="card-wrapper">

                {
                    direction ?
                        <div className={`container ${direction && 'odd'}`}>
                            <div className="text-wrapper">
                                <h2>UX/UI Design</h2>
                                <p>
                                    Thoughtful User Interfaces
                                    for All Kind of Products
                                </p>
                                <span>
                                    Interactive prototyping, explicit UI/UX design and branding with clear message for your web, desktop, mobile, smartwatch and IoT products. This is how we’re becoming advocates of actual user needs and business goals
                                </span>
                                <Link href={{pathname: "services/design"}}>
                                    Learn More
                                </Link>
                            </div>
                            <div className="animation-wrapper">
                                <Bubble size="490px" top="490px" right="110px" speed=".7"/>
                                <Bubble size="400px" top="560px" right="20px" speed=".7"/>
                                <Bubble size="100px" top="50px" left="60px" bottom="112px" speed=".7"/>
                                <VizSensor
                                    minTopValue={200}
                                    partialVisibility={true}
                                    onChange={(isVisible) => {
                                        this.setState({imgViz: isVisible})
                                    }}
                                    active={!this.state.imgViz}
                                >
                                    <img
                                        src={`${this.state.imgViz ? 'assets/gif/UX-short.gif' : 'assets/gif/transparent.png'}`}
                                        alt="ux"/>
                                </VizSensor>

                            </div>
                        </div>
                        :
                        <div className="container">
                            <div className="text-wrapper">
                                <h2>Product Development</h2>
                                <p>
                                    Build your product with us
                                </p>
                                <span>
                                    No matter what stage you are at, Idea or a Working Product, we can help you visualize, build, deliver, and improve your Product
                                </span>
                                <Link href={{pathname: "services/development/web"}}>
                                    Learn More
                                </Link>
                            </div>
                            <div className="animation-wrapper">
                                <Bubble size="490px" top="280px" right="110px" speed=".7"/>
                                <Bubble size="400px" top="250px" right="20px" speed=".7"/>
                                <Bubble size="200px" top="10px" right="-200px" speed=".7"/>
                                <VizSensor
                                    minTopValue={200}
                                    partialVisibility={true}
                                    onChange={(isVisible) => {
                                        this.setState({imgViz: isVisible})
                                    }}
                                    active={!this.state.imgViz}
                                >
                                    <img
                                        src={`${this.state.imgViz ? 'assets/gif/PD-short.gif' : 'assets/gif/transparent.png'}`}
                                        alt="development"/>
                                </VizSensor>
                            </div>
                        </div>
                }
            </section>
        );
    }
}


export default ServiceCard;
