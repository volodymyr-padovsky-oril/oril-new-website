import React from "react";


class ProgressiveImage extends React.Component {

    state = {
        transitionTime: 500,
        timingFunction: "ease",
        initialBlur: 10,
    };

    unmounted = false;

    componentWillMount() {
        const {src, preview} = this.props;
        const initialBlur = this.props.initialBlur;
        this.setState({ src: preview, blur: initialBlur });
        this.fetch(src)
            .then(srcDataURI => !this.unmounted && this.setState({ src: srcDataURI, blur: 0 }));
    }

    // eslint-disable-next-line react/no-typos
    componentWillUnMount() {
        this.unmounted = true;
    }

    render() {
        const {src} = this.state;
        const {render} = this.props;
        return (
            render(src, this.getStyle()))
    }

    fetch(src) {
        return new Promise(resolve => {
            const image = new Image();
            image.src = src;
            image.addEventListener("load", () => resolve(src), false);
        });
    }

    getStyle() {
        const {transitionTime, timingFunction} = this.props;
        const {blur} = this.state;
        return {
            filter: `blur(${blur}px)`,
            transition: `filter ${transitionTime}ms ${timingFunction}`
        };
    }
}

export default ProgressiveImage;