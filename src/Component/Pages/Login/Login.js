import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log("location: ", location.state?.from);
    const handleGoogle = (e) => {
        signInUsingGoogle().then(result => {
            history.push(redirect_uri);
            
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