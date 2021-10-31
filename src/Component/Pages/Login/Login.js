import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const handleGoogle = (e) => {
        signInUsingGoogle();
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