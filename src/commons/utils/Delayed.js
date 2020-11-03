import React from 'react';

class Delayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

export default Delayed;
