import React, {Component} from 'react';
import {connect} from 'react-redux';

import "./index.scss";

import {closeSnackbar} from '../../actions/helper';

class Snackbar extends Component {
    state = {
        open: false,
        text: '',
        vertical: 'top',
        horizontal: 'right',
        isActive: true
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.isSnackbarOpen !== nextProps.isSnackbarOpen) {
            this.setState({
                open: nextProps.isSnackbarOpen,
                text: nextProps.snackbarText
            });
        }
    }

    render() {
        const {open, text} = this.state;
        console.log('this.props.isSnackbarOpen', this.props.isSnackbarOpen)
        return (
            <div className={open ? ["snackbar", "show"].join(" ") : "snackbar"}>
                {text}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isSnackbarOpen: state.helper.isSnackbarOpen,
    snackbarText: state.helper.text
});

const mapDispatchToProps = (dispatch) => ({
    closeSnackbarPanel: () => {
        dispatch(closeSnackbar())
    }
});


export default (connect(mapStateToProps, mapDispatchToProps)(Snackbar));

