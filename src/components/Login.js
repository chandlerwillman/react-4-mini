import React from 'react';
import {
    Link,
    Route,
    Switch,
} from 'react-router-dom';

function Login(props) {
    // console.log(props)

    return (
        <div className="route-1">
            <h2>Login</h2>

            <form>
                <input placeholder="Username" type="text" />
                <input placeholder="Password" type="password" />
                <button onClick={e => {
                    e.preventDefault();

                    setTimeout(() => {
                        props.history.push('/2');
                    }, 1000);
                }}>
                    Log in
                </button>
            </form>

            <Switch>
                <Route path={props.match.path + '/foo'} render={() => <p>Forgot password?</p>} />
                <Route path={props.match.path + '/bar'} render={() => <p>Register for an account</p>} />
            </Switch>
        </div>
    );
}

export default Login;