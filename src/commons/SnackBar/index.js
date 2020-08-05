import React, {Component} from 'react';
import {connect} from 'react-redux';

import "./index.scss";

import {closeSnackbar} from '../../actions/helper';

class Snackbar extends Component {
    state = {
        text: '',
    };

    static getDerivedStateFromProps(nextProps) {
        return {
            open: nextProps.isSnackbarOpen,
            text: nextProps.snackbarText
        }
    }

    render() {
        const {text} = this.state;
        return (
            <div className="snackbar">
                {text}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    snackbarText: state.helper.text
});

const mapDispatchToProps = (dispatch) => ({
    closeSnackbarPanel: () => {
        dispatch(closeSnackbar())
    }
});


export default (connect(mapStateToProps, mapDispatchToProps)(Snackbar));

