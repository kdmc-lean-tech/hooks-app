import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const UseState = () => {

  const [state, setState ] = useState(
    { counterOne: 0, counterTwo: 0 }
  );

  const { counterOne, counterTwo } = state;

  const handleIncrement = () => {
    setState((state) => {
      return { ...state, counterOne: counterOne + 1 }
    });
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
        Counter App (useState)
        </Card.Title>
        <div>
          Counter Value 1: <h2>{ counterOne }</h2>
        </div>
        <div>
          Counter Value 2: <h2>{ counterTwo }</h2>
        </div>
        <Button onClick={ handleIncrement }>
          Increment
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UseState;
