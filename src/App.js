import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import Itunes from './Components/Itunes';
import Spotify from './Components/Spotify';
import Instagram from './Components/Instagram';

function App() {
  return (
    <Card style={{ width: '18rem' }} className="entire-container card">
      <Itunes />
      <Spotify />
      <Instagram />
    </Card>
  )
}

export default App
