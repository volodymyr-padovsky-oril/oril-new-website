import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import homeRoutes from './home';
import servicesRoutes from './services';
import portfolioRoutes from './portfolio';

export default () => (
    <div className="App">
        <Switch>
            {homeRoutes}
            {servicesRoutes}
            {portfolioRoutes}
            <Route path="/blog"/>
            <Route path="/contact"/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </div>
);
