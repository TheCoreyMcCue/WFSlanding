import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/Instagram-logo.png';
import '../../src/App.css';

function Instagram() {
  return (
    <div className="content-container">
      <img src={logo} alt="Follow on Instagram" className="insta-image" />
      <Button href="https://www.instagram.com/waitingforsmith/" variant="secondary">Follow</Button>
    </div>
  )
}

export default Instagram
