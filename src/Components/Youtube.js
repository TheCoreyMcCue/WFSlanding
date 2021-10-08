import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/YouTube.svg.png';
import '../../src/App.css';

function Youtube() {
  return (
    <div className="content-container">
      <img src={logo} alt="Check out Waiting for Smith on Youtube" className="youtube-image" />
      <Button href="https://www.youtube.com/channel/UCsoTZ8qLcMzfohGDcvpuT3w" variant="outline-secondary">Play</Button>
    </div>
  )
}

export default Youtube
