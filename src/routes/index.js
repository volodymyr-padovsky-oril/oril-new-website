import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import homeRoutes from './home';

export default () => (
    <div className="App">
        <Switch>
            {homeRoutes}
            <Route path="/services"/>
            <Route path="/portfolio"/>
            <Route path="/blog"/>
            <Route path="/contact"/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </div>
);
