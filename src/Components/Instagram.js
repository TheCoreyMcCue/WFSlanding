import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/instagram.svg';
import '../../src/App.css';

function Instagram() {
  return (
    <div className="content-container">
      <img src={logo} alt="Follow on Instagram" className="insta-image" />
      <Button href="https://www.instagram.com/waitingforsmith/" variant="outline-secondary">Follow</Button>
    </div>
  )
}

export default Instagram
