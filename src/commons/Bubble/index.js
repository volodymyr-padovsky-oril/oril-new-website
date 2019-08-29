import React, {Component} from "react";
import "./index.scss";

class Bubble extends Component {

    scrolled;
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {...props};
    }

    componentDidMount() {
        this._isMounted = true;
        window.addEventListener('scroll', this.handleScroll.bind(this));
    };

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
