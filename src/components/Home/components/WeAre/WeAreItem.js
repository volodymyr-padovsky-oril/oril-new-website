import React, { Component } from "react";

export class WeAreItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: true,
      visible: false,
    };
  }

  animate() {
    const { index } = this.props
    setInterval(() => {
      setTimeout(() => this.setState({hover: false}), 700 + 200 * index)
    }, 10)
  }

  componentWillReceiveProps(props, state) {
    if (props.visible !== state.visible) {
      props.visible && this.animate()
    }
  }

  render() {
    console.log();
    const { worker, index } = this.props;
    const { hover } = this.state;
    const animal_src = "assets/img/" + worker.animal + ".png";
    const photoStyles = {
      backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const cardFront = {
      opacity: 0,
      transform: "scale(.8)",
      border: "1px solid red",
    };

    const cardBack = {
      opacity: 1,
      transform: "scale(1)",
      transitionDelay: ".2s",
      backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const description = {
      opacity: 1,
      transform: "scale(1)",
      transitionDelay: ".2s",
    };

    return (
      <div className="card" key={"card-" + index}>
        <div
          className="card__front"
          style={worker.hover && hover ? cardFront : null}
        >
          <img src={animal_src} alt={worker.animal} />
        </div>
        <div
          className="card__back"
          style={worker.hover && hover ? cardBack : photoStyles}
        >
          <div
            className="card__back__desc"
            style={worker.hover && hover ? description : null}
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
