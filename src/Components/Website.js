import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/web.jpeg';
import '../../src/App.css';

function Website() {
  return (
    <div className="content-container">
      <img src={logo} alt="" className="spotify-image" />
      <Button href="https://www.waitingforsmith.com/" variant="outline-secondary">Visit</Button>
      {/* <a href="https://www.waitingforsmith.com/">Website</a> */}
    </div>
  )
}

export default Website
