import React, { useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

const CustomForm = () => {

  const [ formValues, handleOnChange ] = useForm({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    console.log('listen custom form', formValues);
  }, [ formValues ])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submit custom', formValues);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className='mb-4'>
          Custom Form (useForm)
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

export default CustomForm;
