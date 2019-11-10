import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    isLoggedIn === true ? (
                        <Component {...props} />
                    ) : (
                            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                        )
                )
            }

            }
        />
    );
}

export default PrivateRoute