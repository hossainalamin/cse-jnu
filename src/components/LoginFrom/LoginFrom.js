import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.init';
const auth = getAuth(app);
const LoginFrom = () => {
    const getRegisterData = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user);
        })
        .catch(()=>{

        })
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
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default LoginFrom;