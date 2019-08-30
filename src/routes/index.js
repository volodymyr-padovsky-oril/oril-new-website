import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import homeRoutes from './home';
import servicesRoutes from './services';

export default () => (
    <div className="App">
        <Switch>
            {homeRoutes}
            {servicesRoutes}
            <Route path="/portfolio"/>
            <Route path="/blog"/>
            <Route path="/contact"/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </div>
);
