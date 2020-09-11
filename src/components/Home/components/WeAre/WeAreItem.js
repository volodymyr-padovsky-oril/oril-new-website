import React, { Component } from "react";

export class WeAreItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: true,
      visible: false,
    };
  }
  
  componentWillReceiveProps(props, state) {
    if(props.visible !== state.visible) {
      props.visible &&  this.setState({ hover: false });
    }
  }

  render() {
    const { worker, index } = this.props;
    const { hover } = this.state
    const animal_src = "assets/img/" + worker.animal + ".png";
    const photoStyles = {
      backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const cardFront = {
      opacity: 1,
      transform: "scale(.8)",
      border: "1px solid red",
      transitionDelay: `${1 + (index * .5)}s `,
    };

    const cardBack = {
      opacity: 1,
      transform: "scale(1)",
      backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const cardBack_1 = {
      // opacity: 1,
      // transform: "scale(1)",
      transitionDelay: `${1 + (index * .3)}s `,
      backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }

    const description = {
      opacity: 1,
      transform: "scale(1)",
      transitionDelay: ".2s",
    };
    
    const description_1 = {
      transitionDelay: `${1 + (index * .3)}s `,
    }

    return (
      <div className="card" key={"card-" + index}>
        <div
          className="card__front"
          // style={worker.hover ? (hover ? null : cardFront) : null}
        >
          <img src={animal_src} alt={worker.animal} />
        </div>
        <div
          className="card__back"
          style={worker.hover ? (hover ? cardBack : cardBack_1) : photoStyles}
        >
          <div
            className="card__back__desc"
            style={worker.hover ? (hover ? description : description_1) : null}
          >
            <span>{worker.name}</span>
            <span>{worker.position}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WeAreItem;
