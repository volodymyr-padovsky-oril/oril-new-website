import React, {Component} from "react";
import './_service-card.scss';
import Lottie from 'react-lottie';
import Link from 'next/link';

class ServiceCard extends Component {

    render() {
        const {card} = this.props;
        return (
            <section className="card-wrapper">
                <div className={`container ${card.direction === 'odd' ? 'odd' : 'even'}`}>
                    <div className="card-wrapper__text-wrapper">
                        <h2>{card.title}</h2>
                        <p>{card.subtitle}</p>
                        <span>{card.text}</span>
                        <Link href={{pathname: `services/${card.href}`}}>
                            Learn More
                        </Link>
                    </div>
                    <div className="card-wrapper__animation-wrapper">

                        <Lottie
                            // style={{height: 'auto', marginLeft: '-60px'}}
                            options={card.animationOptions}
                            // height=auto
                            // width={613}
                        />
                    </div>
                </div>
            </section>
        );
    }
}


export default ServiceCard;
