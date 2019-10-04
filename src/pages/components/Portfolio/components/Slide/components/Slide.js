import React, {Component} from "react";

export class Slide extends Component {
    render() {
        return (
            <div className="slide">
                <div className="slide__header">
                    <div className="logo">
                        <img src={`assets/img/${this.props.data.logo.name}${this.props.data.logo.extension}`}
                             alt={this.props.data.logo.name} />
                    </div>
                    <h3 className="title">{this.props.data.title}</h3>
                    <div className="tags">
                        {
                            this.props.data.tags.map((tag, index) => (<span key={`tag-${index}`}>{tag}</span>))
                        }
                    </div>
                </div>
                <div className="slide__content">
                    <div className="left">
                        <p className="text">{this.props.data.text}</p>
                        <div className="info">
                            {
                                this.props.data.info.map((item, index) => {
                                    return (
                                        <div key={`info-${index}`}>
                                            <p className="info__title">{item.value}</p>
                                            <p className="info__text">{item.text}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="right">
                        <img src={`assets/img/${this.props.data.img.name}${this.props.data.img.extension}`}
                             alt={this.props.data.img.name} />
                    </div>
                </div>
                <div className="slide__footer">
                    <div className="customer">
                        <img src={`assets/icons/${this.props.data.customer.img.name}${this.props.data.customer.img.extension}`}
                             alt={this.props.data.customer.img.name} />
                         <div>
                             <p>{this.props.data.customer.firstName} {this.props.data.customer.lastName}</p>
                             <p>{this.props.data.customer.position}</p>
                         </div>
                    </div>
                    <div className="feedback">
                        {this.props.data.customer.feedback}
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;
