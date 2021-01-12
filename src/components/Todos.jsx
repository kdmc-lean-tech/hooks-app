import React, { useReducer, useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { todosReducer } from './todosReducer';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Master in Javascript',
    done: false
  }
];

const Todos = () => {
  const [ todos, dispatch ] = useReducer( todosReducer, initialState );
  const [ inputValue, setValue ] = useState('');

  const handleOnChange = ({ target }) => {
    setValue(target.value);
  }

  const handleTodoAdd = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      dispatch({
        type: 'add',
        payload: {
          id: new Date().getTime(),
          desc: inputValue,
          done: false
        }
      });
      setValue('');
    }
  }

  const handleDeleteTodo = (index) => {
    dispatch({
      type: 'delete',
      payload: index
    });
  }

  const handleToogle = (toogleId) => {
    dispatch({
      type: 'toogle',
      payload: toogleId
    });
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Todos App (useReducer)
        </Card.Title>
        <Container>
          <Row>
            <Col md='6' className='border'>
              <ListGroup as='ul' style={{ overflow: 'auto', height: '200px' }}>
                {
                  todos.map((todo, idx) =>
                    <ListGroup.Item as='li' key={ todo.id }
                      onClick={ () => handleToogle(todo.id) } style={{ cursor: 'pointer' }}>
                      <Row>
                        <Col md='9'>
                          <p className={ `${todo.done && 'line-through'}` }>{ todo.desc }</p>
                        </Col>
                        <Col md='3'>
                          <Button variant="danger" onClick={ () => handleDeleteTodo(idx) }>Delete</Button> 
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )
                }
              </ListGroup>
            </Col>
            <Col md='6' className='border'>
              <h2>Add Todo</h2>
              <Form onSubmit={ handleTodoAdd }>
                <Form.Group>
                  <Form.Control
                    placeholder='Add todo'
                    name='add'
                    onChange={ handleOnChange }
                    value={ inputValue }
                  >
                  </Form.Control>
                </Form.Group>
                <Button type='submit'>Add</Button>
              </Form>                         
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Todos;
