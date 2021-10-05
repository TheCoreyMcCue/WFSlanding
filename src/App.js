import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
      <Card.Link href="www.google.com">Card Link</Card.Link>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default App
