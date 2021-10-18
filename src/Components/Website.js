import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/web.png';
import '../../src/App.css';

function Website() {
  return (
    <div className="content-container">
      <img src={logo} alt="Visit our Website" className="website-image" />
      <Button href="https://www.waitingforsmith.co.uk/" variant="secondary">Visit</Button>
    </div>
  )
}

export default Website
