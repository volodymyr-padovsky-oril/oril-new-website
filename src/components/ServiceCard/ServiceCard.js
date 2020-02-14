import React, {Component} from "react";
import './_service-card.scss';
import Bubble from "../../commons/Bubble";
import Link from "next/link";

class ServiceCard extends Component {

    render() {
        const {direction} = this.props;
        console.log('direc', direction)
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
                                    Interactive prototyping, explicit UI/UX design and branding with clear message for your web, desktop, mobile, smartwatch and IoT products. This is how we’re becoming advocates of actual user needs and business goals.
                                </span>
                                <button>
                                    <Link href={{pathname: "services/design"}}>
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                            <div className="animation-wrapper">
                                <Bubble size="490px" top="490px" right="110px" speed=".7"/>
                                <Bubble size="400px" top="560px" right="20px" speed=".7"/>
                                <Bubble size="100px" top="50px" left="60px" bottom="112px" speed=".7"/>
                                <img src="assets/gif/UX-compressed.png" alt="ux"/>
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
                                    No matter what stage you are at, Idea or a Working Product, we can help you visualize, build, deliver, and improve your Product.
                                </span>
                                <button>
                                    <Link href={{pathname: "services/development"}}>
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                            <div className="animation-wrapper">
                                <Bubble size="490px" top="280px" right="110px" speed=".7"/>
                                <Bubble size="400px" top="250px" right="20px" speed=".7"/>
                                <Bubble size="200px" top="10px" right="-200px" speed=".7"/>
                                <img src="assets/gif/PD-compressed.png" alt="development"/>
                            </div>
                        </div>
                }
            </section>
        );
    }
}


export default ServiceCard;
