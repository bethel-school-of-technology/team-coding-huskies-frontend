import React, { useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { Button, Card, Form } from 'react-bootstrap';
const SignUp = () => {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState (" ");
    const [name, setName] = useState('');

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(username,password).then(() => {
            navigate('/signin');
        }).catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        })
    }

    return (
        <div>
        <Card>
        <Card.Body>
          <Card.Title>REGISTER</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name"   value={name}
                onChange={e => setName(e.target.value)}/>
            </Form.Group>


            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

        </div>

    )
};

export default SignUp;