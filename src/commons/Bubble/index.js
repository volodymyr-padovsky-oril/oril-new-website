import React, {Component} from "react";
import "./index.scss";

class Bubble extends Component {

    scrolled;
    _isMounted = false;
    initialSizes;

    constructor(props) {
        super(props);
        this.state = {...props};
    }

    componentDidMount() {
        this._isMounted = true;
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.setBubbleSizes.bind(this));
        this.initialSizes = Object.assign({
            size: this.state.size,
            top: this.state.top || '0px',
            left: this.state.left || '0px',
            right: this.state.right || '0px',
            bottom: this.state.bottom || '0px',
        });

        this.setBubbleSizes();
    };

    setBubbleSizes() {
        let size = parseInt(this.initialSizes.size);
        let right = parseInt(this.initialSizes.right);
        let left = parseInt(this.initialSizes.left);
        let top = parseInt(this.initialSizes.top);

        if (window.innerWidth < 430) {
            size *= 0.4;
            right *= 0.4;
            left *= 0.4;
            top *= 0.5;
        } else if (window.innerWidth < 576) {
            size *= 0.7;
            right *= 0.6;
            left *= 0.6;
            top *= 0.6;
        } else if (window.innerWidth < 768) {
            size *= 0.8;
            right *= 0.8;
            left *= 0.8;
        } else if (window.innerWidth < 1240) {
            size *= 0.8;
            right *= 0.85;
            left *= 0.85;
        }

        this.setState({ size: size + 'px', right: right + 'px', left: left + 'px', top: top + 'px' });
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll() {
        if(this._isMounted){
            let scroll = window.pageYOffset || document.documentElement.scrollTop;
            if (!this.scrolled) {
                this.updatePosition(scroll)
            } else {
                const scrolling = this.scrolled - scroll;
                this.setPosition(scrolling);
            }
            this.scrolled = scroll;
        }
    };

    setPosition(scrolling) {
        const newPosition = (parseFloat(this.state.top) + (scrolling * parseFloat(this.state.speed))) + 'px';
        this.setState({top: newPosition});
    };

    updatePosition() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll) {
            this.setPosition(-scroll)
        }
    }

    render() {
        const styles = {
            height: this.state.size,
            width: this.state.size,
            top: this.state.top || '0px',
            left: this.state.left || '0px',
            right: this.state.right || '0px',
            bottom: this.state.bottom || '0px',
        };

        return (
            <div className='bubble_wrapper'>
                <div className="bubble" style={styles}/>
            </div>
        )
    }
}

export default Bubble;
