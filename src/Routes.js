import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import PrivateRoute from './PrivateRoute'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <PrivateRoute isLoggedIn={true} exact path="/home" component={App} />
                    {/* <Route path="*" component={NotFound} /> */}
                </Switch>
            </Router>
        );
    }
}


export default Routes