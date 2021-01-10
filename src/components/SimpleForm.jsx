import React, { useEffect, useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const SimpleForm = () => {

  const [ formValues, setValuesForm ] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    console.log('listen form', formValues);
  }, [ formValues ])

  const handleOnChange = ({ target }) => {
    setValuesForm({
      ...formValues,
      [target.name]: target.value
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submit', formValues);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className='mb-4'>
          Simple Form (useEffect)
        </Card.Title>
        <Form onSubmit={ handleOnSubmit }>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Username'
                name='username'
                onChange={ handleOnChange }>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='email'
                placeholder='Email'
                name='email'
                onChange={ handleOnChange }>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                onChange={ handleOnChange }>
              </Form.Control>
            </Form.Group>
            <Button type='submit'>Send</Button>
          </Form>
      </Card.Body>
    </Card>
  );
}

export default SimpleForm;
