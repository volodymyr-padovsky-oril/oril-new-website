import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Portfolio from "../pages/components/Portfolio/components/Portfolio";
import Services from "../pages/components/Services/components/Services";
import Home from "../pages/components/Home";

export default () => (
    <div className="App">
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/blog"/>
            <Route path="/contact"/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </div>
);
