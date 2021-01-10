import React, { useState } from 'react';
import { Fragment } from 'react';
import { Card, Alert, Button } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';

const MultipleCustomHooks = () => {
  const [ counter, setCounter ] = useState(1);
  const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  return (
    <Fragment>
      {
        loading ? <Alert variant='succes'>Loading</Alert>
        :
        <Card>
          <Card.Body>
            <Card.Title>
              Fetch Data (useFetch)
            </Card.Title>
            <div>
              <h2>{ quote }</h2>
            </div>
            <Card.Text>
              { author }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={ handleIncrement }>
              Next
            </Button>
          </Card.Footer>
        </Card>
      }
    </Fragment>
  );
}

export default MultipleCustomHooks;
