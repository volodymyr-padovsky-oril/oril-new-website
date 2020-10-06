import React, {Component} from "react";

export class WeAreItemMobile extends Component {

    render() {
        const {worker} = this.props;
        return (
            <div className="card--mobile">
                <img className="card__front--mobile" src={"assets/img/" + worker.photo + ".jpg"} alt={worker.photo} />
                <img className="card__back--mobile" src={"assets/img/" + worker.animal + ".png"} alt={worker.animal} />
                <div className="span-block">
                    <span>{worker.name}</span>
                    {/*<span>{worker.position}</span>*/}
                </div>
            </div>
        );
    }
}

export default WeAreItemMobile;
