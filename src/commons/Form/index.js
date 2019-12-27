import React, {Component} from "react";
import "./index.scss";
import {connect} from 'react-redux';
import {sendGetInTouchMessageRequest} from '../../actions/message';

class Form extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.messageInput = React.createRef();

        this.state = {
            name: '',
            email: '',
            message: '',
            formErrors: {name: '', email: '', message: ''},
            nameValid: true,
            emailValid: true,
            messageValid: true,
            formValid: false
        };
    }

    handleInputChange = (state) => {
        const formErrors = {name: '', email: '', message: ''};
        this.setState({...state, formErrors});
        this.removeErrorClasses();
    };

    validateName = (name) => {
        let nameValid = name.length > 0;
        let formErrors = {...this.state.formErrors};
        formErrors.name = nameValid ? null : 'Name is required';
        return new Promise(resolve => {
            this.setState({nameValid, formErrors}, () => {
                resolve();
            });
        });
    };

    validateEmail = (email) => {
        let emailValid = email.length > 0;
        const formErrors = {...this.state.formErrors};
        formErrors.email = emailValid ? null : 'Email is required';

        if (!emailValid) {
            return new Promise(resolve => {
                this.setState({emailValid, formErrors}, () => {
                    resolve();
                });
            });
        }

        emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? null : 'Email is invalid';
        return new Promise(resolve => {
            this.setState({emailValid, formErrors}, () => {
                resolve();
            });
        });
    };

    validateMessage = (message) => {
        const messageValid = message.length > 0;
        const formErrors = {...this.state.formErrors};
        formErrors.message = messageValid ? null : 'Message is required';
        return new Promise(resolve => {
            this.setState({messageValid, formErrors}, () => {
                resolve();
            });
        });
    };

    async validateForm() {
        await this.validateName(this.state.name);
        await this.validateEmail(this.state.email);
        await this.validateMessage(this.state.message);
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid});
        return this.state;
    }

    hasError(valid) {
        return valid ? '' : 'invalid';
    }

    removeErrorClasses() {
        this.nameInput.current.classList.remove('invalid');
        this.emailInput.current.classList.remove('invalid');
        this.messageInput.current.classList.remove('invalid');
    }

    async onSubmit(e) {

        const {sendMessageRequest} = this.props;
        const {email, name, message,} = this.state;

        e.preventDefault();
        await this.validateForm();

        const userInfo = {
            name: name,
            email: email,
            message: message
        };

        if (this.state.formValid) {
            sendMessageRequest({
                email,
                name,
                message,
            });
        }

        this.setState({name: '', email: '', message: ''});
    }

    render() {
        return (
            <>
                <p>Send us a short message and our team will get back to you within 24 hours</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className={`input-field ${this.hasError(this.state.nameValid)}`} ref={this.nameInput}>
                        <input type="text"
                               name="name"
                               id="name"
                               autoComplete="off"
                               value={this.state.name}
                               onChange={(event) => this.handleInputChange({name: event.target.value})}
                               className={this.state.name ? 'has-data' : null}/>
                        <label htmlFor="name">Name</label>
                        <div className="error">{this.state.formErrors.name ? this.state.formErrors.name : null}</div>
                    </div>
                    <div className={`input-field ${this.hasError(this.state.nameValid)}`} ref={this.emailInput}>
                        <input type="text"
                               name="email"
                               id="email"
                               autoComplete="off"
                               value={this.state.email}
                               onChange={(event) => this.handleInputChange({email: event.target.value})}
                               className={this.state.email ? 'has-data' : null}/>
                        <label htmlFor="email">E-Mail</label>
                        <div className="error">{this.state.formErrors.email ? this.state.formErrors.email : null}</div>
                    </div>
                    <div className={`textarea-field ${this.hasError(this.state.nameValid)}`} ref={this.messageInput}>
                    <textarea placeholder="Message..."
                              name="message"
                              value={this.state.message}
                              onChange={(event) => this.handleInputChange({message: event.target.value})}
                              className={this.state.message ? 'has-data' : null}>
                    </textarea>
                        <div
                            className="error">{this.state.formErrors.message ? this.state.formErrors.message : null}</div>
                    </div>
                    <div className="submit-field">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    sendMessageRequest: (message) => {
        dispatch(sendGetInTouchMessageRequest(message));
    }
});

export default connect(null, mapDispatchToProps)(Form);

