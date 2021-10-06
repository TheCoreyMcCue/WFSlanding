import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import Itunes from './Components/Itunes';
import Spotify from './Components/Spotify';
import Instagram from './Components/Instagram';
import Youtube from './Components/Youtube';
import Deezer from './Components/Deezer';
import Website from './Components/Website';
import Hopeless from './Components/Hopeless';
import pic from './Portret-1059.jpg'
import logo from './logoWFS.jpg'

function App() {
  return (
    <>
      <Card style={{ width: '18rem' }} className="entire-container card">
      <img src={logo} alt="Harry waiting for smith" className="logo" />
        <img src={pic} alt="Harry waiting for smith" className="picture" />
        <ListGroup variant="flush">
          <ListGroupItem>
            <Itunes />
          </ListGroupItem>
          <ListGroup.Item>
            <Spotify />
          </ListGroup.Item>
          <ListGroup.Item>
            <Instagram />
          </ListGroup.Item>
          <ListGroup.Item>
            <Youtube />
          </ListGroup.Item>
          <ListGroup.Item>
            <Deezer />
          </ListGroup.Item>
          <ListGroup.Item>
            <Hopeless />
          </ListGroup.Item>
          <ListGroup.Item>
            <Website />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  )
}

export default App
