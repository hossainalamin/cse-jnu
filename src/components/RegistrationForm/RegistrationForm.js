import { createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
const auth = getAuth(app);
const RegistrationForm = () => {
    const [validation, setValidation] = useState('');
    const [success, setSuccess] = useState(false);
    const getRegisterData = (event) =>{
        setSuccess(false);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])/.test(password)){
            setValidation('Please enter al least one upper letter one lower letter and password length between 6 to 20');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            setValidation('');
            varifyEmail();
            setSuccess(true);
            form.reset();
        })
        .catch((error)=>{
            setValidation(error.message)
        })
        const varifyEmail = () =>{
            sendEmailVerification(auth.currentUser)
            .then(() => {
                setSuccess('Email Sent');
            })
        }
    }
    return (
        <div>
            <Form onSubmit={getRegisterData}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>
                {validation}
                </p>
                {success && <p className='text-success'>User Created successfully</p>
                }
                <Button variant="primary" type="submit">Register
                </Button>
                <p>Already have account login here <Link to={'/login'}>Login</Link></p>
            </Form>
        </div>
    );
};

export default RegistrationForm;