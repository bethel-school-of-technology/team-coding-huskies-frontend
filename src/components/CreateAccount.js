import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import UserContext from '../context/UserContext';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [Age, setAge] = useState(0);


  let { createUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    createUser(username, password, name, City, State, Age)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        window.alert('Failed registration: error creating user');
      });
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

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" value={City}
                onChange={e => setCity(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter State" value={State}
                onChange={e => setState(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Age" value={Age}
                onChange={e => setAge(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateAccount;