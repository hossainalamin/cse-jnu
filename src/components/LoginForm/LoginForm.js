import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
const auth = getAuth(app);
const LoginForm = () => {
    const [loginSuccess, setLoginSuccess] = useState('');
    const submitLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email);
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredintial =>{
            setLoginSuccess('Login Successfull');
            console.log(loginSuccess);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={submitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <p className='text-success'>
                {loginSuccess}
                </p>
                <Button variant="primary" type="submit">Login
                </Button>
                <p>Register here <Link to={'/'}>register</Link></p>
            </Form>
        </div>
    );
};

export default LoginForm;