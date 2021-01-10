import React from 'react';
import { Button } from 'react-bootstrap';

const ShowIncrement = ({ increment }) => {
  return (
    <Button onClick={ () => increment(5) }>
      Increment
    </Button>
  );
}

export default ShowIncrement;
