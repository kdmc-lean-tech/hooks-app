import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import UseState from './UseState';
import HooksWithCustomHook from './CounterWithCustomHook';
import SimpleForm from './SimpleForm';
import CustomForm from './CustomForm';
import MultipleCustomHooks from './MultipleCustomHooks';
import UseCallback from './UseCallback';
import Todos from './Todos';

const HooksContainer = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Working Hooks in React !!!</h1>
      </Jumbotron>
      <Row className='d-flex flex-column'>
        <Col className='use-state mb-4'>
          <UseState />
        </Col>
        <Col className='counter-custom-hook mb-4'>
          <HooksWithCustomHook value='10'/>
        </Col>
        <Col className='simple-form mb-4'>
          <SimpleForm/>
        </Col>
        <Col className='custom-form mb-4'>
          <CustomForm/>
        </Col>
        <Col className='multiple-custom-hooks mb-4'>
          <MultipleCustomHooks/>
        </Col>
        <Col className='use-callback mb-4'>
          <UseCallback/>
        </Col>
        <Col className='use-reducer mb-4'>
          <Todos/>
        </Col>
      </Row>
    </Container>
  );
}

export default HooksContainer;
