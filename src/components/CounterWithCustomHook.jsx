import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCounter } from '../hooks/useCounter';

const CounterWithCustomHook = ({value}) => {
  const { state, increment, substract, reset } = useCounter(value);
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>
        Counter App With Custom Hook (useCounter)
        </Card.Title>
        <div>
          Counter Value 1: <h2>{ state }</h2>
        </div>
        <Button className='mr-3' onClick={ () => increment(3) }>
          Increment
        </Button>
        <Button className='mr-3' onClick={ () => substract(3) }>
          Substract
        </Button>
        <Button className='mr-3' onClick={ reset }>
          Reset
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CounterWithCustomHook;
