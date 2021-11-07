import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogle = (e) => {
        signInUsingGoogle().then(result => {
            history.push(redirect_url);
        }).catch(error => console.log(error.message));
        e.preventDefault();
    }
    return (
        <div>
            <h1>Please Login</h1>
            <Button onClick={handleGoogle}>Login</Button>
        </div>
    );
};

export default Login;