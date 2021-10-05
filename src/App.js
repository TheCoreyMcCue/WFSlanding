import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
      <Card.Link href="https://music.apple.com/us/artist/waiting-for-smith/1192026265">Card Link</Card.Link>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default App
