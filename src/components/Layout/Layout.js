import React from 'react'
import { initGA, logPageView } from '../../commons/utils/analytics'
import { hotjar } from 'react-hotjar';

export default class Layout extends React.Component {
    componentDidMount () {
        if (process.env.NODE_ENV === 'production') {
            hotjar.initialize(1768935, 6);
        }

        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true
        }
        logPageView()
    }
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}