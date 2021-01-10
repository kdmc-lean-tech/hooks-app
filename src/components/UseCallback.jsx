import React, { useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import ShowIncrement from './ShowIncrement';

const UseCallback = () => {

  const [ count, setCount ] = useState(10);

  const increment = useCallback((factor) => {
    setCount(c => c + factor);
  }, [ setCount ]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          UseCallback
        </Card.Title>
        <div>
          <h2>{ count }</h2>
        </div>
        <ShowIncrement increment={ increment } />
      </Card.Body>
    </Card>
  );
}

export default UseCallback;
