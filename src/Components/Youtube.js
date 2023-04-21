import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/youtube-white.jpeg';
import '../../src/App.css';

function Youtube() {
  return (
    <div className="content-container">
      <img src={logo} alt="Check out Waiting for Smith on Youtube" className="youtube-image" />
      {/* <i class="fab fa-youtube"></i> */}
      <Button href="https://www.youtube.com/channel/UCsoTZ8qLcMzfohGDcvpuT3w" variant="secondary">Play</Button>
    </div>
  )
}

export default Youtube
